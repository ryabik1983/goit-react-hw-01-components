// import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile/Profile';
import user from './user.json';
import data from './data.json';
import Statistics from './components/Statistics/Statistics';

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
    </div>
  );
}
