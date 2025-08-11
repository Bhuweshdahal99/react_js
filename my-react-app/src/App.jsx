import Student from './student.jsx'

function App() {
  return(
    <>
      <Student isloggedin = {true} />
      <Student name="bhuwesh" age ={19} level = "bachelor" isloggedin = {true}/>
      <Student name="Arya" age ={19} level = "school" isloggedin = {true}/>
      <Student name="Rohan" age ={19} level = "vsfvds" isloggedin = {false}/>
      <Student />
    </>
  );
}
export default App
