const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercise}
    </p>
  )
}

const Header = ({ name }) => {
  return (
    <>
      <h1>{name}</h1>
    </>
  )
}

const Content = ({ parts }) => {
  const array = parts.map((part) => {
    return <Part key={part.id} part={part} />
  })

  return <>{array}</>
}

const Total = ({ parts }) => {

  let total = parts.reduce((total, part)=>{
    return total + part.exercise
  }, 0)

  return (
    <>
      <h4>Number of exercises {total}</h4>
    </>
  )
}


function Course({course}) {
    return <div>
    
    <Header name={course.name} />
    <Content parts={course.parts}/>
    <Total parts={course.parts} />

    </div>
}

export default Course