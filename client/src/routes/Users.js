import React from 'react';
import { connect } from 'dva';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './Users.css';

function Users({ location }) {
  return (
    <div className={styles.normal}>
      <Menu
        selectedKeys={[location.pathname]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="/">
          <Link to="/"><Icon type="home" />Home</Link>
        </Menu.Item>
        <Menu.Item key="/404">
          <Link to="/page-you-dont-know"><Icon type="frown-circle" />404</Link>
        </Menu.Item>
        <Menu.Item key="/antd">
          <a href="https://github.com/dvajs/dva">dva</a>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default connect()(Users);
