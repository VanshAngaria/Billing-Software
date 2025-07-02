import { Route, Routes } from "react-router-dom";
import Menubar from "./components/Menubar";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import ManageItems from "./Pages/ManageItems/ManageItems.jsx";
import ManageCategory from "./Pages/ManageCategory/ManageCategory.jsx";
import Explore from "./Pages/Explore/Explore.jsx";
import ManageUsers from "./Pages/ManageUsers/ManageUsers.jsx";
import './App.css';


const App = () => {
  return (
    <div className="App">
      <Menubar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-items" element={<ManageItems />} />
        <Route path="/manage-category" element={<ManageCategory />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/manage-users" element={<ManageUsers />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;