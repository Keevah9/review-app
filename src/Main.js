import React from 'react'
import { useGlobalContext } from './context'
import {FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';
const Main = ( ) => {
    const {index, getData, prevPerson, nextPerson, randomPerson} = useGlobalContext()
    const { name, job, image, text } = getData[index];
    console.log(getData)
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>suprise me!</button>
    </article>
  );
}

export default Main