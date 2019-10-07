[![CircleCI](https://circleci.com/gh/reshufflehq/blank.svg?style=svg)](https://circleci.com/gh/reshufflehq/blank)

This is a [Reshuffle](https://reshuffle.com/) template.

## About

React trivia game using Reshuffle platform and react js.

This project was inspired from [react-trivia](https://github.com/ccoenraets/react-trivia) repository.

## Screenshots

<img src="./app-screen.png" width="50%" height="50%">

## Data

Trivia questions array, questions by category:

```json
[
  {
    "category": "React 101",
    "questions": [
      {
        "points": 100,
        "question": "<p>What part of your application does React focus on?</p><ol><li>The Model</li><li>The View</li><li>The Controller</li><li>All of the above</li></ol>",
        "answer": "B. The View"
      },
      {
        "points": 200,
        "question": "_____ lets you create JavaScript objects using HTML syntax",
        "answer": "JSX"
      },
      {
        "points": 300,
        "question": "What tool can you use to transpile JSX?",
        "answer": "Babel"
      },
      {
        "points": 400,
        "question": "React uses a _____________ to limit direct manipulation of the DOM and improve performance",
        "answer": "Virtual DOM"
      }
    ]
  }
]
```
