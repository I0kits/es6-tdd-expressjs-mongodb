import React from 'react';
import { connect } from 'dva';
import ScheduleComponent from '../components/Schedule/Schedule';

function Schedule() {
  return (
    <div>
      <ScheduleComponent />
    </div>
  );
}

export default connect()(Schedule);
