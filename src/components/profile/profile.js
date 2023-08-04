import { Img, UserName, Container, PositionItem, ActivePage, Description, UserTag, UserLocation, } from './profile.styled'

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className="profile">
      <Container>
  <Description className="description">
    <Img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <UserName className="name">{username}</UserName>
    <UserTag className="tag">@{tag}</UserTag>
    <UserLocation className="location">{location}</UserLocation >
  </Description>


<PositionItem className="stats">
    <ActivePage>
      <span className="label">Followers</span>
      <span className="quantity">{stats.followers}</span>
    </ActivePage>
    <ActivePage>
      <span className="label">Views</span>
      <span className="quantity">{stats.views}</span>
    </ActivePage>
    <ActivePage>
      <span className="label">Likes</span>
      <span className="quantity">{stats.likes}</span>
    </ActivePage>
  </PositionItem>
  
  </Container>
</div>
  )
};


  
  
  
  
  