
const Header = ({course}) => {
  return (
    <div>
      <h1>{course}</h1>
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
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
  }
  return <Course course={course} />
}

export default App;
