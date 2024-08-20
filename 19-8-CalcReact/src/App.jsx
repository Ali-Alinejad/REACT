const Pizza = [
  { Name: "peperoni", Price: "150 T", key: "1" },
  { Name: "Mix", Price: "180 T", key: "2" },
  { Name: "special", Price: "200 T", key: "3" },
];

function App() {
  return (
    <div>
      {Pizza.map((item) => (
        <div key={item.key}>
          <h1>{item.Name}</h1>
          <h3>{item.Price}</h3>
        </div>
      ))}
    </div>
  );
}

export default App;
