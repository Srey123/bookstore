

import Home from "./components/Home/home";
import Courses from "./components/courses1/courses";
import Signup from "./components/Home/Signup";

import{Routes,Route} from "react-router-dom";
function App() {
  return (
    <>
     

    <div className="dark:bg-slate-900 dark:text-white">

   
   <Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/courses" element={<Courses/>}></Route>
<Route path="/Signup" element={<Signup/>}></Route>

     </Routes>
     </div>
    
      
      </>
  );
}

export default App;
