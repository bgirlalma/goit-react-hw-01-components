import { GlobalStyle } from "./GlobalStyled";
import { Profile } from "./profile/profile";
import user from './user.json';

import { Statistics } from "./statistics/userStatistics";
import data from './data.json';

import { FriendList } from "./friendList/friendList";
import friends from './friends.json'

import { TransactionHistory } from "./transactionHistory/transactionHistory";
import transition from './transactions.json'

export const App = () => {
 return (
  <div>
    <Profile username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />
    <Statistics title="Upload stats" data = {data}/>
    <FriendList friends = {friends}/>
    <TransactionHistory items = {transition}/>
    <GlobalStyle/>
  </div>
 )
};
