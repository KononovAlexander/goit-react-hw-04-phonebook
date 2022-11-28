import PropTypes from "prop-types"
import {List, Button} from './Contacts.styled';
import {filteredContacts} from '../Filter/Filter'

export const Contacts = ({deleteContact}) => {
    
    return (
            <List>
                {filteredContacts.map(contact => {  
                    return (<li 
                        key={contact.id} 
                        >{contact.name}: {contact.number}
                    <Button 
                        onClick={() => {deleteContact(contact.id)}} 
                        style={{ width: '22%', marginLeft:'10px' }}>Delete</Button></li>)
                })}
            </List>
        )                                      
    }

    Contacts.propTypes = {
        deleteContact:PropTypes.func
    }
