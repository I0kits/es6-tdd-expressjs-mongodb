import React, { Component } from 'react';
import { Tabs, Table } from 'antd';
import './FactSheet.scss';

const columns = [{
  title: 'Publish Time',
  dataIndex: 'public_time',
  key: 'public_time',
}, {
  title: 'Publisher',
  dataIndex: 'publisher',
  key: 'publisher',
}, {
  title: 'Strategy Type',
  dataIndex: 'strategy_type',
  key: 'strategy_type',
}, {
  title: 'Variant',
  dataIndex: 'variant',
}, {
  title: 'Start Date',
  dataIndex: 'start_date',
  key: 'start_date',
}, {
  title: 'End Date',
  dataIndex: 'end_date',
  key: 'end_date',
}, {
  title: 'Creator',
  dataIndex: 'creator',
  key: 'creator',
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
}, {
  title: '',
  dataIndex: 'badge',
  key: 'badge',
}];
const data = [];
// for (let i = 1; i <= 10; i++) {
//   data.push({
//     key: i,
//     public_time: '02, AUG, 2017',
//     publisher: 'John Brown',
//     strategy_type: 'strategy_type',
//     variant: 'variant',
//     start_date: '01, AUG, 2017',
//     end_date: '02, AUG, 2017',
//     creator: 'John Brown',
//     status: '2/2',
//     badge: 'badge',
//   });
// }


class FactSheet extends Component {
  constructor() {
    super();
    this.state = {
      rowSelection: {},
    };
  }

  render() {
    return (
      <Tabs type="card">
        <Tabs.TabPane tab="Draft" key="draft">
          <Table {...this.state} columns={columns} dataSource={data} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Published" key="published">Content of Tab Pane 2</Tabs.TabPane>
      </Tabs>
    );
  }
}

export default FactSheet;
