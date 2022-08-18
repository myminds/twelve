import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../../Components";
import { callMethod } from "../../Services/CallMethod";

export const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const getDataFromServer = useCallback(async () => {
    let res = await callMethod();
    console.log("res", res);
    if (res) {
      setData(res);
    }
  }, []);

  useEffect(() => {
    getDataFromServer();
  }, []);


  return (
    <div className="container">
      <Header></Header>
      <div className="text-align-center">
        <h3>User</h3>
        </div>
      <div>
        {Array.isArray(data) && (
          <table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
            {data.map((obj, index) => {
                return (
                  <tr>
                    <td>{obj.id}</td>
                    <td><Link state={obj} to={"/albums/"+obj.id}>{obj.name}</Link></td>
                    <td>{obj.email}</td>
                    <td>{obj.phone}</td>
                    <td>{obj.website}</td>
                  </tr>
                );
            })}
          </table>
        )}
      </div>
    </div>
  );
};
