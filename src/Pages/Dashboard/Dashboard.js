import { useCallback, useEffect, useState } from "react";
import { Header, Pagination } from "../../Components";
import { callMethod } from "../../Services/CallMethod";
const pagination = {
  total_count: "",
  page: "",
  limit: 50,
  offset: 0,
  currentPage: 1,
};
export const Dashboard = () => {
  const [data, setData] = useState([]);
  const [showData, setShowData] = useState([]);
  const [paginationData, setPaginationData] = useState(pagination);
  const [search, setSearch] = useState("");
  const getDataFromServer = useCallback(async () => {
    let res = await callMethod();
    console.log("res", res);
    if (res) {
      setData(res);
      setShowData(res);
      setPaginationData((prev) => ({
        ...prev,
        total_count: res.length,
        page: Math.ceil(res.length / prev.limit),
        offset: 0,
      }));
    }
  }, []);

  useEffect(() => {
    getDataFromServer();
  }, []);

  const handlePagination = (page) => {
    setPaginationData((prev) => ({
      ...prev,
      offset: (page - 1) * prev.limit,
      currentPage: page,
    }));
  };

  const searcData = (searchs) => {
    setSearch(searchs)
    let dataArr = [...data];
    if (searchs) {
      dataArr = dataArr.filter((obj) =>
      // (obj?.name?.includes(searchs) || obj?.email?.includes(searchs) || obj?.body?.includes(searchs) || obj?.id?.includes(searchs))
       {
        let matched = false;
        Object.keys(obj).map((key) => {
          console.log(obj[key]);
          if (obj[key]?.toString()?.includes(searchs.toString())) {
            matched = true;
          }
        });
        return matched;
      }
      );
    }
    setPaginationData((prev) => ({
      ...prev,
      total_count: dataArr.length,
      page: Math.ceil(dataArr.length / prev.limit),
      offset: 0,
      currentPage: 1,
    }));
    setShowData(dataArr);
  };

  return (
    <div className="container">
      <Header></Header>
      <div>
        <div>
          <input
            value={search}
            onChange={(e) => {
              searcData(e.target.value);
            }}
            className="search-input"
            placeholder="Serach..."
          />
        </div>
        {Array.isArray(showData) && (
          <table>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Comment</th>
            </tr>
            {showData.map((obj, index) => {
              if (
                index + 1 > paginationData.offset &&
                index < paginationData.offset + paginationData.limit
              )
                return (
                  <tr>
                    <td>{obj.id}</td>
                    <td>{obj.name}</td>
                    <td>{obj.email}</td>
                    <td>{obj.body}</td>
                  </tr>
                );
            })}
          </table>
        )}
      </div>
      <Pagination
        paginationData={paginationData}
        handlePagination={handlePagination}
      ></Pagination>
    </div>
  );
};
