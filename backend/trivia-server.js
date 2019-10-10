import { update } from '@reshuffle/db';
import { data } from './constants';

/**
 * Get trivia questions
 */
/* @expose */
export async function getTriviaData() {
  try {
    return await update('trivia', (result = data) => result);
  } catch (error) {
    console.error(`getTriviaData error: ${error.message}`);
    throw new Error(error);
  }
}
