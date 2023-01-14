
const Header = (props) => {
  const {course} = props;

  return (
    <div>
      <h1>{course}</h1>
    </div>
  );
};

const Part = (props) => {
  const {content} = props;
  return (
    <div>
      <p>
        {content.name} {content.exercises}
      </p>
    </div>
  )
};

const Content = (props) => {
  const {contents} = props;
  return (
    <div>
      {
        contents.map((content, index) => {
          return (
            <Part content= {content} key={index}/>
          );
        })
      }
    </div>
  );
};

const Total = (props) => {
  const { contents } = props;
  const total = contents.reduce((accum, current) => {
    return accum + current.exercises;
  }, 0);
  return (
    <div>
      <p>Number of exercises {total}</p>
   </div>
  );
};

const App = () => {
  const course = 'Half Stack application development';

  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  };
  const part3= {
    name: 'State of a companent',
    exercises: 14
  };

  const contents = [
    part1, 
    part2, 
    part3
  ];

  return (
    <div>
      <Header course = { course } />
      <Content contents = {contents} />
      <Total contents = {contents} />
    </div>
  );
}

export default App;
