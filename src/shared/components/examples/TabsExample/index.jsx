import React from 'react';
import TabsComponent from 'components/TabsComponent';


import './style.scss';

export default function TabsExample() {
  const tabs = [
    {
      tab: 'Stage 1',
      subTitle: 'Aug 01,2018-Oct 31, 2018',
      content: 'Stage 1 content',
      id: 0,
    },
    {
      tab: 'Stage 2',
      subTitle: 'Aug 01,2018-Oct 31, 2018',
      content: 'Stage 2 content',
      id: 1,
    },
    {
      tab: 'Stage 3',
      subTitle: 'Aug 01,2018-Oct 31, 2018',
      content: 'Stage 3 content',
      id: 2,
    },
    {
      tab: 'Stage 4',
      subTitle: 'Aug 01,2018-Oct 31, 2018',
      content: 'Stage 4 content',
      id: 3,
    },
  ];

  return (
    <div styleName="container">
      <h1>Tabs</h1>
      <TabsComponent tabs={tabs} />
    </div>
  );
}
