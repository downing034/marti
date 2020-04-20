import React from 'react';

export default function Td({ children, classes }) {
  return (<td className={classes ? classes : ""}>{children}</td>);
}
