
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
        {content.part} {content.exercises}
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
    return accum + current.exercises
  }, 0);
  return (
    <div>
      <p>Number of exercises {total}</p>
   </div>
  );
};

const App = () => {
  const course = 'Half Stack application development';
  const part1 = 'Fundamentals of React';
  const exercises1 = 10;
  const part2 = 'Using props to pass data';
  const exercises2 = 7;
  const part3 = 'State of a companent';
  const exercises3 = 14;
  
  const contents = [
    {'part': part1, 'exercises': exercises1},
    {'part': part2, 'exercises': exercises2},
    {'part': part3, 'exercises': exercises3},
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
