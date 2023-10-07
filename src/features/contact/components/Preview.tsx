import React from 'react';

const Preview = () => {
  const [newContact, setNewContact] = React.useState('');
  const [contacts, setContacts] = React.useState<string[]>([]);
  const [contactRegistry, setContactRegistry] = React.useState<Set<string>>(new Set());
  console.log({ contacts });
  return (
    <div>
      <h1>Add a new contact</h1>
      <input
        type='text'
        value={newContact}
        onChange={(e) => setNewContact(e.currentTarget.value)}
      />
      <button
        disabled={newContact.length === 0}
        onClick={() => {
          if (contactRegistry.has(newContact)) {
            alert('Contact already exists');
            return;
          }
          setContacts((prev) => [...prev, newContact]);
          setContactRegistry((prev) => new Set(prev).add(newContact));
          setNewContact('');
        }}
      >
        Add contact
      </button>

      <ul>
        {contacts.map((contact, index) => (
          <Contact key={index + contact} {...{ contact, index, setContacts, contactRegistry, setContactRegistry }} />
        ))}
      </ul>
    </div>
  );
};

type ContactType = {
  contact: string;
  index: number;
  setContacts: React.Dispatch<React.SetStateAction<string[]>>;
  contactRegistry: Set<string>;
  setContactRegistry: React.Dispatch<React.SetStateAction<Set<string>>>;
};
const Contact: React.FC<ContactType> = (props) => {
  const handleDelete = () => {
    console.log(props.index, ['a', 'b'].splice(0, 1));
    props.setContacts((prev) => {
      prev.splice(props.index, 1);
      return [...prev];
    });
    props.setContactRegistry((prev) => {
      prev.delete(props.contact);
      return new Set(prev);
    });
  };
  const handleEdit = () => {
    const newContact = prompt('Enter new contact', props.contact);
    if (!newContact) return;
    if (props.contact === newContact) return;
    if (props.contactRegistry.has(newContact)) {
      alert('Contact already exists');
      return;
    }
    props.setContacts((prev) => {
      prev.splice(props.index, 1, newContact);
      return [...prev];
    });
    props.setContactRegistry((prev) => {
      prev.delete(props.contact);
      return new Set(prev).add(newContact);
    });
  }
  return (
    <li className='flex gap-4'>
      Name: {props.contact}
      <button onClick={() => handleEdit()}>edit</button>
      <button onClick={() => handleDelete()}>delete</button>
    </li>
  );
};

export default Preview;
