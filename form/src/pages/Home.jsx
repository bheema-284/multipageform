import { useNavigate } from 'react-router-dom';

export const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>HOME</h1>
      <button onClick={() => navigate('/registration/one')}>FORM</button>
      <button onClick={() => navigate('/users')}>USERS</button>
    </div>
  );
};
