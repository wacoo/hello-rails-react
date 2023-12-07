import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../store/greetingSlice';

const Greeting = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchGreeting());
    }, [dispatch]);
    const greetingx = useSelector((state) => state.greeting.greeting) ?? '';

    console.log(greetingx);
    return (
      <>
        <h2>Welcome!</h2>
        <h1>{greetingx}</h1>
      </>
    );
}

export default Greeting;