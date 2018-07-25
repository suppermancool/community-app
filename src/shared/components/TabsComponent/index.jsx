/**
 * A standard tabs component.
 *
 */

import PT from 'prop-types';
import React from 'react';
import {
  Tabs, TabPanel,
} from 'react-tabs';
import CustomTabList from './CustomTabList';
import CustomTab from './CustomTab';
import CustomTabPanel from './CustomTabPanel';

import './style.scss';

export default class TabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(index) {
    this.setState({ selectedIndex: index });
  }

  render() {
    const { tabs } = this.props;
    const { selectedIndex } = this.state;

    const tabsUI = tabs.map((info, index) => (
      <CustomTab key={info.id} isSelected={(selectedIndex === index)} tabInfo={info} />
    ));

    const tabPanelsUI = tabs.map(info => (
      <TabPanel key={info.id}><CustomTabPanel content={info.content} /></TabPanel>
    ));

    return (
      <Tabs styleName="container" onSelect={this.onSelect}>
        <CustomTabList> {tabsUI} </CustomTabList>
        {tabPanelsUI}
      </Tabs>
    );
  }
}

TabsComponent.defaultProps = {
};

TabsComponent.propTypes = {
  tabs: PT.arrayOf(PT.shape({
    tab: PT.string.isRequired,
    subTitle: PT.string.isRequired,
    content: PT.string.isRequired,
    id: PT.number.isRequired,
  })).isRequired,
};
