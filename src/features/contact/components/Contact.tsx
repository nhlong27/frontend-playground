import React from 'react';
import Card from './Card';

const Contact = () => {
  const [name, setName] = React.useState('');
  const [city, setCity] = React.useState('');
  const [list, setList] = React.useState<Set<Record<string, string>> | null>(null);
  const handleDelete = (item: Record<string, string>) => {
    if (list){
      list.delete(item);
      setList(new Set(list));
    }
  }
  const handleEdit = (item: Record<string, string>, newItem: Record<string, string>) => {
    if (list){
      list.delete(item);
      setList(new Set(list.add(newItem)));
    }
  }
  console.log({list})
  return (
    <div>
      <div>
        Add a new contact
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setList((prev) => new Set((prev || new Set()).add({ name, city })));
            setName('');
            setCity('');
          }}
        >
          Name <input type='text' value={name} onChange={(e) => setName(e.currentTarget.value)} />
          City <input type='text' value={city} onChange={(e) => setCity(e.currentTarget.value)} />
          <button type='submit'>Add contact</button>
        </form>
      </div>
      <div>
        List:
        <ul>
          {list &&
            [...list].map((item, index) => {
              return (
                <Card key={index} item={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Contact;
