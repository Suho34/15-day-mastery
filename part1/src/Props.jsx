// forEach calls the function for each of the items in the array, always passing the individual item as an argument.
const Map = () => {
  let nums = [2, 3, 4, 5, 67, 87, 43];
  nums.forEach((num) => {
    console.log(num);
  });
};

// Props are a way of passing data to components
// Here data is being sent from App component
// Props are objects that contain data
const Hello = (props) => {
  console.log(props);
  const friends = [
    { name: "deepika", age: 16 },
    { name: "joe", age: 21 },
  ];
  return (
    <div>
      Hello {props.name} and my age is {props.age}
      <p>
        i have got some freinds like {friends[0].name} and {friends[1].name}{" "}
        <br />
        their ages are {friends[0].age} and {friends[1].age}
      </p>
      <Map />
    </div>
  );
};

export default Hello;
