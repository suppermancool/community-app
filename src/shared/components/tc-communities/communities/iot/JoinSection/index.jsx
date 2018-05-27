/**
 * Join button section component for IoT community
 */
import React from 'react';
import JoinCommunity from 'containers/tc-communities/JoinCommunity';
import Section from '../../../Section';

import styles from './styles.scss';

const JoinSection = () => (
  <Section
    title="Are you ready for Predix?"
    theme={{
      container: styles.sectionContainer,
    }}
  >
    <div styleName="buttonContainer">
      <JoinCommunity />
    </div>
  </Section>
);

export default JoinSection;
