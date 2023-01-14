
const Header = (props) => {
  const {course} = props;

  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Part = (props) => {
  const {part} = props;
  return (
    <div>
      <p>
        {part.name} {part.exercises}
      </p>
    </div>
  )
};

const Content = (props) => {
  const {parts} = props;
  return (
    <div>
      {
        parts.map((part, index) => {
          return (
            <Part part= {part} key={index}/>
          );
        })
      }
    </div>
  );
};

const Total = (props) => {
  const { parts } = props;
  const total = parts.reduce((accum, current) => {
    return accum + current.exercises;
  }, 0);
  return (
    <div>
      <p>Number of exercises {total}</p>
   </div>
  );
};

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a companent',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = { course.name } />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  );
}

export default App;
