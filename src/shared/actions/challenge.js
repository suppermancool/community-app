/**
 * Challenge spcific actions.
 */
import { actions } from 'topcoder-react-lib';

/**
 * String values of valid tab names.
 */
export const DETAIL_TABS = {
  DETAILS: 'details',
  REGISTRANTS: 'registrants',
  CHECKPOINTS: 'checkpoints',
  SUBMISSIONS: 'submissions',
  WINNERS: 'winners',
  CHALLENGE_FORUM: 'challenge_forum',
};

export default { challenge: actions.challenge };
