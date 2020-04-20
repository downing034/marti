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
    this.onReactivate = this.onReactivate.bind(this)
  }

  componentDidMount() {
    const { getAddresses } = this.props;
    getAddresses()
  }

  onReactivate(addressId) {
    const { history, reactivateAddress } = this.props;
    return reactivateAddress(addressId).then(() => {
      history.push(`/addresses/${addressId}`)
    })
  }

  render() {
    const { completedAddresses } = this.props;
    const headers = [
      { name: 'Address' },
      { name: 'City', classes: 'text-center' },
      { name: 'State', classes: 'text-center' },
      { name: 'Zip Code', classes: 'text-center' },
      { name: 'Country', classes: 'text-center' },
      { name: 'Actions', classes: 'text-center' }
    ]

    const addressTableRows = Array.isArray(completedAddresses) && completedAddresses.length ?
      this.renderCompletedAddresses(completedAddresses) : this.renderEmptyRow()

    return (
      <div>
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

  renderCompletedAddresses(completedAddresses) {
    const { history } = this.props;
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
              onClick={() => { if (window.confirm('Are you sure you wish to reactivate this address?')) this.onReactivate(address.id) } }
            >
              Reactivate Address
            </button>
          </Td>
        </TableRow>
      )
    })
  }

  renderEmptyRow() {
    return (
      <EmptyRow colspan="6" classes="text-center" rowText="You currently have no completed addresses."/>
    )
  }
}
