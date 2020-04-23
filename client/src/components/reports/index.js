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
    this.onReactivateAddress = this.onReactivateAddress.bind(this)
    this.onReactivatePerson = this.onReactivatePerson.bind(this)
  }

  componentDidMount() {
    const { getAddresses } = this.props;
    getAddresses()
  }

  onReactivateAddress(addressId) {
    const { history, reactivateAddress } = this.props;
    return reactivateAddress(addressId).then(() => {
      history.push(`/addresses/${addressId}`)
    })
  }

  onReactivatePerson(personId) {
    const { history, reactivatePerson } = this.props;
    return reactivatePerson(personId).then(() => {
      history.push(`/people/${personId}`)
    })
  }

  render() {
    const { completedAddresses, completedPeople } = this.props;
    const addressHeaders = [
      { name: 'Address' },
      { name: 'City', classes: 'text-center' },
      { name: 'State', classes: 'text-center' },
      { name: 'Zip Code', classes: 'text-center' },
      { name: 'Country', classes: 'text-center' },
      { name: 'Actions', classes: 'text-center' }
    ]

    const addressTableRows = Array.isArray(completedAddresses) && completedAddresses.length ?
      this.renderCompletedAddresses(completedAddresses) : this.renderEmptyRow('addresses')

    const personHeaders = [
      { name: 'First Name' },
      { name: 'Last Name' },
      { name: 'Buyer', classes: 'text-center' },
      { name: 'Seller', classes: 'text-center' },
      { name: 'Agent', classes: 'text-center' },
      { name: 'Actions', classes: 'text-center' }
    ]

    const personTableRows = Array.isArray(completedPeople) && completedPeople.length ?
      this.renderCompletedPeople(completedPeople) : this.renderEmptyRow('people')

    return (
      <div>
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

  renderCompletedAddresses(completedAddresses) {
    return completedAddresses.map((address, index) => {
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
              className="btn btn-primary"
              onClick={() => { if (window.confirm('Are you sure you wish to reactivate this address?')) this.onReactivateAddress(addressId) } }
            >
              Reactivate Address
            </button>
          </Td>
        </TableRow>
      )
    })
  }

  renderCompletedPeople(completedPeople) {
    return completedPeople.map((person, index) => {
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
              className="btn btn-primary"
              onClick={() => { if (window.confirm('Are you sure you wish to reactivate this person?')) this.onReactivatePerson(personId) } }
            >
              Reactivate Person
            </button>
          </Td>
        </TableRow>
      )
    })
  }

  renderEmptyRow(entity) {
    return (
      <EmptyRow colspan="6" classes="text-center" rowText={`You currently have no completed ${entity}.`}/>
    )
  }
}
