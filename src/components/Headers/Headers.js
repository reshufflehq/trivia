/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './headers.css';

/**
 * Generate questions category
 */
export default function Headers({ data }) {
  const headers = [];
  data &&
    data.forEach((category, index) =>
      headers.push(
        <Col className='headers justify-content-center'>
          {category.category}
        </Col>,
      ),
    );

  return <Row>{headers}</Row>;
}
