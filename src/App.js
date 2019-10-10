/* eslint-disable react/style-prop-object */
/* eslint-disable react-hooks/exhaustive-deps */
import '@reshuffle/code-transform/macro';
import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { getTriviaData } from '../backend/trivia-server';
import Headers from './components/Headers/Headers';
import QuestionCard from './components/Card/Card';
import { errorType } from '../src/constants/constants';
import { Display } from '../src/constants/enum';
import ErrorMessage from '../src/components/Message/ErrorMessage';
import './app.css';

/**
 * Get window dimensions for calculate the height of each card
 */
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function App() {
  const [data, setData] = useState([]);
  const [cards, setCards] = useState([]);
  const [windowDimensions] = useState(getWindowDimensions());
  const [setError] = useState('');
  const [display, setDisplay] = useState(Display.cards);
  let rows = 0;
  let height = 0;

  useEffect(() => {
    initialData();
  }, []);

  /**
   * Get trivia data from db and set the data in col-row structure
   */
  const initialData = async () => {
    try {
      const triviaData = await getTriviaData();
      if (triviaData && triviaData.length > 0) {
        setData(triviaData);
        setBoardSize(triviaData);
        setDataOnBoard(triviaData);
      }
    } catch (error) {
      setDisplay(Display.error);
    }
  };

  /**
   * Calculate the rows of the board game by the largest number of the questions with in category
   */
  function updateBoardRows(triviaData) {
    triviaData.forEach(category => {
      if (category.questions.length > rows) {
        rows = category.questions.length;
      }
    });
    return rows;
  }

  /**
   * Update rows with cards, each card will include question and answer
   */
  const setDataOnBoard = triviaData => {
    const rowList = [];
    let indexRow = 0;
    while (rows > indexRow) {
      const cardsInARow = getQuestionsByRow(indexRow, triviaData);
      rowList.push(<Row className='q-row'>{cardsInARow}</Row>);
      indexRow++;
    }
    setCards(rowList);
    setDisplay(Display.cards);
  };

  /**
   * Calculate card height
   */
  const setBoardSize = triviaData => {
    updateBoardRows(triviaData);
    let headerHeight = windowDimensions.width > 640 ? 95 : 32;
    height = { height: (windowDimensions.height - headerHeight) / rows };
  };

  /**
   * Set questions cards in a row by category
   */
  const getQuestionsByRow = (rowIndex, triviaData) => {
    const rowData = [];
    triviaData.forEach((category, categoryIndex) => {
      rowData.push(
        <Col className='q-col align-self-center'>
          <QuestionCard
            height={height}
            questionDetails={category.questions[rowIndex]}
            key={categoryIndex + '-' + rowIndex}
          ></QuestionCard>
        </Col>,
      );
    });
    return rowData;
  };

  return (
    <Container fluid className='app'>
      {display === Display.error && <ErrorMessage />}
      {display === Display.cards && <Headers data={data} />}
      {display === Display.cards && cards}
    </Container>
  );
}
