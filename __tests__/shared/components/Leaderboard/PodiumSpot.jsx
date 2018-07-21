import React from 'react';
import Renderer from 'react-test-renderer/shallow';
import PodiumSpot from 'components/Leaderboard/PodiumSpot';

const mockUserObj = {
  rank: 1,
  avatar: 'some.fake.string',
  'user.handle': 'overachieving.mofo',
  'challenge.count': 99999,
  'project_result.final_score': 9999999999,
  handle: 'winner',
  challengecount: 0,
  points: 0,
};

const mockUserObj2 = {
  rank: 1,
  avatar: '/assets/a.jpg',
  'user.handle': 'overachieving.mofo',
  'challenge.count': 99999,
  'project_result.final_score': 9999999999,
  handle: 'winner',
  challengecount: 0,
  points: 0,
};

test('Matches shallow shapshot', () => {
  const renderer = new Renderer();
  renderer.render((
    <PodiumSpot competitor={mockUserObj} />
  ));
  expect(renderer.getRenderOutput()).toMatchSnapshot();

  renderer.render((
    <PodiumSpot competitor={mockUserObj2} />
  ));
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});
