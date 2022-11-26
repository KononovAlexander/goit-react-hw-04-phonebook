import React, {Component} from 'react';
import {Box} from './Box'
import { Form } from './Form/Form';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import styled from 'styled-components';

const Title = styled.h2`
font-size:36px;
`;

 export  class App extends Component { 
  state = {
    contacts: [],
    filter: ''
    }

    componentDidUpdate(prevProps, prevState){
      if(this.state.contacts !== prevState.contacts){
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
      }
    }

    componentDidMount() {
      const arr = localStorage.getItem('contacts');
      const parsedArr = JSON.parse(arr);
      if(parsedArr){
        this.setState({contacts:parsedArr})
      }
    }
    
    addContact = data => {
      const isExist = this.state.contacts.find(contact => contact.name === data.name);
      isExist ? alert(`${data.name} is allready in contacts`): this.setState(prevState => ({ 
        contacts: [...prevState.contacts, data]
      }));
    }

    deleteContact = id => {
      this.setState(prevState => ({
        contacts: prevState.contacts.filter(contact => contact.id !== id )
      }))

    }

    changeFilter = (event) => {
      this.setState({filter: event.currentTarget.value })
    }
  
    render() {
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
          <Form onSubmit={this.addContact}/>

          </div>
          <Box width={400}>
          <Title>Contacts</Title>
                
                <Filter value={this.state.filter} 
                    onChange={this.changeFilter}  
                    filter={this.state.filter} 
                    contacts={this.state.contacts} />
                  <Contacts 
              deleteContact={this.deleteContact}/>
          </Box>
        </div>
      );
    }
}
