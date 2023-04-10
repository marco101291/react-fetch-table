import styles from "./styles.css";
import React, { useEffect, useState } from "react";
import TableBody from "./components/TableBody/TableBody";
import Title from './components/Title/Title';
import AddToDo from "./components/AddToDo/AddToDo";
import Spinner from "./components/Spinner/Spinner";
import ErrorScreen from './pages/ErrorScreen';
import RefreshBtn from "./components/RefreshBtn/RefreshBtn";
import VisibleRows from "./components/VisibleRows/VisibleRows";



export default function App() {
  const [tableData, setTableData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [rowsPerPage, setRowsPerPage] = useState(10);

 

  const tableHeaders = [
    { header: "#" },
    { header: "User" },
    { header: "Description" },
    { header: "Completed" }
  ];

  const refreshBtn = () => {
    window.location.reload();
  }

  const fetchReq = async () => {

    try {
      const api = "https://jsonplaceholder.typicode.com/todos";
      const response = await fetch(api);
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      if (error !== '') {
        setError("There was an error at fetching data. Please check url or network connection");
      }

    }

  };

  useEffect(() => {
    setIsLoading(true)
    fetchReq();
    setTimeout(() => {
      setIsLoading(false)
    }, 1500)
  }, []);

  return (
    <>
      {error !== '' ? (
        <ErrorScreen error={error} />
      ) :
        !isLoading
          ? (
            <div className="App">
              <Title title="To Do List" />
              <div>
                <AddToDo tableData={tableData} setTableData={setTableData} refreshBtn={refreshBtn} />
                <RefreshBtn refreshBtn={refreshBtn} />
              </div>
              <TableBody tableData={tableData} dataHeaders={tableHeaders} rowsPerPage={rowsPerPage} styles={styles} />
              <VisibleRows rowsPerPage={rowsPerPage} setRowsPerPage={setRowsPerPage}/>
            </div>
          ) : (
            <div className="spinner-center">
              <Spinner />
            </div>
          )}
    </>

  );
}
