import React from 'react';
import PropTypes from 'prop-types';
import Table from '../common/tables/table';
import TableHeader from '../common/tables/table-header';
import TableBody from '../common/tables/table-body';
import TableRow from '../common/tables/table-row';
import Td from '../common/tables/table-data';

import '../../styles/table-styles.css';

export default class AddressContainer extends React.Component {

  render() {
    console.log(this.props)
    const { addresses } = this.props;
    const headers = [
      { name: 'Address' },
      { name: 'City', classes: 'text-center' },
      { name: 'State', classes: 'text-center' },
      { name: 'Zip Code', classes: 'text-center' },
      { name: 'Country', classes: 'text-center' }
    ]

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
          <Td classes="text-center">{address.country}</Td>
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
