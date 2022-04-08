import { Navigate } from 'react-router-dom';
import "../App.css"
import axios from 'axios';
import { useState,useEffect } from 'react';
export const Users = () => {
//   if ('user is not authenticated') {
//     return <Navigate to="/registration/one" />;
//   }
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(false);
const perPage = 2;
const getData = (page, perPage) => {  
  setLoading(true);
  setErr(false);
  axios('http://localhost:8080/users', {
    method: 'GET',
    params: { _page: page, _limit: perPage },
  })
    .then((res) => {
      setLoading(false);
      setData(res.data);
    })
    .catch((er) => {
      console.log(er);
      setData([]);
      setErr(true);
      setLoading(false);
    });
};
useEffect(() => {
  getData(page, perPage);
}, [page, perPage]);

  return (
    <>
      <h1 id='h1'> All Users</h1>
      {err && <div className="error"> Something went wrong! Try again </div>}
      {data.map((e) => {
        return (
          <div>
            {' '}
            <div className="data">
              <div key={e.id}>
                <h4>Name:{e.name}</h4>
                <p>Age:{e.age}</p>
                <p>DateOfBirth:{e.dateofbirth}</p>
                <p>Satae:{e.stateofresidence}</p>
                <p>Address:{e.address}</p>
                <p>Pincode:{e.pincode}</p>
              </div>
            </div>
          </div>
        );
      })}
      {loading && <div>...loading</div>}
      <button
        disabled={loading || page === 1}
        onClick={() => setPage((page) => page - 1)}>
        PREV
      </button>
      <button disabled={loading || !data} onClick={() => setPage(page + 1)}>
        NEXT
      </button>
      <div>Current page: {page}</div>
    </>
  );
};
