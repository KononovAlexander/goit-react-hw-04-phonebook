import React from 'react';
import PropTypes from "prop-types"
import {Box} from '../Box'
import {Label, Input}from './Filter.styled';

export let filteredContacts = null; 

export const Filter = ({value, onChange, filter, contacts}) => {
    let normalizedFilter = filter.toLowerCase();
    filteredContacts = contacts.filter((contact) =>  
    contact.name.toLowerCase().includes(normalizedFilter)) 


    return(
        <Box display='flex'
        flexDirection='column'>
            <Label htmlFor="search">Find contacts by name</Label>
            <Input id="search" type="text" value={value} onChange={onChange} />
        </Box>
    )

}

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    filter: PropTypes.string,
    contacts:PropTypes.array
  };