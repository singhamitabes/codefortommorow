
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./Component/Dashboard";
import FeedBackForm from "./Component/FeedBackForm";
import Home from "./Component/Home";

function App() {
  const [toggleValue,settogglevalue] = useState(false)
  console.log(toggleValue);
  return (
   
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Dashboard settogglevalue={settogglevalue} />}>
            <Route path='' element={<Home toggleValue={toggleValue} />} />
            <Route path='/feedbackform' element={<FeedBackForm />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
