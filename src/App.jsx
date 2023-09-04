import { useState } from "react"
import Form from "./components/Form"
import List from "./components/List"
import Search from "./components/Search"
import { database } from './components/database'
import Alerts from "./components/Alert"
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  const [data, setData] = useState(database)
  const [dataFilter, setDataFilter] = useState(data)

  const [alert, setAlert] = useState({
    text: '',
    color: '',
    state: false,
  })

  const addAlert = (newAlert) => {
    setAlert(newAlert);

    setTimeout(() => {
      setAlert({
        text: '',
        color: '',
        state: false,
      });
    }, 5000);
  };

  return (
    <>

      <div className="all-container">
        <div className="search-container">
          <h1>
            <i className="fa-solid fa-user-group"></i> Ctributors List
          </h1>
          <div className="search">
            <Search
              data={data}
              dataFilter={setDataFilter}
            />
          </div>
          <div className="list-container">
            <List
              data={data}
              setData={setData}
              dataFilter={dataFilter}
              setDataFilter={setDataFilter}
            />
          </div>
        </div>
        <div className="form-container1">
          <div className="form-container">
            <Form
              className="form"
              addAlert={addAlert}
              data={data}
              setData={setData}
              dataFilter={dataFilter}
              setDataFilter={setDataFilter}
            />
            <Alerts
              className="alert"
              alerta={alert}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App