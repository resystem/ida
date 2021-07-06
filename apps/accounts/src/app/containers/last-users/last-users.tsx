import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserCard from '../../components/user-card/user-card';
import { quicklySignin } from './last-users.controller';
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
  users.map(
    ({ first_name, last_name, image_uri: avatarURI, id, token, email }) => (
      <CardWrapper key={id}>
        <UserCard
          id={id}
          token={token}
          onClick={() => onClick({ email, ida: id, token })}
          firstName={`${first_name} ${last_name}`}
          avatarURI={avatarURI}
        />
      </CardWrapper>
    ),
  );

/**
 *
 * @returns
 */
const LastUsers = ({ users, appName, clientId, socket }: any) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  return (
    <Section>
      <Header>
        <ActionText>
          Entre no <strong>{appName}</strong> através da IDa!
        </ActionText>
        <Title>Escolha uma conta para continuar</Title>
      </Header>
      <ListWrapper>
        {renderCards(users, ({ email, ida, token }: any) =>
          quicklySignin({
            ida,
            token,
            clientId,
            email,
            socket,
            history,
            setLoading,
          }),
        )}
      </ListWrapper>
      <Footer>
        <Link to={`/signin${history.location.search}`}>
          Entrar com outra conta
        </Link>
      </Footer>
    </Section>
  );
};

export default LastUsers;
