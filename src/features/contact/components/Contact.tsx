import * as React from 'react';
import Form from './Form';
import Card from './Card';

const Contact = () => {
  const [contacts, setContacts] = React.useState<null | Map<any, any>>(null);
  const [contactRegistry, setContactRegistry] = React.useState<null | Set<any>>(null);

  const handleEdit = (
    contact: { name: string; city: string; key: string },
    newContact: { name: string; city: string },
  ) => {
    if (contactRegistry && contactRegistry.has(newContact.name + newContact.city)) {
      alert('contact already exists');
      return;
    }
    const newContacts = contacts!.set(contact.key, {
      ...contact,
      name: newContact.name,
      city: newContact.city,
    });
    setContacts(new Map(newContacts));
    contactRegistry!.add(newContact.name + newContact.city);
    contactRegistry!.delete(contact.name + contact.city);
    setContactRegistry(new Set(contactRegistry));
  };
  const handleDelete = ({ name, city, key }: { name: string; city: string; key: string }) => {
    contacts?.delete(key);
    contactRegistry?.delete(name + city);
    setContacts(new Map(contacts));
    setContactRegistry(new Set(contactRegistry));
  };
  return (
    <div>
      <div>
        <h1>Add a new contact</h1>
        <Form
          handleSubmit={({ name, city }: { name: string; city: string }) => {
            if (contactRegistry && contactRegistry.has(name + city)) {
              alert('contact already exists');
              return;
            }
            const key = name + city + Math.random()
            const newContacts = (contacts || new Map()).set(key, {
              name,
              city,
              key,
            });
            const newRegistry = (contactRegistry || new Set()).add(name + city);
            setContacts(new Map(newContacts));
            setContactRegistry(new Set(newRegistry));
          }}
        />
      </div>
      <div>
        <h1>Contacts</h1>
        <div>
          {contacts &&
            Array.from(contacts.values()).map(
              (contact: { name: string; city: string; key: string }) => (
                <Card
                  key={contact.key}
                  contact={contact}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                >
                  {contact.name} - {contact.city} - {contact.key}
                </Card>
              ),
            )}
        </div>
        <div>
          {contacts &&
            Array.from(contacts.entries()).map((contact) => {
              return (
                <pre>
                  {JSON.stringify(contact)}
                </pre>
              );
            })}
          {contactRegistry && Array.from(contactRegistry).map((k) => <pre>{k}</pre>)}
        </div>
      </div>
    </div>
  );
};

export default Contact;
