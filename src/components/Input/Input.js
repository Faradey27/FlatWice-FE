import { string, boolean } from 'prop-types';
import { Component } from 'react';
import styles from './InputStyles';

class Input extends Component {
  static propTypes = {
    focusOnMount: boolean,
    name: string,
    placeholder: string,
    theme: string,
  }

  componentDidMount() {
    if (this.props.focusOnMount) {
      this.inputNode.focus();
    }
  }

  setInputNode = (node) => {
    this.inputNode = node;
  }

  render() {
    const { name, theme, placeholder } = this.props;


    return (
      <div
        className={`input-wrap ${theme}-wrap`}
        data-testid="input-parent"
      >
        <input
          className={theme}
          data-testid="input"
          id={name}
          name={name}
          placeholder={placeholder}
          ref={this.setInputNode}
        />
        <style jsx>{styles}</style>
      </div>
    );
  }
}

export default Input;
