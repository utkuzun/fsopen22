import Course from './components/Course'

function App() {
  const courses = [
    {
      name: 'Half Stack application development',
      id : 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercise: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercise: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercise: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercise: 22,
          id: 4,
        },
        {
          name: 'Typescript',
          exercise: 11,
          id: 5,
        },
      ],
    },

    {
      name: 'NodeJs',
      id : 2,
      parts: [
        {
          name: 'Auth',
          exercise: 5,
          id: 1,
        },
        {
          name: 'Middleware',
          exercise: 14,
          id: 2,
        },
      ],
    },
  ]
  return courses.map(course => <Course course={course} key={course.id}/>)
}

export default App

