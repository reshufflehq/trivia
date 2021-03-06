/**
 * TODO: This file will be remove when import from src folder will be supported
 */
export const errorType = {
  FETCH: 'error fetch data',
};

/**
 * Initial data for trivia questions
 */
export const data = [
  {
    category: 'React 101',
    questions: [
      {
        points: 100,
        question:
          'What happens when you call setState() inside render() method?',
        answer: 'Stack overflow error',
      },
      {
        points: 200,
        question:
          '___ lets you create JavaScript objects using HTML-like syntax',
        answer: 'JSX',
      },
      {
        points: 300,
        question: 'Name one tool that used to transpile JSX?',
        answer: 'Babel',
      },
      {
        points: 400,
        question:
          'React uses a _____ to limit direct manipulation of the DOM and improve performance',
        answer: 'Virtual DOM',
      },
    ],
  },
  {
    category: 'React 201',
    questions: [
      {
        points: 100,
        question:
          '_____ can be done while more than one element needs to be returned from a component?',
        answer: 'Wrapping',
      },
      {
        points: 200,
        question: 'In JSX most of the errors can be caught during _________.',
        answer: 'Compilation',
      },
      {
        points: 300,
        question: 'What is used to pass data to a component from outside?',
        answer: 'props',
      },
      {
        points: 400,
        question:
          'Which Class lifecycle method is invoked once, immediately after the initial rendering occurs?',
        answer: 'componentDidMount',
      },
    ],
  },
  {
    category: 'ES 2015',
    questions: [
      {
        points: 100,
        question:
          '<p>Constants (const) are:</p><ol><li>Block scoped</li><li>Function scoped</li><li>Global</li></ol>',
        answer: '1. Block scoped',
      },
      {
        points: 200,
        question: 'Name 3 new collection classes in ES2015',
        answer: '<ul><li>Map</li><li>WeakMap</li><li>Set</li></ul>',
      },
      {
        points: 300,
        question: 'How can we prevent default behavior in React?',
        answer: 'Using preventDefault()',
      },
      {
        points: 400,
        question:
          'Which method in a React Component should you override to stop the component from updating?',
        answer: 'shouldComponentUpdate',
      },
    ],
  },
  {
    category: 'Feeling Lucky',
    questions: [
      {
        points: 100,
        question: 'Lifecycle methods are mainly used____',
        answer: 'free-up resources',
      },
      {
        points: 200,
        question: "Which first 'external' feature was written in React?",
        answer: "Instagram's feed",
      },
      {
        points: 300,
        question: "What's the date of the first React commit on GitHub?",
        answer: 'May 29th, 2013',
      },
      {
        points: 400,
        question: "What's the hex color of the React logo?",
        answer: '#61DAFB',
      },
    ],
  },
];
