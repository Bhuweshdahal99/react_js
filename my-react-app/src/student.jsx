import styles from "./App.module.css"
import PropTypes from "prop-types"

function Student(props) {
    
  return (
    props.isloggedin ?
    <div>
      <h1 className={styles.heading2}>Student</h1>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Level:{props.level}</p>
    </div> 
    :
    <h1>No Data in the page!!</h1>
  );
  
}
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  level: PropTypes.string,
};
Student.defaultProps = {
  name: "John",
  age: 20,
  level: "A",
};
export default Student;
