import styled from 'styled-components';

export const Wrapper = styled.ul`
    display: flex;
    flex-direction: column;
    max-width: 360px;
    margin-left: auto;
    margin-right: auto; 
    gap: 30px;
  

`;

export const ItemList = styled.li`
    display: flex;
    align-items: center;
    border: 1px solid lightgrey;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 20px
    box-shadow: 10px 18px 22px 0px rgba(0,0,0,0.69);
-webkit-box-shadow: 10px 18px 22px 0px rgba(0,0,0,0.69);
-moz-box-shadow: 10px 18px 22px 0px rgba(0,0,0,0.69);
    
`;