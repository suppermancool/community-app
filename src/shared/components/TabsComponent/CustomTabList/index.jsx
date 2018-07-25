/**
 * A standard tabs component.
 *
 */

import PT from 'prop-types';
import React from 'react';
import { themr } from 'react-css-super-themr';
import {
  TabList,
} from 'react-tabs';

import defaultStyle from './style.scss';

const CustomTabList = ({ children }) => (
  <TabList styleName="tab-list">
    {children}
  </TabList>
);

CustomTabList.tabsRole = 'TabList';

CustomTabList.defaultProps = {
};

CustomTabList.propTypes = {
  children: PT.node.isRequired,
};

export default themr('CustomTabList', defaultStyle)(CustomTabList);
