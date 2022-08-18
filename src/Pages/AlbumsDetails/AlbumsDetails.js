import { useCallback, useEffect, useState } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { Header } from "../../Components";
import {callMethodAlbumsDetails } from "../../Services/CallMethod";

export const AlbumsDetails = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const params =useParams()
  const {state} =useLocation()
  const getDataFromServer = useCallback(async () => {
    let res = await callMethodAlbumsDetails(params.id);
    console.log("reggs", state);
    if (res) {
      setData(res);
    }
  }, []);

  useEffect(() => {
    getDataFromServer();
  }, [getDataFromServer]);



  return (
    <div className="container">
      <Header></Header>
      <div>
        <div className="text-align-center">
        <h3>User Albums details- {state?.title}</h3>
        </div>
        {Array.isArray(data) && (
          <table>
            <tr>
              <th>Id</th>
              <th>title</th>
              <th>Image</th>
            </tr>
            {data.map((obj, index) => {
                return (
                  <tr>
                    <td>{obj.id}</td>
                    <td><Link state={obj} to={"/albums/"+obj.id}>{obj.title}</Link></td>
                    <td><img src={obj.url} alt="" width={100}/></td>
                  </tr>
                );
            })}
          </table>
        )}
      </div>
    </div>
  );
};
