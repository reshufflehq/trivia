import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { message } from '../../constants/constants';

/**
 * Generate message error in a jumbotron container
 */
export default function ErrorMessage() {
  return (
    <Jumbotron>
      <h1>{message.OOPS}</h1>
      <p>{message.REFRESH}</p>
    </Jumbotron>
  );
}
