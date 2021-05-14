import React, { FC, useState } from 'react';
import Login from './login/login';
import './App.css'
import { Button, Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { HomeOutlined } from '@ant-design/icons';
import Main from './main';
import TopNavbar from './header';
import Navbar from './navbar';
import ModifyItem from './modifyitem';

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
          <div className="logo">
            <Link to="/">
              <Button className="logo-btn" shape="round" icon={<HomeOutlined />} size="large" />
            </Link>
          </div>
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
              <Route path="/add-new-item">
                <ModifyItem />
              </Route>
              {/* This need to be last so that the route works properly */}
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
