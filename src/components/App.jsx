import { GlobalStyle } from "./GlobalStyled";
import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/userStatistics";
import user from './user.json';
import data from './data.json';

export const App = () => {
 return (
  <div>
    <Profile username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    <Statistics data = {data}/>
    <GlobalStyle/>
  </div>
 )
};
