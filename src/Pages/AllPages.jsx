import {Routes,Route} from "react-router-dom";
import { Home } from "../components/Home";
import { Summary } from "../components/Summary";
import { Moviebook } from "../components/Moviebook";


const AllPages = () => {

    return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/summary" element={<Summary/>} />
        {/* <Route path="/book" element={<Moviebook/>} /> */}
      </Routes>
    )
  }
  
  export default AllPages