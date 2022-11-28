import  {useState, useEffect} from 'react';
import {Box} from './Box'
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import styled from 'styled-components';

const Title = styled.h2`
font-size:36px;
`;

 export  const App = () => { 

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem('contacts')) ?? '');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  },[contacts]);

    
   const  addContact = data => {
      const isExist = contacts.find(contact => contact.name === data.name);
      isExist ? alert(`${data.name} is allready in contacts`) : setContacts([...contacts, data]);
    }

      return (
        <div
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 40,
            color: '#010101',
            flexDirection: 'column'
          }}
        >
          <div>
            <Title>Phonebook</Title>
          <Form onSubmit={addContact}/>

          </div>
          <Box width={400}>
          <Title>Contacts</Title>
                
                <Filter value={filter} 
                    onChange={event => setFilter(event.currentTarget.value)}  
                    filter={filter} 
                    contacts={contacts} />
                  <Contacts 
              deleteContact={id => setContacts(contacts.filter(contact => contact.id !== id))}/>
          </Box>
        </div>
      );
}
