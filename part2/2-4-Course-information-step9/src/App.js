
const Header = ({course}) => {
  return (
    <div>
      <h2>{course}</h2>
    </div>
  );
};

const Part = ({part}) => {
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  )
};

const Content = ({parts}) => {
  return (
    <div>
      {
        parts.map((part, index) => {
          return (
            <Part part= {part} key={part.id}/>
          );
        })
      }
    </div>
  );
};

const Total = ({parts}) => {
  const total = parts.reduce((accum, current) => {
    return accum + current.exercises;
  }, 0);
  return (
    <div>
      <h3>total of {total} exercises</h3>
   </div>
  );
};

const Course = ({course}) => {
  return (
    <div>
      <Header course = { course.name } />
      <Content parts = {course.parts} />
      <Total  parts = {course.parts}/>
    </div>
  );
};

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a companent',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]
  return (
    <div>
      <h1>Web developer curriculum</h1>
      {
        courses.map((course) => {
          return <Course course={course} key={course.id}/>
        })
      }
    </div>
  )
}

export default App;
