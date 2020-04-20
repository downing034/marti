import React from 'react';
import TableRow from './table-row';
import Td from './table-data';

export default function EmptyRow({ rowText, colspan, classes }) {
  return (
    <TableRow clickable={false}>
      <Td colspan="6" classes={classes}>{rowText}</Td>
    </TableRow>
  )
}
