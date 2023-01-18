
import Part from '../Part/Part';

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

export default Content;
