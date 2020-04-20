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

import { formatCountry } from '../../utils/view-utils';

export default class Trash extends React.Component {
  constructor(props) {
    super(props)
    this.onRestore = this.onRestore.bind(this)
    this.onDelete = this.onDelete.bind(this)
  }

  componentDidMount() {
    const { getAddresses } = this.props;
    getAddresses()
  }

  onRestore(addressId) {
    const { restoreAddress } = this.props;
    restoreAddress(addressId).then(() => {})
  }

  onDelete(addressId) {
    const { deleteAddress } = this.props;

    return deleteAddress(addressId).then(() => {})
  }

  render() {
    const { deletedAddresses } = this.props;

    const headers = [
      { name: 'Address' },
      { name: 'City', classes: 'text-center' },
      { name: 'State', classes: 'text-center' },
      { name: 'Zip Code', classes: 'text-center' },
      { name: 'Country', classes: 'text-center' },
      { name: 'Actions', classes: 'text-center' }
    ]

    const addressTableRows = Array.isArray(deletedAddresses) && deletedAddresses.length ?
      this.renderDeletedAddresses(deletedAddresses) : this.renderEmptyRow('addresses')

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
              <TableHeader headers={headers} />
              <TableBody>
                {addressTableRows}
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
              onClick={() => { this.onRestore(addressId) }}
            >
              Restore Address
            </button>
            <button
              className="btn btn-danger"
              onClick={() => { if (window.confirm('Are you sure you wish to delete this address? This cannot be undone.')) this.onDelete(address.id) } }
            >
              Delete Address
            </button>
          </Td>
        </TableRow>
      )
    })
  }

  renderEmptyRow(entity) {
    return (
      <EmptyRow colspan="6" classes="text-center" rowText={`You currently have no ${entity}.`}/>
    )
  }
}
