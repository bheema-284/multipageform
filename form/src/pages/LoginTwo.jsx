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
    <div id="formdata">
      <div id="da">
        <div>
          <label htmlFor="">State:</label>
          <br />
          <label htmlFor=""> Address:</label>
          <br />
          <label htmlFor="">Pincode:</label>
          <br />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter StateofResidence"
            value={stateofresidence}
            onChange={(e) =>
              dispatch({
                type: 'CHANGE_STATEOFESIDENCE',
                payload: e.target.value,
              })
            }
          />{' '}
          <br />
          <input
            type="text"
            placeholder="Enter Address"
            value={address}
            onChange={(e) =>
              dispatch({ type: 'CHANGE_ADDRESS', payload: e.target.value })
            }
          />{' '}
          <br />
          <input
            type="text"
            placeholder="Enter Pincode"
            value={pincode}
            onChange={(e) =>
              dispatch({ type: 'CHANGE_PINCODE', payload: e.target.value })
            }
          />
          <br />
          <button
            style={{ width: '60px', backgroundColor: '#FFD93D' }}
            disabled={!stateofresidence || !address || !pincode}
            onClick={() => {
              handleSubmit();
            }}>
            submit
          </button>
        </div>
      </div>
    </div>
  );
};
