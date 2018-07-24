/**
 * A standard tabs component.
 *
 */

import PT from 'prop-types';
import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';

import './style.scss';

export default class TabsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedIndex: 0 };
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onSelect(index) {
    this.setState({ selectedIndex: index });
  }

  render() {
    const { tabs } = this.props;

    const { selectedIndex } = this.state;
    const tabsUI = tabs.map((info, index) => (
      <Tab styleName={`tab ${(selectedIndex === index) ? 'selected' : ''}`}>{info.tab}<br /><span styleName="sub">{info.subTitle}</span></Tab>
    ));

    const tabPanelsUI = tabs.map(info => (
      <TabPanel styleName="tab-pannel"> {info.content} </TabPanel>
    ));

    return (
      <Tabs styleName="container" onSelect={this.onSelect}>
        <TabList styleName="tab-list">
          {tabsUI}
        </TabList>

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
  })).isRequired,
};
