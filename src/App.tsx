import React, { FC } from 'react';
import Login from './component/Login/Login';
import './App.css'
import { Layout } from 'antd';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Main from './component/Main';
import TopNavbar from './component/Header';
import ModifyItem from './component/AddNewItem';

const { Header, Content } = Layout;

const App: FC = () => {
  return (
    <Router>
      <Layout className="app-wrapper">
        <Header>
          <TopNavbar></TopNavbar>
        </Header>
        <Layout >

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
        </Layout>
      </Layout>

    </Router>
  );

}

export default App;
