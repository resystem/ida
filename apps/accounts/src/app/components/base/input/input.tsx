import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  IconContainer,
  InputGroup,
  InputBase,
  InputTextStyle,
  FieldsetStyle,
  LabelStyle,
  InputMessage,
} from './input.style';

/**
 *
 * @param classObject
 * @returns
 */
const buildClass = (classObject: any) => {
  const keys = Object.keys(classObject);
  const classes = keys
    .map((key) => (classObject[key] ? key : false))
    .filter((item) => item !== false);

  return classes.join(` `).trim();
};

/**
 *
 * @param error
 * @returns
 */
const hasError = (error: any) => error.length > 0;

const InputText = ({
  error,
  id,
  label,
  onChange,
  customStyle,
  type,
  value,
  ...props
}: any) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focus, setFocus] = useState(false);

  const handleOnChange = (event: any) => {
    if (onChange) onChange(event.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <InputGroup>
      <InputBase>
        <InputTextStyle
          {...props}
          value={value}
          onChange={handleOnChange}
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
          id={id}
          className={value.length ? 'hasValue' : ''}
          type={showPassword ? 'text' : type}
        />
        <LabelStyle
          htmlFor={id}
          className={buildClass({ fail: hasError(error) })}
        >
          {label}
        </LabelStyle>
        <FieldsetStyle
          aria-hidden="true"
          className={buildClass({ fail: hasError(error) })}
        >
          <legend>
            <span>{label}</span>
          </legend>
        </FieldsetStyle>
        <IconContainer
          className={buildClass({ icon: true, showIcon: type === 'password' })}
        >
          <If condition={type !== 'password'}>
            <ValidationIcon errorMessage={error} />
          </If>
          <If condition={type === 'password'}>
            <PasswordIcon
              showPassword={showPassword}
              toggleShowPassword={toggleShowPassword}
            />
          </If>
        </IconContainer>
      </InputBase>
      <InputMessage>{error}</InputMessage>
    </InputGroup>
  );
};

/**
 *
 * @param param0
 * @returns
 */
const ValidationIcon = ({ errorMessage }: any) =>
  hasError(errorMessage) ? null : null;

/**
 *
 * @param param0
 * @returns
 */
const PasswordIcon = ({ showPassword, toggleShowPassword }: any) =>
  showPassword ? null : (
    <svg
      width="22"
      height="16"
      viewBox="0 0 22 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5ZM11 13C8.24 13 6 10.76 6 8C6 5.24 8.24 3 11 3C13.76 3 16 5.24 16 8C16 10.76 13.76 13 11 13ZM8 8C8 6.34 9.34 5 11 5C12.66 5 14 6.34 14 8C14 9.66 12.66 11 11 11C9.34 11 8 9.66 8 8Z"
        fill="#AAAAAA"
      />
    </svg>
  );

const If = ({ condition, children }: any) => (condition ? children : null);

InputText.propTypes = {
  error: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func,
  customStyle: PropTypes.string,
  type: PropTypes.oneOf(['tel', 'email', 'text', 'password']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

InputText.defaultProps = {
  customStyle: '',
  error: '',
  label: '',
  onChange: () => null,
  type: 'text',
  value: '',
};

export default InputText;
