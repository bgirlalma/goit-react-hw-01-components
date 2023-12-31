import styled from 'styled-components';

export const Container = styled.div`
    max-width: 360px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;  
`;

export const Description = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid lightgrey;
`;

export const Img = styled.img `
    width: 200px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 50%;
    object-fit: cover;
`;

export const UserName = styled.p`
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

export const UserTag = styled.p`
    font-family: Droid Sans;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 1.2;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`;

export const UserLocation = styled.p`
    font-family: Droid Sans;
    font-weight: bold;
    font-size: 20px;
    letter-spacing: 1.2;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
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

    font-family: Droid Sans;
    font-weight: normal;
    font-size: 20px;
    letter-spacing: 1.2;
    background-color: #f4f0f0;
    color: rgb(223, 87, 89);
`