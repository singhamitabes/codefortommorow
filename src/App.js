
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Component/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/edit" element={<EditToDo editId={editId} />} />
          <Route path="/read" element={<ReadToDo seteditId={seteditId} />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
