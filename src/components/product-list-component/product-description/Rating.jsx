import React from 'react';
import {AiFillStar} from "react-icons/ai";

const Rating = (props) => {
    const renderStar = () =>{
        const startsToRender = [];
        for(let i=0;i < Math.round(props.maxRating) ; i++)
        {
            startsToRender.push(<AiFillStar  />)
        }
        return startsToRender
    }

    return(
        <>
        {renderStar()}
        </>
    );
}

export default Rating;

