import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
export const LoginTwo = () => {
  const {  name,
        age,
        dateofbirth,
        stateofresidence,
        address,
        pincode,handleSubmit, dispatch } = useContext(LoginContext);
  const navigate = useNavigate();
//   if (!name || !age || dateofbirth) {
//     navigate('/registration/one');
//   }
  console.log(stateofresidence,
        address,
        pincode, dispatch);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter StateofResidence"
        value={stateofresidence}
        onChange={(e) =>
          dispatch({ type: 'CHANGE_STATEOFESIDENCE', payload: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Enter Address"
        value={address}
        onChange={(e) =>
          dispatch({ type: 'CHANGE_ADDRESS', payload: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Enter Pincode"
        value={pincode}
        onChange={(e) =>
          dispatch({ type: 'CHANGE_PINCODE', payload: e.target.value })
        }
      />
      <button
        disabled={!stateofresidence || !address || !pincode}
        onClick={()=>{handleSubmit()}}>
        submit
      </button>
    </div>
  );
};
