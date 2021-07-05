import styled from 'styled-components';

export const InputGroup = styled.div`
  width: 100%;
  height: calc(48px + 12px); /* input height + message height */
  position: relative;
`;

export const InputBase = styled.div`
  position: relative;
  display: inline-flex;
  position: relative;
  box-sizing: border-box;
  align-items: center;
  height: 48px;
  width: 100%;
  padding: 14px 16px;
`;

export const LabelStyle = styled.label`
  z-index: 1;
  top: 0;
  left: 0;
  position: absolute;
  display: block;
  padding: 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  font-weight: 400;
  transform-origin: top left;
  transform: translate(14px, 16px) scale(1);
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms,
    transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  pointer-events: none;

  &.fail {
    color: #ff2626;
  }
`;

export const InputTextStyle = styled.input`
  width: 100%;
  border: 0;
  display: block;
  min-width: 0;
  background: none;
  box-sizing: content-box;
  letter-spacing: inherit;
  margin: 0;
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  transition: color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  &:focus {
    display: block;
  }

  &:focus,
  &:focus + label {
    color: #ffffff;
  }

  &:focus + label,
  &.hasValue + label {
    transform: translate(14px, -6px) scale(0.75);
    font-size: 16px;
    &.fail {
      color: #ff2626;
    }
  }

  &:focus ~ fieldset {
    border-color: #ffffff;
    &.fail {
      border-color: #ff2626;
    }
  }

  &:focus ~ fieldset legend,
  &.hasValue ~ fieldset legend {
    max-width: 1000px;
    transition: max-width 100ms cubic-bezier(0, 0, 0.2, 1) 50ms;
    font-size: 12px;
  }

  &:focus ~ .icon .password {
    color: #ffffff;
  }

  &:focus ~ .icon {
    visibility: visible;
    pointer-events: visiblePainted;
    cursor: pointer;
  }
`;

export const FieldsetStyle = styled.fieldset`
  top: -5px;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0 9px;
  overflow: hidden;
  position: absolute;
  border-radius: 10px;
  border-width: 2px;
  border-style: solid;
  border-color: rgba(255, 255, 255, 0.5);
  pointer-events: none;
  font-size: 12px;
  transition: border-color 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;

  &.fail {
    border-color: #ff2626;
  }

  & legend {
    display: block;
    width: auto;
    height: 11px;
    padding: 0;
    max-width: 0.01px;
    visibility: hidden;
    text-align: left;
    line-height: 1.1876em;
    letter-spacing: 0.00938em;
    font-size: 12px;
    transition: max-width 50ms cubic-bezier(0, 0, 0.2, 1) 0ms;

    & > span {
      display: inline-block;
      padding-left: 5px;
      /* padding-right: 5px; */
    }
  }
`;

export const InputMessage = styled.div`
  font-size: 12px;
  color: #ff2626;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-right: 14px;
  visibility: hidden;
  pointer-events: none;

  svg {
    width: 20px;
    height: 20px;

    &.fail {
      color: #ff2626;
    }

    &.success {
      color: #48fea7;
    }

    &.password {
      color: #ffffff;
    }
  }

  &.showIcon {
    visibility: visible;
    pointer-events: visiblePainted;
    cursor: pointer;
  }
`;
