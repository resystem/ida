import PropTypes from 'prop-types';
import DefaultButton from '../../components/base/default-button/default-button';
import { Section, Header, ErrorTitle, ErrorMessage } from './error-page.style';

interface Params {
  title: string;
  msg: string;
}

/**
 *
 * @param param0
 * @returns
 */
const ErrorPage = ({ title, msg }: Params) => (
  <Section>
    <Header>
      <ErrorTitle>{title}</ErrorTitle>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM11 15H9V13H11V15ZM11 11H9V5H11V11Z"
          fill="#FBFF3D"
        />
      </svg>
    </Header>
    <ErrorMessage>{msg}</ErrorMessage>
    <DefaultButton onClick={() => null} block>
      Recarregar
    </DefaultButton>
  </Section>
);

ErrorPage.propTypes = {
  title: PropTypes.string,
  msg: PropTypes.string,
};

ErrorPage.defaultProps = {
  title: 'Desculpe, algo deu errado',
  msg:
    'Não conseguimos carregar a IDa, mas é só apertar no botão abaixo que vamos tentar novamente.',
};

export default ErrorPage;
