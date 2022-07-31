const Person = ({ person, deletePerson }) => {
  const { id, number, name } = person

  return (
    <div>
      <p>
        {name} {number}
      </p>
      <button onClick={() => deletePerson(id)}>delete</button>
    </div>
  )
}

export default Person