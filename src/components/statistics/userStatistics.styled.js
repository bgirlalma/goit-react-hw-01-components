import styled from 'styled-components';

export const StatisticsUser = styled.div`
    margin: 0;
    max-width: 360px;
    margin-left: auto;
    margin-right: auto; 
    border: 1px solid lightgrey;
    margin-bottom: 20px;

`;

export const Title = styled.h2`
    font-family: Droid Sans;
    font-weight: bold;
    font-size: 30px;
    letter-spacing: 1.3;
    color: #9D50BB;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
`;

export const StatList = styled.ul`
    margin: 0;
    display: flex;
`;

export const Item = styled.li`
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid lightgrey;
    background-color: ${({ bgсolor }) => bgсolor || 'transparent'};

    padding: 10px;
    width: 100%;

    font-family: Droid Sans;
    font-weight: normal;
    font-size: 20px;
    letter-spacing: 1.2;
    color: #f4f0f0;
`;

