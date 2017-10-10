import React from 'react';
import { Link } from 'dva/router';
import { Menu, Icon } from 'antd';
import './Header.less';
import '../../index.less';

function Header() {
  return (
    <div>
      <Menu
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item disabled className="logo">
          <img src="https://l.ruby-china.org/user/avatar/13505.jpg!sm" alt="logo" />
        </Menu.Item>
        <Menu.Item key="/antd">
          <Link to="/"><Icon type="file-text" />Fact Sheet</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/schedule"><Icon type="clock-circle-o" />Schedule</Link>
        </Menu.Item>
        <Menu.Item className="profile">
          <span><img src="https://l.ruby-china.org/user/avatar/13505.jpg!sm" alt="acvater" /><span>Hi Bobby</span></span>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
