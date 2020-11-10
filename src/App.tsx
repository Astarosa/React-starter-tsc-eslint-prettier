import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import styled from 'styled-components';
import { Wilder } from './components/wilder/Wilder';
import { AddWilder } from './components/add-wilder/AddWilder';

type SkillType = {
  title: string;
  count: number;
};

type WilderType = {
  _id: string;
  name: string;
  city: string;
  skills: SkillType[];
};

const App = (): JSX.Element => {
  const [wilders, setWilders] = useState<WilderType[]>([]);

  useEffect(() => {
    const fetchWilders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/wilders');
        setWilders(response.data.result);
      } catch {
        console.error('Error');
      }
    };
    fetchWilders();
  }, []);

  const Container = styled.div`
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 24px;
  `;

  const MainContainer = styled.main`
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    padding: 24px;
  `;

  return (
    <div>
      <header>
        <Container>
          <h1>Wilders Book</h1>
        </Container>
      </header>
      <MainContainer>
        <h2>Wilders</h2>
        <AddWilder />
        <section className="card-row">
          {wilders.map((wilder) => (
            <Wilder key={wilder._id} {...wilder} />
          ))}
        </section>
      </MainContainer>
      <footer>
        <div className="container">
          <p>&copy; 2020 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
