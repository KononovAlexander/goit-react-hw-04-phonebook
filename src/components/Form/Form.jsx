import {Component} from 'react';
import {Box} from '../Box'
import { nanoid } from 'nanoid'
import {Input, Button, Label}from './Form.styled';





export class Form extends Component {
    state = {
        name: '',
        number: '',
        }
        handleChange = event => {
            const {name, value} = event.currentTarget;
            this.setState({[name]:value})
        }
        handleSubmit = event => {
            event.preventDefault();
            this.props.onSubmit({...this.state, id:nanoid()});
            this.resetForm();
        }
        resetForm = () => {
            this.setState({
                name: '',
                number: '',
            })
        }
    render(){
    return(
    <Box  as="form" border="normal" p={4} 
    display='flex'
     flexDirection='column' 
     width={400}
     onSubmit={this.handleSubmit}
      >
        <Label htmlFor='name' >Name</Label>
            <Input 
                id="name"
                type="text"
                name="name"
                value={this.state.name}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={this.handleChange}
                />
                <Label htmlFor="number">Number</Label>
                <Input
                  id="number"
                  type="tel"
                  name="number"
                  value={this.state.number}
                  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                  required
                  onChange={this.handleChange}
                />
                <Button type="submit">Add contact</Button>
    </Box >
                )
    }
}