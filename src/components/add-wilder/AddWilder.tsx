import React, { FormEvent } from 'react';
import { useState } from 'react';
import axios from 'axios';

export const AddWilder = (): JSX.Element => {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim().length === 0 || city.trim().length === 0) {
      setError('Name and city are required');
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/wilders', { name, city });
      if (response.data.succes) {
        console.log('success');
        setError('');
        setName('');
        setCity('');
      }
    } catch (error) {
      if (error) {
        setError(`Erreur durant l'enregistrement du wilder`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name :<input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label htmlFor="city">
          City :<input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
        </label>
        <button type="submit">{loading === true ? 'loading' : 'Add '}</button>
      </form>
    </>
  );
};
