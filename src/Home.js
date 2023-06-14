import React from "react";
import styled from "styled-components";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Core from "./Core";



const Home =({name ,setName, email  ,setEmail,filterflag,setFilteredData,filteredData,selectedOption,changeDataOnScreen}) => {
  console.log('Name:', name);
  console.log('Email:', email);
  console.log(filterflag, "this is from home");

    // fetching data from the url
  const [loading, setLoading] = useState(false);
  const [details,setdetails] = useState([]);
  let   filterData =()=>{};
 

  
  
  useEffect(() => {
    const loadPost = async () => {

        // Till the data is fetch using API 
        // the Loading page will show.
        setLoading(true);

        // Await make wait until that 
        // promise settles and return its result
        const response = await axios.get(
        "https://fakestoreapi.com/products");
        setdetails(response.data);
        setFilteredData(response.data);
        console.log(filteredData);
        setLoading(false);
        filterData();

        
    }

    // Call the function
    loadPost();
    console.log(details);
}, []);


    return(
   <Datalist>
            <Keydata>
                
            {loading ? (<h4>Loading</h4>) :
                    (details.map((item) =>
                        <Core title = {item.title} 
                        category = {item.category} 
                        description ={item.description} 
                        image= {item.image}
                        key={item.id} />)
                    )
                }
            </Keydata>

 
        </Datalist>
    );
 
}


const Datalist = styled.div`
 padding: 0rem 5rem;
`;
const Keydata = styled.div`
min-height:80vh;
display:grid;
grid-template-columns: repeat(auto-fit, minmax(300px,1fr));
grid-column-gap: 5rem;
grid-row-gap: 5rem;
`;

export default Home;