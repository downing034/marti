import React from 'react';

export default function Td({ children, classes, colspan }) {
  return (<td colSpan={colspan} className={classes ? classes : ""}>{children}</td>);
}
