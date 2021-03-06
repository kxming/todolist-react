import React from 'react';
import LoginForm from './loginForm';
import RegistryForm from './registryForm';

import { Row, Col } from 'antd';

import './login.less';
import loginSrc from '../../assets/thumd.jpg';

export default class Login extends React.Component {
  login: boolean = true;
  render() {
    return (
      <div className="login">
        <Row
          type="flex"
          justify="center"
          align="middle"
          style={{ height: '100%' }}
        >
          <Col
            span={12}
            style={{ display: 'flex', justifyContent: 'center' }}
            className={this.login ? '' : 'islogin'}
          >
            <RegistryForm />
          </Col>
          <Col span={12} style={{ display: 'flex', justifyContent: 'center' }}>
            <img src={loginSrc} alt="" />
          </Col>
          <Col
            span={12}
            style={{ display: 'flex', justifyContent: 'center' }}
            className={this.login ? 'islogin' : ''}
          >
            <LoginForm />
          </Col>
        </Row>
      </div>
    );
  }
}
