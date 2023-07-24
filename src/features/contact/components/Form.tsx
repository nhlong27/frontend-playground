import React from 'react';

const Form = ({ handleSubmit }: { handleSubmit: Function }) => {
  const [name, setName] = React.useState('');
  const [city, setCity] = React.useState('');
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit({ name, city });
        setName('');
        setCity('');
      }}
    >
      <input type='text' value={name} onChange={(e) => setName(e.currentTarget.value)} />
      <input type='text' value={city} onChange={(e) => setCity(e.currentTarget.value)} />
      <button type='submit'>Submit</button>
    </form>
  );
};

export default Form;
