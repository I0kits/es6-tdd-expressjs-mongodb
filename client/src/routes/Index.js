import React from 'react';
import { connect } from 'dva';
import FactSheet from '../components/FactSheet/FactSheet';

function Index() {
  return (
    <div>
      <FactSheet />
    </div>
  );
}

function mapStateToProps() {
  return {};
}
export default connect(mapStateToProps)(Index);
