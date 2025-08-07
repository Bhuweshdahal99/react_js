import Student from './student.jsx'

function App() {
  return(
    <>
      <Student isloggedin = {true} />
      <Student name="bhuwesh" age ={19} level = "bachelor"/>
      <Student name="kriti" age ={19} level = "school" isloggedin = {true}/>
      <Student name="kriti" age ={19} level = "vsfvds"/>
      <Student />
    </>
  );
}

export default App
