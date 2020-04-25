import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import '../../css/Service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRupeeSign } from '@fortawesome/free-solid-svg-icons';
import { createArr, calcHrs } from '../helper/helper'

const Service = ({
    name, price, addToCart, imgUrl,
    
    
  }) => {
    console.log(addToCart);
    
    const [date, setDate] = useState('2020-03-21');
    const [fromTime, setFromTime] = useState('9am');
    const [toTime, setToTime] = useState('10am');
    
    return (
        
        <div className="col-3  service-card shadow-lg p-3 mb-5 bg-white rounded container">
      <img className="service-card-img" height="280px" src={imgUrl} width="100%" alt="" />
      <p>
        <span className=" time">
          9am- 8pm
        </span>
      </p>
      <p className="service-name p-1">
        {name}
        {' '}
        <span className=" price">
          {' '}
          <FontAwesomeIcon icon={faRupeeSign} />
          {' '}
          {price}
          /h
        </span>
      </p>
      <label htmlFor="from">
        Book from
        <select value={fromTime} onChange={(e) => setFromTime(e.target.value)} name="" id="" className="form-control">
          {createArr(3).map((el) => (
            <option
              key={uuid()}
              aria-label="select time"
              value={`${el + 8}am`}
            >
              {`${el + 8}am`}
            </option>
          ))}
          <option key={uuid()} value="12pm">12pm</option>
          {createArr(7).map((el) => (
            <option
              key={uuid()}
              aria-label="select time"
              value={`${el}pm`}
            >
              {`${el}pm`}
            </option>
          ))}
        </select>

        To
        <select value={toTime} onChange={(e) => setToTime(e.target.value)} name="" id="" className="form-control">
          {createArr(2).map((el) => (
            <option
              key={uuid()}
              aria-label="select time"
              value={`${el + 9}am`}
            >
              {`${el + 9}am`}
            </option>
          ))}
          <option value="12pm">12pm</option>
          {createArr(8).map((el) => (
            <option
              key={uuid()}
              aria-label="select time"
              value={`${el}pm`}
            >
              {`${el}pm`}
            </option>
          ))}
        </select>
      <label htmlFor="date" >
        <span>Booking date</span>
        <input className="form-control" value={date} placeholder="dd-mm-yyyy" onChange={(e) => setDate(e.target.value)} type="date" name="booking" id="" />
      </label>
      </label>

      <button
        onClick={() => addToCart({
          service: name, date, price, hrs: calcHrs(fromTime, toTime),
        })}
        type="submit"
      >
       Book Appointment
      </button>
    </div>
  );
    

  }

export default Service