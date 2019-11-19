import React, { useState } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import { View } from '../../constants/enum';
import './card.css';

/**
 * Generate card with question in the front and answer in the back
 */
export default function QuestionCard({ questionDetails, height }) {
  const { question, answer } = questionDetails;
  const [view, setView] = useState(View.question);

  const clickHandler = event => {
    switch (view) {
      case View.points:
        setView(View.question);
        break;
      case View.question:
        setView(View.answer);
        break;
      case View.answer:
        setView(View.question);
        break;
      default:
    }
  };

  return (
    <Flippy flipOnClick={true} flipDirection='vertical' style={height}>
      <FrontSide onClick={clickHandler} className='front-side'>
        <span>{question}</span>
      </FrontSide>
      <BackSide onClick={clickHandler} className='back-side'>
        <span>{answer}</span>
      </BackSide>
    </Flippy>
  );
}
