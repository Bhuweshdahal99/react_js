import {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
  useReducer,
} from "react";

import "./App.css";

function Hook() {
  return (
    <>
      <div className="Container">
        <Setstate />
        <br />
        <UseEffect />
        <br />
        <UseRef />
        <br />
        <UseMemo />
        <br />
        <UseCallback />
        <br />
        <UseContext />
        <br />
        <UseReducer />
        <br />
        <br />
      </div>
    </>
  );
}

function Setstate() {
  const [car, setCar] = useState({
    brand: "Toyota",
    model: "Camry",
    year: 2020,
  });
  const [count, Setcount] = useState(0);
  const [comment, Setcomment] = useState("write above 👆");

  function changeCarDetails() {
    setCar((prev) => {
      return { ...prev, model: "Chevrolet", year: 2025 };
    });
  }
  function increase() {
    Setcount((c) => c + 1);
    Setcount((c) => c + 1);
    // Setcount(count+1);
  }
  function realtimewrite(event) {
    Setcomment(event.target.value);
  }
  return (
    <>
      <div className="stateContainer">
        <h1>USE_STATE</h1>
        <h1>{car.brand}</h1>
        <p>Model is {car.model}</p>
        <p>Year is {car.year}</p>
        <button onClick={changeCarDetails}>Click</button>
        <div>
          <p>Count is {count}</p>
          <button onClick={increase}>increament</button>
        </div>
        <textarea
          name="textA"
          id="textA"
          placeholder="Enter a Text"
          onChange={realtimewrite}
        ></textarea>
        <p>
          Comment: <span className="cmtspan">{comment}</span>
        </p>
      </div>
    </>
  );
}

function UseEffect() {
  const [count, SetCount] = useState(0);
  const [rcount, SetRCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      SetCount((c) => c +1);
    }, 1000);
    setTimeout(() => {
      SetRCount((rcount) => rcount);
    }, 1000);
  }, [count]);
  return (
    <div className="stateContainer">
      <h1>USE_EFFECT</h1>
      <p>It allows you to perform side-effect in your components.</p>
      <p>Uses:</p>
      <ul>
        <li>Fetching data from API</li>
        <li>Directly updating DOM elements</li>
        <li>Timers like SetTimeOut and SetInterval</li>
      </ul>
      <p>
        <span>BLUE</span>: I've rendered {count} times
      </p>
      <p>
        BUT <span>RED</span>: I've rendered {rcount} times{" "}
      </p>
    </div>
  );
}

function UseRef() {
  const [value, Setvalue] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <div className="stateContainer">
        <h1>USE_REF</h1>
        <p>
          It allow us to create mutable variables,which will not re-render the
          component
        </p>
        <p>Also used to accessing DOM elements</p>
        <br />
        <h1>{value}</h1>
        <div className="btns">
          <button onClick={() => Setvalue((value) => value - 1)}>-1</button>
          <button onClick={() => Setvalue((value) => value - value)}>
            Reset
          </button>
          <button onClick={() => Setvalue((value) => value + 1)}>+1</button>
        </div>
        <h1>Render Count : {count.current}</h1>
      </div>
    </>
  );
}

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [count, SetCount] = useState(0);
  function cubeNum(num) {
    return Math.pow(num, 3);
  }
  const result = useMemo(() => {
    return cubeNum(number);
  }, [number]);
  return (
    <>
      <div className="stateContainer">
        <h1>USE_MEMO</h1>
        <p>
          It returns a memoized value(it's like caching a value so that it
          doesn't need to be recalculated.)
        </p>
        <p>
          It only runs when one of its dependencies gets updated.It improves the
          performence.
        </p>
        <h1>CHOOSE A NUMBER:</h1>
        <input
          type="number"
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <h1>Cube of the number : {result}</h1>
        <button
          onClick={() => {
            SetCount((count) => count + 1);
          }}
        >
          Counter++
        </button>
        <h1>Counter : {count}</h1>
      </div>
    </>
  );
}

function UseCallback() {
  const [userInput, setUserInput] = useState("");

  const [num1] = useState(2);
  const [num2] = useState(3);
  const sum = useCallback(() => {
    num1 + num2;
  }, [num1, num2]);

  useEffect(() => {
    console.log(`New sum. Value : ${sum()}`);
  }, [sum]);

  return (
    <>
      <div className="stateContainer">
        <h1>USE_CALLBACK</h1>
        <p>It lets you cache the function definition between re-renderrs.</p>
        <p>
          It means , when we use the UseCallback Hook , it doesn't create
          multiple instance of same function when re-renders happens
        </p>
        <p>
          instead of creating new instance of the function , it provides the
          cached function on re-render of the component.
        </p>
        <h1>Enter :</h1>
        <input
          type="text"
          placeholder="input"
          value={userInput}
          onChange={(e) => {
            setUserInput(e.target.value);
          }}
        />
      </div>
    </>
  );
}

function UseContext() {
  return (
    <>
      <div className="stateContainer">
        <h1>USE_CONTEXT</h1>
        <p>Used to manage global data in react app</p>
      </div>
    </>
  );
}
function UseReducer() {
  const initialState = {
    count: 0,
  };
  const reducer = (state, action) => {
    switch (action.type) {
      case "increament": {
        return { count: state.count + 1 };
      }
      case "decreament": {
        return { count: state.count - 1 };
      }
      case "input":{
        return {
          count: action.payload
        }
      }
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <div className="stateContainer">
        <h1>USE_REDUCER</h1>
        <p>It is used to manage state of the component</p>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "increament" })}>
          Increase
        </button>
        <button onClick={() => dispatch({ type: "decreament" })}>
          Decrease
        </button>
        <br />
        <br />
        <input
        value={state.count}
          type="number"
          onChange={(e) =>
            dispatch({ type: "input", payload: Number(e.target.value) })
          }
        />
      </div>
    </>
  );
}
export default Hook;
