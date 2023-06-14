import React from "react";
import styled from "styled-components";
import { useState } from "react";

const Core =({title , category,description,image}) => {

    if(description.length>150){
        const ReadMore = ({ children }) => {
        const text = children;;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
          <p className="text">
            {isReadMore ? text.slice(0, 150) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "...read more" : " show less"}
            </span>
          </p>
        );
      };
    
    return(
        <Singledata>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <h3>{category}</h3>
            <p><ReadMore>{description}</ReadMore></p>
            
        </Singledata>
    );
    }
    else {
        return(
        <Singledata>
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <h3>{category}</h3>
        <p>{description}</p>
        
        
    </Singledata>
        );
    }
};

const Singledata = styled.div`

margin-top:3rem;
min-height:30vh;
img {
    min-height: 30vh;
    box-shadow: 0px 5px 30px rgba(0,0,0,0.1);
    width:100%;
    border-radius:1rem;
}
p {
    .read-or-hide{
        color: blue;
        cursor: pointer;
}
`
  ;

  export default Core;