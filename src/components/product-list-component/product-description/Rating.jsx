import React from 'react';
import {AiFillStar} from "react-icons/ai";
import  PropTypes  from 'prop-types'

const Rating = props => {
    const maxRating = props.maxRating
    const renderStar = () =>{
        const startsToRender = [];
        for(let i=0;i < Math.round(maxRating) ; i++)
        {
            startsToRender.push(<AiFillStar  />)
        }
        return startsToRender
    }

    Rating.propTypes = {
        maxRating: PropTypes.number.isRequired
    }
    
    return(
        <>
        {renderStar()}
        </>
    );
}

export default Rating;

