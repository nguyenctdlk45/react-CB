import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent.js";
import ListTodo from "../Todos/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./Nav/Nav";
import Home from "./Example/Home";
import ListUser from "./ListUser/ListUser";
import DetailUser from "./ListUser/DetailUser";

import { BrowserRouter, Route, Routes } from "react-router-dom";

/**
 * 2 components: class component / function component ( function, arrow)
 * JSX
 */

function App() {
  // const  App = () =>  {
  return (
    // <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<ListTodo />} />
            {/* <Route path="/todo">
              <Route index element={<ListTodo/>}/>
              <Route path="new" element={<>
              <p>New TODO</p>
              </>}
              />
              <Route path=":id" element={<>
              <p>TODO CURD</p>
              </>}
              />
            </Route> */}
            <Route path="/about" element={<MyComponent />} />
            <Route path="/list-user" element={<ListUser props={"string"}/>} />
            <Route path="/list-user/:id" element={<DetailUser />} />
          </Routes>
        </header>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    // </BrowserRouter>
  );
}

export default App;
