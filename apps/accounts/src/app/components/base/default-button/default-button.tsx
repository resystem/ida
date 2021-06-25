import PropTypes from 'prop-types';
import { Button } from './default-button.style';

const DefaultButton = ({ children, type, onClick, block }: any) => (
  <Button type={type} onClick={onClick} block={block}>
    {children}
  </Button>
);

DefaultButton.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  block: PropTypes.bool,
};

DefaultButton.defaultProps = {
  type: 'button',
  block: false,
};

export default DefaultButton;
