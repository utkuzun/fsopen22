import { useState, useEffect } from 'react'

import personService from "./services/people"

import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState("")


  useEffect(() => {
    personService
      .getAll()
      .then(response => setPersons(response)
)
  }, [])

  const handleSubmit = async (e)=> {
    e.preventDefault()

    if (!newName) {
      return
    }

    const isAlreadyAdded = persons.find((person)=>person.name === newName)

    if (isAlreadyAdded) {
      const message = `${newName} is already added to the phonebook, replace the old number with a new one`
      if (window.confirm(message)) {
        const response = await personService.changePerson({...isAlreadyAdded, number : newNumber})
        const newPeople = persons.map(person => person.id !== response.id ? person : response)
        setPersons(newPeople)
      }
      return
    }


    const newPerson = {name : newName, number : newNumber}
    const personAdd = await personService.create(newPerson)
    setPersons([...persons, personAdd])
    setNewName("")
    setNewNumber("")
  } 

  
  const deletePerson = async (id) => {
    const deleteTo = persons.find(person => person.id === id)
    const message = `Delete ${deleteTo.name}`
    if (window.confirm(message)){
      const response = await personService.deletePerson(id)

      if (response) {
        const newPersons = persons.filter(person => person.id !==id)
        setPersons(newPersons)
      }
    }
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
        <Person key={person.name} person={person} deletePerson={deletePerson}/>
      ))}
    </div>
  )
}

export default App
