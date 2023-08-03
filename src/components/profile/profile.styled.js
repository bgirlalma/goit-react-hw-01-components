import styled from 'styled-components';

export const Container = styled.div`
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
    
`;

export const Img = styled.img `
    width: 300px;
    border-radius: 50%;
    object-fit: cover;
`;

export const UserName = styled.p`
font-family: Droid Sans;
font-weight: bold;
font-size: 20px;
color: #9D50BB;
`;

export const PositionItem = styled.ul`


display: flex;

list-style: none;

`;

export const ActivePage = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 1px solid lightgrey;
padding: 10px;
width: 100%;

`