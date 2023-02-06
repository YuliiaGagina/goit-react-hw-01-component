import "../index.css";
// import '.components/App.css';
import user from './data/user.json';
import Profile from './Profile/Profile';
import states from './data/data.json';
import Statistics from './Statistics/Statistics';
import friends from './data/friends.json';
import FriendList from "./FriendList/FriendList";
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './data/transactions';








function App() {
  
  return (
    <div className="app" >
      <Profile user={user}/>
      
      <Statistics  tittle="Upload stats" stats={states}/>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />



     
     
    </div>
  );
}

export default App;
