import styled from 'styled-components';

export const Transaction = styled.table`
margin-left: auto;
margin-right: auto; 
margin-top: 20px;
width: 480px;
border-collapse: collapse;
border: 3px solid purple;
`;

export const HeaderWrapper = styled.tr`
background-color: rgb(194, 145, 232);
`;

export const Header = styled.th`
font-family: "Rock Salt", cursive;
font-weight: bold;
font-size: 20px;
font-style: italic;
caption-side: bottom;
border: 1px solid #e0e0e0;
text-align: center;
padding: 20px;
`;

export const ItemWrapper = styled.tr`
background-color: ${props => (props.$even ? '#ff33cc' : '#e495e4')};
`;

export const ItemInfo = styled.td`
font-family: Droid Sans;
font-size: 20px;
border: 1px solid #e0e0e0;
text-align: center;

width: 33%;
padding: 15px;

`;