import "./styles.css";
import ErrorPage from "./ErrorPage";
import Header from "./Header";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ToDoList from "./ToDoList";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        <Route path="todolist" element={<ToDoList />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
