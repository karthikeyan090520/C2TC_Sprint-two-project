import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AdminList from "./components/AdminList";
import AdminForm from "./components/AdminForm";
import "./App.css";

function App() {
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const refreshList = () => setRefresh(!refresh);

  return (
    <div className="App">
      <Navbar />
      <AdminForm selectedAdmin={selectedAdmin} refreshList={refreshList} />
      <AdminList key={refresh} onEdit={setSelectedAdmin} />
    </div>
  );
}

export default App;
