import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { TopTemplates, BottomTemplates, MenuNavBar } from './components/layouts';
import routers from './routes/routers';
import Http from './utils/Http';
import { Switch, Route, Link } from 'react-router-dom';
const { Content, Sider, Header } = Layout;
const SubMenu = Menu.SubMenu;
class App extends Component {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }
    render() {
        const Routers = routers.map((route, index) => 
            <Route key={index} exact path={route.path} component={route.component}/>
        );
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" />
                    <MenuNavBar/>
                </Sider>
                <Layout>
                    <TopTemplates />

                    <Content style={{ margin: '0 16px' }}>
                    <Switch>
                        { Routers }
                    </Switch>  
                    </Content>
                    <BottomTemplates/>
                </Layout>
            </Layout>
        );
    }
}
export default App;
