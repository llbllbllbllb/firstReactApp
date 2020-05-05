import React, {useState} from 'react';
import Tweet from './tweet';
import './App.css';


// app.js return a componet

// create a component by writing functions
function App(){

  const [users, setUsers] = useState([
    {name:'ed', message:'hello there'},
    {name:'john', message:'i am john snow'},
    {name:'traversy', message:'i am awesome'}
  ]);




  return(
    <div className="app">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message}/>
      ))}
    </div>
  );

}




export default App;
