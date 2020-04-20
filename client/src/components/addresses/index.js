import React from 'react';
import PropTypes from 'prop-types';
import Table from '../common/tables/table';
import TableHeader from '../common/tables/table-header';
import TableBody from '../common/tables/table-body';
import TableRow from '../common/tables/table-row';
import Td from '../common/tables/table-data';
import NewAddressFormContainer from './new-address/new-address-form-container';
import Modal from '../common/modal';

import { formatCountry } from '../../utils/view-utils';

import '../../styles/table-styles.css';

export default class AddresssIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false
    }
    this.showCreateModal = this.showCreateModal.bind(this)
    this.hideCreateModal = this.hideCreateModal.bind(this)
  }

  showCreateModal() {
    this.setState({ showModal: true })
  }

  hideCreateModal() {
    this.setState({ showModal: false })
  }

  render() {
    const { addresses } = this.props;
    const headers = [
      { name: 'Address' },
      { name: 'City', classes: 'text-center' },
      { name: 'State', classes: 'text-center' },
      { name: 'Zip Code', classes: 'text-center' },
      { name: 'Country', classes: 'text-center' }
    ]

    const tableRows = Array.isArray(addresses) && addresses.length ?
      this.renderAddresses(addresses) : this.renderEmptyRow()

    return (
      <div>
        <button
          onClick={this.showCreateModal}
          className="btn btn-success float-right create-button"
        >
          Create New Address
        </button>

        <Modal
          show={this.state.showModal}
          handleClose={this.hideCreateModal}
          modalTitle="Create Address"
        >
          <NewAddressFormContainer handleFormAction={this.hideCreateModal} />
        </Modal>

        <Table>
          <TableHeader headers={headers} />
          <TableBody>
            {tableRows}
          </TableBody>
        </Table>
      </div>
    );
  }

  renderAddresses(addresses) {
    const { history } = this.props;
    return addresses.map((address, index) => {
      const addressId = address.id
      return (
        <TableRow
          key={index}
          clickable={true}
          to={`/addresses/${addressId}`}
          history={history}
        >
          <Td to={`/addresses/${addressId}`}>{address.address}</Td>
          <Td classes="text-center">{address.city}</Td>
          <Td classes="text-center">{address.state}</Td>
          <Td classes="text-center">{address.zipCode}</Td>
          <Td classes="text-center">{formatCountry(address.country)}</Td>
        </TableRow>
      )
    })
  }

  renderEmptyRow() {
    return (
      <Td classes="text-center">You currently have no addresses.</Td>
    )
  }
}

AddresssIndex.displayName = 'AddresssIndex';

AddresssIndex.propTypes = {
  addresses: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zipCode: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};
