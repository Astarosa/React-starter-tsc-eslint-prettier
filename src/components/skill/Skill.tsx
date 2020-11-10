import React from 'react';
import './Skill.css';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Badge = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;
  background-color: ${({ count }: { count: number }) => (count > 9 ? 'rgba(0, 100, 0, 0.3)' : 'rgba(0, 0, 0, 0.3)')};
  color: #fff;
  border-radius: 9999px;
  height: 20px;
  width: 20px;
`;

export const Skill = ({ title, count }: { title: string; count: number }): JSX.Element => {
  return (
    <li>
      {title}
      <Badge count={count}>{count}</Badge>
    </li>
  );
};

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};
