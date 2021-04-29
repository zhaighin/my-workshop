import React, { FC, useState } from 'react';
import Login from './login/login';
import './App.css'
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Main from './main/main';
import Navbar from './navbar/navbar';
import TopNavbar from './header/header';

const { Header, Footer, Sider, Content } = Layout;

const App: FC = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Router>
      <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Navbar></Navbar>
        </Sider>
        <Layout className="app-wrapper">
          <Header>
            <TopNavbar></TopNavbar>
          </Header>
          <Content className="content-wrapper">
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Main />
              </Route>
            </Switch>
          </Content>
          <Footer>
            Footer
      </Footer>
        </Layout>
      </Layout>

    </Router>
  );

}

export default App;
