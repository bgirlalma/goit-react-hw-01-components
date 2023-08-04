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
    height: 80px;
    box-shadow: 10px 18px 22px 0px rgba(0,0,0,0.69);
-webkit-box-shadow: 10px 18px 22px 0px rgba(0,0,0,0.69);
-moz-box-shadow: 10px 18px 22px 0px rgba(0,0,0,0.69);
padding-left: 10px
`;

export const OnlineStatus = styled.span`
    color: rgb(24, 230, 24);  
`;

export const OfflineStatus = styled.span`
    color: rgb(244, 17, 17);
`;

export const UserFriendAvatar = styled.img`
    margin-left: 20px;
    border-radius: 10px;
    border: 1px solid lightgrey;
`;

export const FriendName = styled.p`
    font-family: Droid Sans;
    font-weight: normal;
    font-size: 20px;
    color: rgb(223, 87, 89);
    padding-left: 15px;
`;
