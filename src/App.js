import React, { useState } from "react";
import { Provider } from "react-redux";

import "./App.css";
import { store } from "./redux/store";
import DepartmentList from "./components/DepartmentList";
import HeaderComponent from "./components/HeaderComponent";
import EmployeesList from "./components/EmployeesList";

function App() {
  const [idDept, setIdDept] = useState(null);

  const handleOnDepartmentChange = (deptartmentId) => {
    setIdDept(deptartmentId)
  };

  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <HeaderComponent />
        </div>
        <div>{idDept ? <EmployeesList /> : <h1 className="welcome"></h1>}</div>
        <div>
          <DepartmentList handleOnDepartmentChange={handleOnDepartmentChange} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
