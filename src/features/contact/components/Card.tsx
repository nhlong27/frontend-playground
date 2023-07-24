import React from 'react';
import Form from './Form';

const Card = ({
  contact,
  handleEdit,
  handleDelete,
  children,
}: {
  contact: { name: string; city: string, key: string };
  handleEdit: Function;
  handleDelete: Function;
  children: React.ReactNode;
}) => {
  const [isEditable, setIsEditable] = React.useState(false);
  return (
    <div>
      {isEditable ? (
        <>
          <Form
            handleSubmit={({ name, city }: { name: string; city: string }) => {
              handleEdit(contact, { name, city });
              setIsEditable(false);
            }}
          />
          <button onClick={() => setIsEditable(false)}>Cancel</button>
        </>
      ) : (
        <>
          {children}
          <button onClick={() => setIsEditable(true)}>Edit</button>
          <button onClick={() => handleDelete(contact)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default Card;
