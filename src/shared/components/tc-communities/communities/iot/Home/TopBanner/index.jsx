/**
 * Top Banner component of About page IoT community
 */
import React from 'react';
import JoinCommunity from 'containers/tc-communities/JoinCommunity';

import predixPlusTopcoderSrc from 'assets/themes/iot/home/home-hero-title.png';

import './styles.scss';

const TopBanner = () => (
  <div styleName="banner">
    <div styleName="container">
      <div styleName="inner-container">
        <img styleName="logos" src={predixPlusTopcoderSrc} alt="Predix + Topcoder" />
        <h2 styleName="title">Ready for the Future?<br /> The Industrial Internet is here</h2>
        <div styleName="buttons">
          <JoinCommunity />
        </div>
        <p styleName="text">Get hands-on with the Predix platform and the Industrial Internet</p>
      </div>
    </div>
  </div>
);

export default TopBanner;
