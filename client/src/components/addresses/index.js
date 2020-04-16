import React from 'react';
import PropTypes from 'prop-types';
import Loader from '../common/loader';
import Table from '../common/tables/table';
import TableHeader from '../common/tables/table-header';
import TableBody from '../common/tables/table-body';
import TableRow from '../common/tables/table-row';

export default class AddressContainer extends React.Component {
  componentDidMount() {
    const { loadAddresses } = this.props;
    loadAddresses()
  }

  render() {
    const { addresses, addressesLoaded } = this.props;
    const headers = ['Address', 'City', 'State', 'Zip Code', 'Country'];
    console.log(addressesLoaded)
    if (!addressesLoaded) { return ( <Loader /> ) }

    return (
      <div>
        <Table>
          <TableHeader headers={headers} />
          <TableBody>
            {this.renderAddresses(addresses)}
          </TableBody>
        </Table>
      </div>
    );
  }

  renderAddresses(addresses) {
    return addresses.map((address, index) => {
      return (
        <TableRow key={index}>
          <td>{address.address}</td>
          <td>{address.city}</td>
          <td>{address.state}</td>
          <td>{address.zipCode}</td>
          <td>{address.country}</td>
        </TableRow>
      )
    })
  }
}

AddressContainer.displayName = 'AddressContainer';

AddressContainer.propTypes = {
  addresses: PropTypes.arrayOf(
    PropTypes.shape({
      address: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zipCode: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
};
