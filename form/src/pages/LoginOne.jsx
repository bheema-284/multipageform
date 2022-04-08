import { useNavigate } from 'react-router-dom';
import '../App.css';
import { useContext } from 'react';
import { LoginContext } from '../context/LoginContext';
export const LoginOne = () => {
  const { name, age, dateofbirth, dispatch } = useContext(LoginContext);
  const navigate = useNavigate();
  console.log(name, age, dateofbirth, dispatch);

  return (
    <div id="formdata">
      <div id="da">
        <div>
          <label htmlFor="">Name:</label>
          <br />
          <label htmlFor=""> Age:</label>
          <br />
          <label htmlFor="">DateOfBirth:</label>
          <br />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) =>
              dispatch({ type: 'CHANGE_NAME', payload: e.target.value })
            }
          />
          <br />
          <input
            type="number"
            placeholder="Enter Age"
            value={age}
            onChange={(e) =>
              dispatch({ type: 'CHANGE_AGE', payload: e.target.value })
            }
          />
          <br />

          <input
            type="date"
            placeholder="Enter DateofBirth"
            value={dateofbirth}
            onChange={(e) =>
              dispatch({ type: 'CHANGE_DATEOFBIRTH', payload: e.target.value })
            }
          />
          <br />
          <button
            style={{ width: '60px', backgroundColor: '#F6FFA4' }}
            disabled={!name && !age && !dateofbirth}
            onClick={() => navigate('/registration/two')}>
            next
          </button>
        </div>
      </div>
    </div>
  );
};
