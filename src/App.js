// import React from 'react';
import { useState } from 'react';
import './App.css';

const App = () => {
  const [user, setUser] = useState();
  const [list, setList] = useState([]);
  const [postContent, setpostContent] = useState();

  const submitHandler = (e) => {
    e.preventDefault();
    if (postContent) {
      setList([...list, postContent])
    }
  }

  return (
    <div className="App">
      {user ? <h1>Welcome {user}</h1> : <h1>Please log in</h1>}
      <input onChange={(e) => setUser(e.target.value)} />
      <div>
        {list.map((item, index) => <h2 key={index}>{item}</h2>)}
      </div>
    </div>
  );
}

export default App;
