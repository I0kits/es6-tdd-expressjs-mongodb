import React from 'react';
import { Menu, Icon } from 'antd';
import './Header.scss';
import '../../index.scss';

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
          <span><Icon type="file-text" />Fact Sheet</span>
        </Menu.Item>
        <Menu.Item>
          <span><Icon type="clock-circle-o" />Schedule</span>
        </Menu.Item>
        <Menu.Item className="profile">
          <span><img src="https://l.ruby-china.org/user/avatar/13505.jpg!sm" alt="acvater" /><span>Hi Bobby</span></span>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
