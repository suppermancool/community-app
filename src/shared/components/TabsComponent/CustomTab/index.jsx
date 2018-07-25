/**
 * A standard tabs component.
 *
 */

import PT from 'prop-types';
import React from 'react';
import { themr } from 'react-css-super-themr';
import {
  Tab,
} from 'react-tabs';

import defaultStyle from './style.scss';

const CustomTab = ({ isSelected, tabInfo }) => (
  <Tab styleName={`tab ${isSelected ? 'selected' : ''}`}>{tabInfo.tab}<br /><span styleName="sub">{tabInfo.subTitle}</span></Tab>
);

CustomTab.tabsRole = 'Tab';

CustomTab.defaultProps = {
};

CustomTab.propTypes = {
  isSelected: PT.bool.isRequired,
  tabInfo: PT.shape({
    tab: PT.string.isRequired,
    subTitle: PT.string.isRequired,
    content: PT.string.isRequired,
    id: PT.number.isRequired,
  }).isRequired,
};

export default themr('CustomTab', defaultStyle)(CustomTab);
