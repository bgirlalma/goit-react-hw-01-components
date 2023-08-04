import { Wrapper,ItemList,OnlineStatus, OfflineStatus, UserFriendAvatar, FriendName} from './friendList.styled'
import {LiaLightbulbSolid} from "react-icons/lia";

export const FriendList = ({friends}) => {
    return (
        <div>
    <Wrapper>
        {friends.map(({id, avatar, name, isOnline, }) => (
    <ItemList className="item" key={id}>
       {isOnline ? (
              <OnlineStatus className="status" status="online">
               <LiaLightbulbSolid size={23}/>
              </OnlineStatus>
            ) : (
              <OfflineStatus className="status" status="offline">
                <LiaLightbulbSolid size={23}/>
              </OfflineStatus>
        )}
        
        <UserFriendAvatar className="avatar" src={avatar} alt="User avatar" width="90" />
        <FriendName className="name">{name}</FriendName>
    </ItemList>
        ))} 
    </Wrapper>
        </div>

    )
}