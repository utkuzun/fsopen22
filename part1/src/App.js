
const Part = (props) => {

  const {part} = props

  return (
    <p>{part.name} {part.exercise}</p>
  )
}


const Header = (props) => {
  const { name } = props;
  return <>
    <h1>{name}</h1>
  </>
}

const Content = (props) => {

  const {exercises} = props
  const array = exercises.map((part, index) => {
    return <Part key={index} part={part} />
  })

  return <>
    {array}
  </>
}

const Total = (props) => {

  const exes  = props.exes

  let total = 0

  exes.forEach(element => {
    total+=element.exercise
  });

  return <>
  <p>Number of exercises {total}</p>
  </>
}


function App() {
  const course = 'Half Stack application development'

  const part1 = {
    name : 'Fundamentals of React',
    exercise : 10,
  }

  const part2 = {
    name : 'Using props to pass data',
    exercise : 7,
  }

  const part3 = {
    name : 'State of a component',
    exercise : 14,
  }


  let exercises = [part1, part2, part3]

  return (
    <div>
      <Header name={course} />
      <Content exercises={exercises}/>
      <Total exes={exercises}/>
    </div>
  );
}

export default App;
