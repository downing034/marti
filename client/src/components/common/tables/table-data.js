import React from 'react';
import { Link } from 'react-router-dom';

export default function Td({ children, to, classes, handleClick }) {
  return (<td className={classes ? classes : ""}>{children}</td>);
}
