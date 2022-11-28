import PropTypes from "prop-types"
import {useState} from 'react';
import {Box} from '../Box'
import { nanoid } from 'nanoid'
import {Input, Button, Label}from './Form.styled';





export const Form = ({onSubmit}) => {

    const [name, setName] = useState('');
        const [number, setNumber] = useState('');
        
        const handleSubmit = event => {
            event.preventDefault();
            onSubmit({name,number, id:nanoid()});
            resetForm();
        }
        const resetForm = () => {
                setName('');
                setNumber('');
        }

    return(
    <Box  as="form" border="normal" p={4} 
    display='flex'
     flexDirection='column' 
     width={400}
     onSubmit={handleSubmit}
      >
        <Label htmlFor='name' >Name</Label>
            <Input 
                id="name"
                type="text"
                name="name"
                value={name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={event => setName(event.target.value)}
                />
                <Label htmlFor="number">Number</Label>
                <Input
                  id="number"
                  type="tel"
                  name="number"
                  value={number}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  onChange={event => setNumber(event.target.value)}
                />
                <Button type="submit">Add contact</Button>
    </Box >
                )
}

Form.propTypes = {
    onSubmit:PropTypes.func
}