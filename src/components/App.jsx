import { Profile } from "./profile";
import { ActivePage } from "./activeProfile";
import profileItems  from "./user.json"


export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile/>
      <ActivePage items={profileItems}/>
    </div>
  );
};
