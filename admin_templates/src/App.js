import React, { Component } from 'react';
import { Layout } from 'antd';
import { TopTemplates, BottomTemplates, MenuNavBar } from './components/layouts';
import routers from './routes/routers';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Author from './components/authorize';
const { Content, Sider } = Layout;
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    console.log("localStorage",localStorage.getItem("user"))
    const Routers = routers.map((route, index) =>
      <Route key={index} exact ={route.exact} path={route.path} component={route.component} />
    );

    const layout = localStorage.getItem("user") ?
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <MenuNavBar />
        </Sider>
        <Layout>
          <TopTemplates />

          <Content style={{ margin: '0 16px' }}>
            <Switch>
              {Routers}
            </Switch>
          </Content>
          <BottomTemplates />
        </Layout>
      </Layout>
      :  <Route path='/' children={(props) => {
        return <Author />
      }} />;
    return layout;

  }
 
}
export default App;
