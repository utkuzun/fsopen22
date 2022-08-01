import { useState, useEffect } from 'react'
import "./App.css"

import personService from "./services/people"

import Info from './components/Info'
import Filter from "./components/Filter"
import PersonForm from './components/PersonForm'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState("")
  const [info, setInfo] = useState({message : "", show : false, status : ""})

  const logInfo = (message, status)=> {
    const newInfo = {message, status, show : true}
    setInfo(newInfo)
    setTimeout(() => {
      setInfo({ message: '', show: false, status: '' })
    }, 2000);
  }

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
        if (response) {
          const newPeople = persons.map(person => person.id !== response.id ? person : response)
          setPersons(newPeople)
        } else {
          
          const message = `Information of ${isAlreadyAdded.name} has already been removed from server`
          const status = "error"
          logInfo(message, status)
        }
      }
      return
    }


    const newPerson = {name : newName, number : newNumber}
    const personAdd = await personService.create(newPerson)
    const message = `Added ${personAdd.name}`
    const status  = "success"
    logInfo(message, status)
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
      } else {
        const message = `Information of ${deleteTo.name} has already been removed from server`
        const status = "error"
        logInfo(message, status)
      }
    }
  }

 
  const filteredPersons = persons.filter(person => person.name.toLowerCase().startsWith(filter))

  return (
    <div>
      <h2>Phonebook</h2>

      {info.show && 
        <Info info={info} />
      }

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
