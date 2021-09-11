import React,{useState} from 'react';
import Tweet from './Tweet'

function App(){

  const [isRed,setRed] = useState(false);
  const [count,setCount] = useState(0);
  const [users,setUsers] = useState([
    { name: 'RajaniKanth', message: 'Hello There'},
    {name: 'John', message: 'I am John Snow'},
    {name: 'Traversy', message: 'I am awesome'}    
  ]);

  const increment = () => {
    setCount(count+1)
    setRed(!isRed)
  }
  
  return(
    <div className="app">
      <h1 className = {isRed ? "red" : " "}>Change My Color</h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>

      {users.map((user) => (
        <Tweet name={user.name} message={user.message} />
      ))}

    </div>
  )
}

export default App;
