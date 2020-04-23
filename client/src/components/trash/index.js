import React from 'react';

import Panel from '../common/panels/panel';
import PanelHeader from '../common/panels/panel-header';
import PanelBody from '../common/panels/panel-body';
import PanelFooter from '../common/panels/panel-footer';

import Table from '../common/tables/table';
import TableHeader from '../common/tables/table-header';
import TableBody from '../common/tables/table-body';
import TableRow from '../common/tables/table-row';
import EmptyRow from '../common/tables/empty-row';
import Td from '../common/tables/table-data';

import {
  formatCountry,
  renderAgentIcon,
  renderBuyerIcon,
  renderSellerIcon
} from '../../utils/view-utils';

export default class Trash extends React.Component {
  constructor(props) {
    super(props)
    this.onAddressRestore = this.onAddressRestore.bind(this)
    this.onAddressDelete = this.onAddressDelete.bind(this)
    this.onPersonRestore = this.onPersonRestore.bind(this)
    this.onPersonDelete = this.onPersonDelete.bind(this)
  }

  componentDidMount() {
    const { getAddresses } = this.props;
    getAddresses()
  }

  onAddressRestore(addressId) {
    const { restoreAddress } = this.props;
    restoreAddress(addressId).then(() => {})
  }

  onAddressDelete(addressId) {
    const { deleteAddress } = this.props;

    return deleteAddress(addressId).then(() => {})
  }

  onPersonRestore(personId) {
    const { restorePerson } = this.props;
    restorePerson(personId).then(() => {})
  }

  onPersonDelete(personId) {
    const { deletePerson } = this.props;

    return deletePerson(personId).then(() => {})
  }

  render() {
    const { deletedAddresses, deletedPeople } = this.props;

    const addressHeaders = [
      { name: 'Address' },
      { name: 'City', classes: 'text-center' },
      { name: 'State', classes: 'text-center' },
      { name: 'Zip Code', classes: 'text-center' },
      { name: 'Country', classes: 'text-center' },
      { name: 'Actions', classes: 'text-center' }
    ]

    const addressTableRows = Array.isArray(deletedAddresses) && deletedAddresses.length ?
      this.renderDeletedAddresses(deletedAddresses) : this.renderEmptyRow('addresses')

    const personHeaders = [
      { name: 'First Name' },
      { name: 'Last Name' },
      { name: 'Buyer', classes: 'text-center' },
      { name: 'Seller', classes: 'text-center' },
      { name: 'Agent', classes: 'text-center' },
      { name: 'Actions', classes: 'text-center' }
    ]

    const personTableRows = Array.isArray(deletedPeople) && deletedPeople.length ?
      this.renderDeletedPeople(deletedPeople) : this.renderEmptyRow('people')

    return (
      <div>
        <h4 className="text-center">The trash page is destructive.
        Items deleted from this page, along with their history, will be gone for good.
        Please make sure you're certain you want to delete an item before proceeding.
        </h4>

        <Panel>
          <PanelHeader
            headerText="Address Information"
          />
          <PanelBody>
            <Table>
              <TableHeader headers={addressHeaders} />
              <TableBody>
                {addressTableRows}
              </TableBody>
            </Table>
          </PanelBody>
          <PanelFooter />
        </Panel>
        <br />

        <Panel>
          <PanelHeader
            headerText="Person Information"
          />
          <PanelBody>
            <Table>
              <TableHeader headers={personHeaders} />
              <TableBody>
                {personTableRows}
              </TableBody>
            </Table>
          </PanelBody>
          <PanelFooter />
        </Panel>
      </div>
    )
  }

  renderDeletedAddresses(deletedAddresses) {
    return deletedAddresses.map((address, index) => {
      const addressId = address.id
      return (
        <TableRow
          key={index}
          clickable={false}
        >
          <Td>{address.address}</Td>
          <Td classes="text-center">{address.city}</Td>
          <Td classes="text-center">{address.state}</Td>
          <Td classes="text-center">{address.zipCode}</Td>
          <Td classes="text-center">{formatCountry(address.country)}</Td>
          <Td classes="text-center">
            <button
              className="btn btn-primary submit-button"
              onClick={() => { this.onAddressRestore(addressId) }}
            >
              Restore Address
            </button>
            <button
              className="btn btn-danger"
              onClick={() => { if (window.confirm('Are you sure you wish to delete this address? This cannot be undone.')) this.onAddressDelete(addressId) } }
            >
              Delete Address
            </button>
          </Td>
        </TableRow>
      )
    })
  }

  renderDeletedPeople(deletedPeople) {
    return deletedPeople.map((person, index) => {
      const personId = person.id
      const buyer = person.isBuyer
      const seller = person.isSeller
      const agent = person.isAgent
      return (
        <TableRow
          key={index}
          clickable={false}
        >
          <Td>{person.firstName}</Td>
          <Td>{person.lastName}</Td>
          <Td classes="text-center">{ buyer ? renderBuyerIcon() : '' }</Td>
          <Td classes="text-center">{ seller ? renderSellerIcon() : '' }</Td>
          <Td classes="text-center">{ agent ? renderAgentIcon() : '' }</Td>
          <Td classes="text-center">
            <button
              className="btn btn-primary submit-button"
              onClick={() => { this.onPersonRestore(personId) }}
            >
              Restore Person
            </button>
            <button
              className="btn btn-danger"
              onClick={() => { if (window.confirm('Are you sure you wish to delete this person? This cannot be undone.')) this.onPersonDelete(personId) } }
            >
              Delete Person
            </button>
          </Td>
        </TableRow>
      )
    })
  }

  renderEmptyRow(entity) {
    return (
      <EmptyRow colspan="6" classes="text-center" rowText={`There currently are no ${entity} in this list.`}/>
    )
  }
}
