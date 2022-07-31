import { useState, useEffect } from 'react'
import axios from "axios"
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'

const Person = ({person}) => {
  return <p>{person.name} {person.number}</p>
}


const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState("")


  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data);
      })
  }, [])

  const handleSubmit = (e)=> {
    e.preventDefault()

    const isAlreadyAdded = persons.find((person)=>person.name === newName)

    if (isAlreadyAdded) {
      alert(`${newName} is already added to the phonebook`)
      return
    }


    const newPerson = {name : newName, number : newNumber}
    setPersons([...persons, newPerson])
    setNewName("")
    setNewNumber("")
  } 

 
  const filteredPersons = persons.filter(person => person.name.toLowerCase().startsWith(filter))

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter filter={filter} setFilter={setFilter}/>

      <h2>add a new</h2>
      
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        setNewName={setNewName} 
        setNewNumber={setNewNumber}
        handleSubmit={handleSubmit}  
      />

      <h2>Numbers</h2>
      {filteredPersons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </div>
  )
}

export default App
