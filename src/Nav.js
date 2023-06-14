import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState, useEffect } from "react";
import Piecharts from "./Piechart";

const Nav =({name ,details, email  ,setdetails, selectedOption,setSelectedOption,filterflag, 
    setfilterflag,filteredData,setFilteredData,changeDataOnScreen})=> {

  // fetching data from the url
  const [loading, setLoading] = useState(false);
  const [analyseflag, isclicked]=useState(false);
 
  
  const analyse =()=> {
    
    isclicked(true);  
}


  
  // applying filter

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    console.log(selectedValue);
    setfilterflag(true);
  
  
  
  

  }
   
    useEffect(() => {
      const loadPost = async () => {
  
          // Till the data is fetch using API 
          // the Loading page will show.
          setLoading(true);
  
          // Await make wait until that 
          // promise settles and return its result
          const response = await axios.get(
          "https://fakestoreapi.com/products/categories");
          setdetails(response.data);
  
          // After fetching data stored it in posts state.
          // setPosts(response.data);
  
          // Closed the loading page
          setLoading(false);
      }
  
      // Call the function
      loadPost();
  
  
  }, []);


    return(
        <Navigation> 
            <User>
            <h3>{name}</h3>
            <h5>{email}</h5>
            </User>

            <div className="catergory">
            <select value={selectedOption} onChange={handleOptionChange}>
                <option value={details[0]}>{details[0]}</option>
                <option value={details[1]}>{details[1]}</option>
                <option value={details[2]}>{details[2]}</option>
                <option value={details[3]}>{details[3]}</option>
            </select>
            </div>

            <button onClick={analyse}>Analyse</button>

            { !analyseflag? (null) :
                    (<Piecharts analyseflag={analyseflag}
                      isclicked={isclicked}
                      details={details}/>)
                }

            <div className="search">
                <input type="text"/>
                <button>search</button>
            </div>

        </Navigation>
    );
}

const Navigation = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
min-height: 5vh;
background-color: #f5f5f5;
`;
const User = styled.div`
align-items:center;
`;

export default Nav;
