import React from 'react';

const Card = ({
  item,
  handleDelete,
  handleEdit,
}: {
  item: Record<string, string>;
  handleDelete: Function;
  handleEdit: Function;
}) => {
  const [isEditable, setIsEditable] = React.useState(false);
  const [name, setName] = React.useState(item.name);
  const [city, setCity] = React.useState(item.city);
  return (
    <li>
      <h1>{item.name}</h1>
      <p>City: {item.city}</p>
      {isEditable ? (
        <>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleEdit(item, { name, city });
            }}
          >
            <input type='text' value={name} onChange={(e) => setName(e.currentTarget.value)} />
            <input type='text' value={city} onChange={(e) => setCity(e.currentTarget.value)} />
            <button type='submit'>update</button>
          </form>
          <button onClick={() => setIsEditable(false)}>cancel</button>
        </>
      ) : null}
      <button
        onClick={() => {
          setIsEditable(true);
        }}
      >
        edit
      </button>
      <button
        onClick={() => {
          handleDelete(item);
        }}
      >
        delete
      </button>
    </li>
  );
};

export default Card;
