import PropTypes from 'prop-types';
import { Button, Loading } from './default-button.style';

const DefaultButton = ({
  children,
  type,
  onClick,
  block,
  disabled,
  loading,
}: any) => (
  <Button
    loading={loading}
    type={type}
    onClick={loading || disabled ? null : onClick}
    block={block}
    disabled={disabled}
  >
    {loading ? (
      <Loading
        width="22"
        height="22"
        viewBox="0 0 22 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM2.92423 11C2.92423 15.4601 6.53987 19.0758 11 19.0758C15.4601 19.0758 19.0758 15.4601 19.0758 11C19.0758 6.53987 15.4601 2.92423 11 2.92423C6.53987 2.92423 2.92423 6.53987 2.92423 11Z"
          fill="#E5E5E5"
          fillOpacity="0.4"
        />
        <path
          d="M1.46211 11C0.654611 11 -0.0100014 10.3425 0.0970172 9.54213C0.360052 7.57493 1.15206 5.70571 2.4011 4.14005C3.95559 2.1915 6.1258 0.828692 8.55616 0.274906C10.9865 -0.27888 13.5329 0.00919798 15.7781 1.09194C17.5821 1.96192 19.1058 3.30349 20.1951 4.96255C20.6383 5.63756 20.3241 6.51806 19.5963 6.8679C18.8685 7.21773 18.0048 6.90078 17.5296 6.24788C16.7502 5.17691 15.7144 4.30774 14.5079 3.72589C12.8596 2.93098 10.9901 2.71948 9.20583 3.12605C7.42155 3.53262 5.82827 4.53314 4.68702 5.96369C3.85166 7.01082 3.29474 8.24289 3.05622 9.54582C2.91081 10.3401 2.26962 11 1.46211 11Z"
          fill="#48FEA7"
        />
      </Loading>
    ) : (
      children
    )}
  </Button>
);

DefaultButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  block: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

DefaultButton.defaultProps = {
  type: 'button',
  block: false,
  disabled: false,
  loading: false,
};

export default DefaultButton;
