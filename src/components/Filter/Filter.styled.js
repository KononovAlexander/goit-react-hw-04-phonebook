import styled from 'styled-components';


export const Input = styled.input`
border:normal;
margin-bottom:16px;
width:44%;
border-radius:4px;
:focus{
    border:1px solid rgba(52, 143, 235, 0.8);
    box-shadow: 0 0 5px 0.2rem rgba(52, 143, 235, 0.8);
}
`;
export const Label = styled.label`
font-size:24px;
margin-bottom:8px;
`;