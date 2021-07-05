import { CheckboxContainer, Text } from './checkbox.style';

const UncheckedIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.3333 2.66667V21.3333H2.66667V2.66667H21.3333ZM21.3333 0H2.66667C1.2 0 0 1.2 0 2.66667V21.3333C0 22.8 1.2 24 2.66667 24H21.3333C22.8 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8 0 21.3333 0Z"
      fill="white"
    />
  </svg>
);

const CheckedIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.3333 0H2.66667C1.18667 0 0 1.2 0 2.66667V21.3333C0 22.8 1.18667 24 2.66667 24H21.3333C22.8133 24 24 22.8 24 21.3333V2.66667C24 1.2 22.8133 0 21.3333 0ZM9.33333 18.6667L2.66667 12L4.54667 10.12L9.33333 14.8933L19.4533 4.77333L21.3333 6.66667L9.33333 18.6667Z"
      fill="#6A49EF"
    />
  </svg>
);

const Checkbox = ({ checked, children, onClick }: any) => (
  <CheckboxContainer onClick={onClick}>
    {checked ? <CheckedIcon /> : <UncheckedIcon />}
    <Text>{children}</Text>
  </CheckboxContainer>
);

export default Checkbox;
