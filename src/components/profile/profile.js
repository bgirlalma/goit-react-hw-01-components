import React from 'react';
import { Img, UserName, Container, PositionItem, ActivePage, } from './profile.styled'


export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div class="profile">
      <Container>
  <div class="description">
    <Img
      src={avatar}
      alt="User avatar"
      class="avatar"
    />
    <UserName class="name">{username}</UserName>
    <p class="tag">@{tag}</p>
    <p class="location">{location}</p>
  </div>


<PositionItem class="stats">
    <ActivePage>
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </ActivePage>
    <ActivePage>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </ActivePage>
    <ActivePage>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </ActivePage>
  </PositionItem>
  
  </Container>
</div>
  )
};


  
  
  
  
  