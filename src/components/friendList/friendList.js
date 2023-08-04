import { Wrapper,ItemList, } from './friendList.styled'

export const FriendList = ({friends}) => {
    return (
        <div>
    <Wrapper>
        {friends.map(({id, avatar, name, isOnline, }) => (
    <ItemList className="item" key={id}>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </ItemList>
        ))} 
    </Wrapper>
        </div>

    )
}