/**
 * This module contains the root reducer factory for the Topcoder Community
 * App's state. The factory returns a promise which resolves to the reducer.
 * It accepts ExpressJS HTTP request object as its only optional arguments.
 *
 * In case the argument is provided, the factory assumes server-side rendering,
 * and it can use data available in the HTTP request to preload any necessary
 * data to use as the default state.
 *
 * In case no argument is provided, the factory assumes client-side rendering
 * and should not spend time on creating the default state, as the store will
 * be created with the initial state passed from server anyway.
 *
 * To understand reducers read http://redux.js.org/docs/basics/Reducers.html.
 */

import { getCommunityId } from 'server/services/communities';
import { redux } from 'topcoder-react-utils';
import { reducerFactory } from 'topcoder-react-lib';

import cms from './cms';
import topcoderHeader from './topcoder_header';
import rss from './rss';
import { factory as authFactory } from './auth';
import { factory as challengeFactory } from './challenge';
import { factory as challengeListingFactory } from './challenge-listing';
import { factory as examplesFactory } from './examples';
import { factory as pageFactory } from './page';
import { factory as reviewOpportunityFactory } from './reviewOpportunity';
import { factory as tcCommunitiesFactory } from './tc-communities';
import { factory as leaderboardFactory } from './leaderboard';
import { factory as termsFactory } from './terms';
import { factory as scoreboardFactory } from './tco/scoreboard';

export function factory(req) {
  return redux.resolveReducers({
    auth: authFactory(req),
    challenge: challengeFactory(req),
    challengeListing: challengeListingFactory(req),
    examples: examplesFactory(req),
    tcCommunities: tcCommunitiesFactory(req),
    leaderboard: leaderboardFactory(req),
    terms: termsFactory(req),
    reviewOpportunity: reviewOpportunityFactory(req),
    scoreboard: scoreboardFactory(req),
    page: pageFactory(req),
  }).then(resolvedReducers => redux.combineReducers((state) => {
    const res = { ...state };
    if (req) {
      res.domain = `${req.protocol}://${req.headers.host || req.hostname}`;
      res.subdomainCommunity = getCommunityId(req.subdomains);
    }
    return res;
  }, {
    ...resolvedReducers,
    cms,
    groups: reducerFactory.groupsDefault,
    stats: reducerFactory.statsDefault,
    direct: reducerFactory.directDefault,
    profile: reducerFactory.profileDefault,
    errors: reducerFactory.errorsDefault,
    members: reducerFactory.membersDefault,
    memberTasks: reducerFactory.memberTasksDefault,
    topcoderHeader,
    rss,
  }));
}

export default undefined;
