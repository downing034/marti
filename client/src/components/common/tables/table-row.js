import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class TableRow extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  render() {
    const { children, clickable } = this.props;
    if (clickable) {
      return (
        <tr onClick={this.handleClick}>{children}</tr>
      )
    } else {
      return (
        <tr>{children}</tr>
      )
    }
  }

  handleClick() {
    const { to, history } = this.props;
    history.push(to)
  }
}

TableRow.displayName = 'TableRow';

TableRow.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]).isRequired,
  clickable: PropTypes.bool.isRequired,
  to: PropTypes.string
}
