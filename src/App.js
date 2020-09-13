import React, {useState} from 'react'
import Header from './components/Header'

const App = () => {
  const [count, setCount] = useState(0)
  const [persons,setPersons] = useState([{name: "dipak", id: Date.now()}])
  return (
    <div className='App'>
      <Header />
      <h1>{count}</h1>
      {persons.map(person => (
        <div key={persons.id}>
         <ul >
          <li>{person.name}</li>
         </ul>
        </div>
      ))}
      <button onClick={() => setPersons(...persons, [{name: "archana", id: Date.now()}])}>add person</button>
      <button onClick={() => setCount()}>plus</button>
    </div>
  )
}

export default App