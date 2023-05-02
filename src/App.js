import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import HomePage from "./pages/HomePage";
import AddBook from './pages/AddBook';
import ModifBook from "./pages/ModifBook";
import ViewBooks from "./pages/ViewBooks";
import NoPage from './pages/NoPage';


function App() {

  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const data = window.localStorage.getItem("My RefreshKey");
    console.log("My Data" + data);
    if(data !== null) {
      setTodos(JSON.parse(data));
    }
  },[]);
  
  useEffect(() => {
    window.localStorage.setItem("My RefreshKey", JSON.stringify(todos));
  }, [todos]);
  
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="registration" element={<RegisterForm />} />
          <Route path="add-book" element={<AddBook title={title} setTitle={setTitle} todos={todos} setTodos={setTodos} />} />
          <Route path="view-books" element={<ViewBooks />} />
          <Route path="modify-book" element={<ModifBook />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
  );
}

export default App;
