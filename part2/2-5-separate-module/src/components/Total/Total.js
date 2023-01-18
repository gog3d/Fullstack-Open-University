
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

export default Total;
