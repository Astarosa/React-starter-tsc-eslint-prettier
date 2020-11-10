import React from 'react';
import { Skill } from '../skill/Skill';
import blank_profile from './../../icons/blank-profile-picture-female.png';
import './Wilder.css';

type WilderSkills = {
  title: string;
  count: number;
};

export const Wilder = ({ name, city, skills }: { name: string; city: string; skills: WilderSkills[] }): JSX.Element => {
  return (
    <article className="card">
      <img src={blank_profile} alt="Jane Doe Profile" />
      <h3>{name}</h3>
      <p>{city}</p>
      <h4>Wild Skills</h4>
      <ul className="skills">
        {skills.map(({ title, count }, index) => (
          <Skill key={index} title={title} count={count} />
        ))}
      </ul>
    </article>
  );
};
