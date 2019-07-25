import React from 'react';
import PropTypes from 'prop-types';
import style from './formGroup.css';

const FormGroup = ({
  type, placeholder, id, handleInput, name,
}) => (
  <div className={style.formGroup}>
    <input
      type={type}
      className={style.formControl}
      placeholder={placeholder}
      required
      id={id}
      onChange={handleInput}
      name={name}
    />
  </div>
);

FormGroup.defaultProps = {
  placeholder: '',
};
FormGroup.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  handleInput: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};
export default FormGroup;
