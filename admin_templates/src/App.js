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
            authentication: false,
        };
    }
    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    componentWillMount() {
        if (localStorage.getItem("user") != null) {
            this.setState({
                authentication: true
            })
        }
    }
    render() {
        console.log(this.state)
        const PrivateRouter = ({ component: Component, ...rest }) => (
            console.log(Component) 
            // <Route
            //     {...rest}
            //     render={props => {
            //         return
            //         this.state.authentication == true ? (
            //             <Component {...props} />
            //         ) : (
            //                 <Redirect
            //                     to={{
            //                         pathname: "/author",
            //                         state: { from: props.location }
            //                     }}
            //                 />
            //             )
            //     }
            //     }

            // />
        );
        const Routers = routers.map((route, index) =>
            this.state.authentication===true?
            <Route key={index} exact path={route.path} component={route.component} />
            :
            <PrivateRouter key={index} exact path={route.path} component={route.component} />

        );

        //if (this.state.authentication) {
        //  return (
        const layout = this.state.authentication ?
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
            : <Route exact path="/author" component={Author} />
            return layout;
        //  );
        // } else {
        //     if (window.location.pathname != "/author") {
        //         console.log("!=author")
        //     }
        //     return (<Route exact path="/author" component={Author} />)
        // }

    }
}
export default App;
