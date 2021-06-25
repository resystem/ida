import UserCard from '../../components/user-card/user-card';
import { Section } from './last-users.style';

/**
 *
 * @param users
 * @param onClick
 * @returns
 */
const renderCards = (users: any[], onClick: any) =>
  users.map(({ username, image_uri: avatarURI, id, token }) => (
    <UserCard
      key={id}
      id={id}
      token={token}
      onClick={onClick}
      username={username}
      avatarURI={avatarURI}
    />
  ));

/**
 *
 * @returns
 */
const LastUsers = ({ users }: any) => (
  <Section>{renderCards(users, () => null)}</Section>
);

export default LastUsers;
