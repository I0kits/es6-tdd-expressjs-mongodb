import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'dva/router';
import styles from './Header.css';

function Header() {
  return (
    <div className={styles.normal}>
      <Menu
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="/">
          <Link to="/"><Icon type="home" />Home</Link>
        </Menu.Item>
        <Menu.Item key="/404">
          <Link to="/404"><Icon type="frown-circle" />404</Link>
        </Menu.Item>
        <Menu.Item key="/antd">
          <a href="https://github.com/dvajs/dva">dva</a>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
