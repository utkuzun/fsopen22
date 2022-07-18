
const Header = (props) => {
  const { name } = props;
  return <>
    <h1>{name}</h1>
  </>
}

const Content = (props) => {

  const {exercies : exArray} = props
  const array = exArray.map((ex, index) => {
    return <p key={index}>{ex.part} {ex.ex} </p>
    })

  return <>
    {array}
  </>
}

const Total = (props) => {

  const exes  = props.exes

  let total = 0

  exes.forEach(element => {
    total+=element.ex
  });

  return <>
  <p>Number of exercises {total}</p>
  </>
}


function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  let exercies = [{part : part1, ex : exercises1}, {part : part2, ex : exercises2}, {part : part3, ex: exercises3}]

  return (
    <div>
      <Header name={course} />
      <Content exercies={exercies}/>
      <Total exes={exercies}/>
    </div>
  );
}

export default App;
