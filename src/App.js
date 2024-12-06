import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Task1, Task2 } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
