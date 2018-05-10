/**
 * Reducer for state.challenge
 */

import _ from 'lodash';
import { getAuthTokens } from 'utils/tc';
import { reducerFactory } from 'topcoder-react-lib';

import { factory as smpFactory } from './my-submissions-management';

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * ExpressJS HTTP request, if specified (for server-side rendering). If HTTP
 * request is not specified, it creates just the default reducer.
 * @param {Object} req Optional. ExpressJS HTTP request.
 * @return Promise which resolves to the new reducer.
 */
export function factory(req) {
  /* Server-side rendering of Submission Management Page. */

  const options = {
    auth: getAuthTokens(req),
  };

  if (req && req.url.match(/^\/challenges\/\d+\/my-submissions/)) {
    const challengeId = req.url.match(/\d+/)[0];
    _.set(options, 'challenge.challengeDetails.id', challengeId);
    _.set(options, 'challenge.challengeDetails.mySubmission', true);
  } else if (req && req.url.match(/\/challenges\/\d+([?/].*)?$/)) {
    const challengeId = req.url.match(/\d+/)[0];
    _.set(options, 'challenge.challengeDetails.id', challengeId);
  }

  /* Otherwise this part of Redux state is initialized empty. */
  return smpFactory().then((smp) => {
    options.mySubmissionsManagement = smp;
    return reducerFactory.challengeReducer(options);
  });
}

/* Default reducer with empty initial state. */
export default factory();
