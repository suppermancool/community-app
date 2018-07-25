/**
 * A standard tabs component.
 *
 */

import PT from 'prop-types';
import React from 'react';
import { themr } from 'react-css-super-themr';

import defaultStyle from './style.scss';

const CustomTabPanel = ({ content }) => (
  <div styleName="tab-pannel"> {content} </div>
);

CustomTabPanel.tabsRole = 'TabPanel';

CustomTabPanel.defaultProps = {
};

CustomTabPanel.propTypes = {
  content: PT.string.isRequired,
};

export default themr('CustomTabPanel', defaultStyle)(CustomTabPanel);
