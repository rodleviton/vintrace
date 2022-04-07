import PropTypes from 'prop-types';
import React, { forwardRef, useEffect, useState } from 'react';
import useCustomValidity from '../../hooks/useCustomValidity';
import useMergedRef from '../../hooks/useMergedRef';
import FieldMessage from './FieldMessage';
import Label from './Label';

/**
 * Accessible text field
 */
const TextField = forwardRef(
  (
    {
      id,
      type,
      error,
      label,
      placeholder,
      disabled,
      name,
      iconStart,
      iconEnd,
      pattern,
      onChange,
      required,
      onBlur,
      onFocus,
      value,
      autoFocus,
      autoComplete,
      errorMessage,
      hideError,
      inputRef,
      aria,
      ...props
    },
    ref,
  ) => {
    const fieldRef = useMergedRef([inputRef]);
    const [validationMessage, setValidationMessage] = useState('');

    // Set custom validation message from user provided error
    useCustomValidity(fieldRef, error);

    // Determine if a user provided or native html validation message exists
    useEffect(() => {
      if (fieldRef?.current?.validationMessage)
        setValidationMessage(
          errorMessage || fieldRef?.current?.validationMessage,
        );
      else setValidationMessage('');
    }, [fieldRef, errorMessage]);

    return (
      <div id={`${id}-field-group`} className="w-full" ref={ref} {...props}>
        {label && (
          <Label id={`${id}-field-label`} htmlFor={`${id}-field-input`}>
            {label}
          </Label>
        )}
        <div className="flex relative">
          {iconStart && (
            <div className="flex w-12 h-12 items-center justify-center absolute bottom-0 left-0">
              {iconStart}
            </div>
          )}
          <input
            id={`${id}-field-input`}
            data-testid={`${id}-field-input`}
            className={[
              'px-5 py-3 border text-sm focus:outline-none focus:ring ring-offset-0 ring-blue-400 rounded-sm w-full h-12',
              iconStart ? 'pl-12' : '',
              iconEnd ? 'pr-12' : '',
              !hideError && (!!error || !!validationMessage)
                ? 'border-red-200'
                : 'border-gray-200',
            ].join(' ')}
            ref={fieldRef}
            placeholder={placeholder}
            disabled={disabled}
            name={name}
            required={required}
            pattern={pattern}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value}
            autoFocus={autoFocus}
            autoComplete={autoComplete}
            type={type}
            {...aria}
          />
          {iconEnd && (
            <div className="flex w-12 h-12 items-center justify-center absolute bottom-0 right-0">
              {iconEnd}
            </div>
          )}
        </div>
        {!hideError && (error || validationMessage) && (
          <FieldMessage id={`${id}-field-message`} type="error">
            {error || validationMessage}
          </FieldMessage>
        )}
      </div>
    );
  },
);

TextField.displayName = 'TextField';
TextField.propTypes = {
  /** HTML id attribute */
  id: PropTypes.string.isRequired,
  /** Select field label text */
  label: PropTypes.node,
  /** Select field placeholder option */
  placeholder: PropTypes.string,
  /** Indicates if control can be interacted with */
  disabled: PropTypes.bool,
  /** HTML name attribute */
  name: PropTypes.string,
  /** HTML pattern attribute */
  pattern: PropTypes.string,
  /** onChange callback  */
  onChange: PropTypes.func,
  /** onBlur callback */
  onBlur: PropTypes.func,
  /** onFocus callback */
  onFocus: PropTypes.func,
  /** HTML input value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /** Autofocus on input */
  autoFocus: PropTypes.bool,
  /** Autocomplete on input */
  autoComplete: PropTypes.string,
  /** Text input type */
  type: PropTypes.oneOf([
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'password',
    'search',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
  /** Indicates required field */
  required: PropTypes.bool,
  /**
   * Prevent showing field error
   * Useful if you want to control when field errors are first displayed i.e. onSubmit
   */
  hideError: PropTypes.bool,
  /** Field error message */
  error: PropTypes.string,
  /** Override native error message */
  errorMessage: PropTypes.string,
  /** Optional icon positioned at start of input */
  iconStart: PropTypes.node,
  /** Optional icon positioned at end of input */
  iconEnd: PropTypes.node,
  /** Array of aria accessibility attributes */
  aria: PropTypes.object,
  /** Optional ref to be applied to input */
  inputRef: PropTypes.object,
};

export default TextField;
