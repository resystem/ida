import React from 'react';
import Avatar from './components/avatar/avatar';
import { CardWrapper, Text } from './user-card.style';

interface Props {
  id: string;
  token: string;
  firstName: string;
  avatarURI?: string | null;
  onClick(token: string, id: string, username: string): void;
}

/**
 * Component that containts default styles for all pages
 * @param {object} props components proptypes
 * @param {string} props.id user id
 * @param {string} props.token user token
 * @param {string} props.username user`s username
 * @param {avatarURI} props.avatarURI user`s avatar link
 */
const Card = ({ firstName, avatarURI, onClick }: Props) => (
  <CardWrapper onClick={onClick}>
    <Avatar username={firstName} uri={avatarURI} />
    <Text>{firstName}</Text>
  </CardWrapper>
);

export default Card;
