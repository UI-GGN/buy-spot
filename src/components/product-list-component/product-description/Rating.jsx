import React from 'react';
import {AiFillStar} from "react-icons/ai";

const Rating = (props) => {

    console.log('maxrating===', props.maxRating)

    const renderStar = () =>{
        const startsToRender = [];
        for(let i=0;i < Math.round(props.maxRating) ; i++)
        {
            startsToRender.push(<AiFillStar  />)
        }
        // color={i < selectedRating ? 'red' :'green'}
        return startsToRender
    }

    return(
        <>
        {renderStar()}
        </>
    );
}

export default Rating;

