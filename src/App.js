// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import user from './user.json';
import data from './data.json';
import friends from './friends.json';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
