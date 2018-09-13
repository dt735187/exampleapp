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
  )
}

export default App