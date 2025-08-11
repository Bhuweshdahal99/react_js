import "./App.css";

function App() {
  return (
    <>
      <Text name="Bhuwesh" rollno={19} />
      <Text name="Kriti" rollno={15} />
      <Text name="Rohan" rollno={21} />
      <Text name="Raj" rollno={20} />
      <Text name="Sapat" rollno={23} />
    </>
  );
}

function Text(props) {
  return (
    <>
      <body>
        <div className="container">
          <p> hello {props.name}</p>
          <p>Roll no. : {props.rollno}</p>
        </div>
      </body>
    </>
  );
}

export default App;
