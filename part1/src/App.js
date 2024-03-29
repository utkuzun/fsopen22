
const Part = ({part}) => {

  return (
    <p>{part.name} {part.exercise}</p>
  )
}


const Header = ({name}) => {
return <>
    <h1>{name}</h1>
  </>
}

const Content = ({parts}) => {

  const array = parts.map((part, index) => {
    return <Part key={index} part={part} />
  })

  return <>
    {array}
  </>
}

const Total = ({exes}) => {


  let total = 0

  exes.forEach(element => {
    total+=element.exercise
  });

  return <>
  <p>Number of exercises {total}</p>
  </>
}


function App() {
  const course = {
    
    name : 'Half Stack application development', 
    parts : [
      {
        name : 'Fundamentals of React',
        exercise : 10,
      },
      {
        name : 'Using props to pass data',
        exercise : 7,
      },
      {
        name : 'State of a component',
        exercise : 14,
      }

    ]
  }
  debugger
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts}/>
      <Total exes={course.parts}/>
    </div>
  );
}

export default App;
