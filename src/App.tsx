import React, { FC } from 'react';
import Login from './login/login';
import './App.css'
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const App: FC = () => {

  return (
    <Layout className="app-wrapper">
      <Header>
        Header
      </Header>
      <Content className="content-wrapper">
        <Login/>
      </Content>
      <Footer>
        Footer
      </Footer>
    </Layout>
  );

}

export default App;
