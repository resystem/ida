import { Link, useHistory } from 'react-router-dom';
import UserCard from '../../components/user-card/user-card';
import {
  Section,
  Header,
  ActionText,
  Title,
  CardWrapper,
  ListWrapper,
  Footer,
} from './last-users.style';

/**
 *
 * @param users
 * @param onClick
 * @returns
 */
const renderCards = (users: any[], onClick: any) =>
  users.map(({ first_name, image_uri: avatarURI, id, token }) => (
    <CardWrapper key={id}>
      <UserCard
        id={id}
        token={token}
        onClick={onClick}
        firstName={first_name}
        avatarURI={avatarURI}
      />
    </CardWrapper>
  ));

/**
 *
 * @returns
 */
const LastUsers = ({ users, appName }: any) => {
  const history = useHistory();

  return (
    <Section>
      <Header>
        <ActionText>
          Entre no <strong>{appName}</strong> através da IDa!
        </ActionText>
        <Title>Escolha uma conta para continuar</Title>
      </Header>
      <ListWrapper>{renderCards(users, () => null)}</ListWrapper>
      <Footer>
        <Link to={`/signin${history.location.search}`}>
          Entrar com outra conta
        </Link>
      </Footer>
    </Section>
  );
};

export default LastUsers;
