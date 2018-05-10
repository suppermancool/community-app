/* TODO: This reducer and corresponding actions control the UI state and logic
 * for the specific page (Submission Management Page). They should be moved to
 * page/challenge/submissions-management */

import { reducerFactory } from 'topcoder-react-lib';

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * ExpressJS HTTP request, if specified (for server-side rendering). If HTTP
 * request is not specified, it creates just the default reducer.
 * @param {Object} req Optional. ExpressJS HTTP request.
 * @return Promise which resolves to the new reducer.
 */
export function factory() {
  return reducerFactory.mySubmissionsManagementReducer({});
}

export default factory();
