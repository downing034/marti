import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default class Checkbox extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    disabled: PropTypes.bool
  };

  static defaultProps = {
    checked: false,
    disabled: false
  };

  constructor(props) {
    super(props);
    this.state = { checked: props.input.checked };
  }

  handleChange = () => {
    this.setState({ checked: !this.state.checked });
  };

  render() {
    const { disabled, input } = this.props;
    const { checked } = this.state;
    console.log('propy', this.props)
    console.log('state', this.state)
    return (
      <div className="React__checkbox">
        <label>
          <input
            {...input}
            type="checkbox"
            className="React__checkbox--input"
            checked={checked}
            disabled={disabled}
            onChange={(event) => {
              input.onChange(event.target.checked)
              this.handleChange()
             }}
          />
          <span className="React__checkbox--span">
            {this.renderCheckedIcon()}
          </span>
        </label>
      </div>
    );
  }

  renderCheckedIcon() {
    const { checked } = this.state;
    if (checked) {
      return (
        <FontAwesomeIcon
          icon={faCheck}
          size="1x"
          color="#FFFFFF"
          title="Loading"
        />
      )
    } else {
      return (
        <br />
      )
    }
  }
}
