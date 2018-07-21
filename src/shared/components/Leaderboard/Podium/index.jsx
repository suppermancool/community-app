/**
 * Leaderboard Podium
 *
 * Description:
 *   Component that display the top spots on a leaderboard
 *   It is designed to work with the PodiumSpot component. The Podium component
 *   simply created a layout to display PodiumSpots.
 *
 * Usage:
 *   <Podium competitors={competitors} />
 *
 * Props:
 *   - competitors (required): Array of Top Coder user object, with
 *     the following properties:
 *      - rank: Number, required. User current ranking in the leaderboard
 *      - photourl: String. URL for the user's profile picture
 *        This will default to the default user avatar is undefined
 *      - user.handle: String, required. User handle
 *      - challenge.count: Number, required. The number of challenge the user won
 *      - project_result.final_score: Number, required. The user's current score
 */

import React from 'react';
import PT from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import PodiumSpot from '../PodiumSpot';

import './styles.scss';

export default function Podium(props) {
  const {
    competitors,
  } = props;

  if (competitors.length > 1) {
    const comp0 = competitors[0];
    const comp1 = competitors[1];
    competitors[0] = comp1;
    competitors[1] = comp0;
  }

  const renderPodium = (comps) => {
    if (comps.length === 0) {
      return (
        <LoadingIndicator />
      );
    }

    const renderItems = items => (
      items.map(competitor => (
        <div styleName={`podium-column ${(items.length === 1) ? 'full' : ''}`}>
          <PodiumSpot competitor={competitor} />
        </div>
      ))
    );

    return (
      <div>
        {renderItems(comps)}
      </div>
    );
  };

  return (
    <div styleName="Podium">
      {renderPodium(competitors)}
    </div>
  );
}

const CompetitorShape = PT.shape({
  rank: PT.number.isRequired,
  'challenge_stats.photo_url': PT.string,
  'challenge_stats.winner_handle': PT.string.isRequired,
  'challenge_stats.count': PT.number.isRequired,
  points: PT.number.isRequired,
});

Podium.propTypes = {
  competitors: PT.arrayOf(CompetitorShape).isRequired,
};
