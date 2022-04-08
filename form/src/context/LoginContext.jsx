import {createContext,useReducer} from "react"
import axios from "axios"
const initState = { 
  name:"", age:"",  dateofbirth:"",
  stateofresidence:"", address:"", pincode:""
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: action.payload };
    case 'CHANGE_AGE':
      return { ...state, age: action.payload };
    case 'CHANGE_DATEOFBIRTH':
      return { ...state, dateofbirth: action.payload };
    case 'CHANGE_STATEOFESIDENCE':
      return { ...state, stateofresidence: action.payload };
    case 'CHANGE_ADDRESS':
      return { ...state, address: action.payload };
    case 'CHANGE_PINCODE':
      return { ...state, pincode: action.payload };
    default:
      throw new Error();
  }
};

export const LoginContext = createContext();

export function LoginContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initState);

  const { name,age,dateofbirth,stateofresidence,address,pincode } = state;


  //post data
  const handleSubmit = ()=>{
    const url = 'http://localhost:8080/users';      
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(
          state
        ),
      };
      fetch(url, requestOptions)
        .then(response => response.json())
        .then(data => dispatch({data}));
    
}
   

  return (
    <LoginContext.Provider
      value={{
        name,
        age,
        dateofbirth,
        stateofresidence,
        address,
        pincode,
        handleSubmit,
        dispatch,
      }}>
      {children}
    </LoginContext.Provider>
  );
}
