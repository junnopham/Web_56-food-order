import { Routes, Route } from "react-router-dom";
import Layout from "./layouts";
import Register from "./pages/auth/Register";
import Error404 from "./pages/errors/Error404";
import Home from "./pages/Home";
import List from "./pages/List";
import Login from "./pages/auth/Login";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/food" element={<List />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default App;
