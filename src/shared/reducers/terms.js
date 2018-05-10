/**
 * Reducer for state.terms.
 */

import _ from 'lodash';
import actions from 'actions/terms';
import { getCommunityId } from 'server/services/communities';
import { reducerFactory } from 'topcoder-react-lib';
import { getAuthTokens } from 'utils/tc';

/**
 * Opens the specified instance of terms modal + selects the terms to show in
 * there, although the exact functioning of that functionality was not
 * documented, thus has to be tracked.
 * @param {Object} state
 * @param {Object} action
 * @return {Object} New state.
 */
function onOpenTermsModal(state, action) {
  const { modalInstanceUuid } = action.payload;

  let { selectedTerm } = action.payload;
  if (!selectedTerm) {
    selectedTerm = _.find(state.terms, t => !t.agreed) || state.terms[0];
  }

  return {
    ...state,
    openTermsModalUuid: modalInstanceUuid,
    selectedTerm,
    viewOnly: Boolean(action.payload.selectedTerm),
  };
}

/**
 * Factory which creates a new reducer with its initial state tailored to the
 * ExpressJS HTTP request, if specified (for server-side rendering). If HTTP
 * request is not specified, it creates just the default reducer.
 * @param {Object} req Optional. ExpressJS HTTP request.
 * @return Promise which resolves to the new reducer.
 */
export function factory(req) {
  const options = {};

  if (req) {
    let entity;

    // if it's challenge details page
    if (req.url.match(/^\/challenges\/\d+/)) {
      const challengeId = req.url.match(/\d+/)[0];
      entity = { type: 'challenge', id: challengeId };
    }

    // if it's community page
    let communityId = getCommunityId(req.subdomains);
    if (!communityId && req.url.match(/\/community\/.*/)) {
      [,, communityId] = req.url.split('/');
      // remove possible params like ?join=<communityId>
      communityId = communityId ? communityId.replace(/\?.*/, '') : communityId;
    }
    if (!entity && communityId) {
      entity = { type: 'community', id: communityId };
    }

    // set options for the entity
    if (entity) {
      options.auth = getAuthTokens(req);
      _.set(options, 'terms.entity.type', entity.type);
      _.set(options, 'terms.entity.id', entity.id);

      return reducerFactory.termsReducer(options).then((res) => {
        // if we try to join community automatically, but not all terms are agreed,
        // then we show terms modal (also we make sure is logged in before open)
        if (options.auth.tokenV3 && req.query.join && !_.every(options.initialState.terms, 'agreed')) {
          const newState = onOpenTermsModal(options.initialState, actions.terms.openTermsModal('ANY'));
          return reducerFactory.terms.factory({
            initialState: newState,
            mergeReducers: options.mergeReducers,
          });
        }
        return res;
      });
    }
  }

  return reducerFactory.termsReducer(options);
}

/* Default reducer with empty initial state. */
export default factory();
