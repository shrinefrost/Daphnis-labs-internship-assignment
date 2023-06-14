import RegistrationPage from "./RegistraionPage";
import React, { useEffect, useState } from "react";
import Home  from "./Home";
import Nav from "./Nav";

import {
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [details,setdetails] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');
  const [filterflag, setfilterflag]= useState(false);
  const [filteredData, setFilteredData] = useState([]);
  
  

  return (
   <div>
     
    <Routes>
      
      <Route path="/Home" element={<>
      <Nav name={name} 
      details={details}
      email ={email} 
      setdetails={setdetails}
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
      filterflag= {filterflag}
      setfilterflag={setfilterflag}
      filteredData={filteredData}
      setFilteredData={setFilteredData}
      
      
      /> 
      
      <Home name={name} 
      setName={setName}
      email ={email} 
      setEmail={setEmail}
      filterflag= {filterflag}
      filteredData={filteredData}
      setFilteredData={setFilteredData}
      selectedOption={selectedOption}
      />   
      
      </>}/>
      

      <Route path="/" element={<RegistrationPage name={name} 
      setName={setName}
      email ={email} 
      setEmail={setEmail}  
      />}/>

    </Routes>
      
    </div>
  );
}

export default App;
