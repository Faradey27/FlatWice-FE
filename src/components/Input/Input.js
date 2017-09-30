import { string } from 'prop-types';
import styles from './InputStyles';

const Input = ({ name, theme, placeholder }) => (
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
    />
    <style jsx>{styles}</style>
  </div>
);

Input.propTypes = {
  name: string,
  placeholder: string,
  theme: string,
};

export default Input;
