const Notes = () => {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];
  const lines = course[0].parts;
  const topics = course[1].parts;

  return (
    <div>
      <div>
        <h3>{course[0].name}</h3>
        {lines.map((line) => (
          <ul key={line.id}>
            <li>
              {line.name} {line.exercises}
            </li>
          </ul>
        ))}
      </div>
      <div>
        <h3>{course[1].name}</h3>
        {topics.map((topic) => (
          <ul key={topic.id}>
            <li>
              {topic.name} {topic.exercises}
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Notes;
