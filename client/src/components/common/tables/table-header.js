import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './table-row';
import ColumnHeader from './column-header';

export default class TableHeader extends React.Component {

  render() {
    const { headers } = this.props;
    return (
      <thead className="thead-dark">
        <TableRow clickable={false}>
          {this.renderHeaders(headers)}
        </TableRow>
      </thead>
    )
  }

  renderHeaders(headers) {
    return headers.map((header, index) => {
      return <ColumnHeader key={index} header={header} />
    })
  }
}

TableHeader.displayName = 'TableHeader';

TableHeader.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    classes: PropTypes.string,
  })).isRequired,
}
