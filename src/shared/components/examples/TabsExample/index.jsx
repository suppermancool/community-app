import React from 'react';
import TabsComponent from 'components/TabsComponent';


import './style.scss';

export default function TabsExample() {
  const tabs = [
    {
      tab: 'Stage 1',
      subTitle: 'Aug 01,2018-Oct 31, 2018',
      content: 'Stage 1 content',
    },
    {
      tab: 'Stage 2',
      subTitle: 'Aug 01,2018-Oct 31, 2018',
      content: 'Stage 2 content',
    },
    {
      tab: 'Stage 3',
      subTitle: 'Aug 01,2018-Oct 31, 2018',
      content: 'Stage 3 content',
    },
    {
      tab: 'Stage 4',
      subTitle: 'Aug 01,2018-Oct 31, 2018',
      content: 'Stage 4 content',
    },
  ];

  return (
    <div styleName="container">
      <h1>Tabs</h1>
      <TabsComponent tabs={tabs} />
    </div>
  );
}
