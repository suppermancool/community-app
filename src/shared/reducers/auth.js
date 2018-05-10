/**
 * Reducer for state.auth.
 */
import { getAuthTokens } from 'utils/tc';

import { reducerFactory } from 'topcoder-react-lib';

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * ExpressJS HTTP request, if specified (for server-side rendering). If HTTP
 * request is not specified, it creates just the default reducer.
 * @param {Object} req Optional. ExpressJS HTTP request.
 * @return Promise which resolves to the new reducer.
 */
export function factory(req) {
  return reducerFactory.authReducer({
    auth: getAuthTokens(req),
  });
}

/* Default reducer with empty initial state. */
export default factory();
