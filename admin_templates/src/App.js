import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Layout } from 'antd';
import { TopTemplates, BottomTemplates, MenuNavBar } from './components/layouts';
import routers from './routes/routers';
import { Switch, Route } from 'react-router-dom';
import Author from './components/authorize';
import { authorized } from './store/actions';
const { Content, Sider } = Layout;
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
			token: false,
		};
	}
	onCollapse = (collapsed) => {
		console.log(collapsed);
		this.setState({ collapsed });
	}

	onLoginSuccess = () => {
		this.setState({ token: true });
	}

	onLogoutSuccess = () => {
		this.setState({ token: false });
	}

	render() {
		const Routers = routers.map((route, index) =>
			<Route key={index} exact={route.exact} path={route.path} component={route.component} />
		);
		const layout = //this.state.token === true || localStorage.getItem("auth_token") ?
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
					<TopTemplates onLogoutSuccess={this.onLogoutSuccess} />

					<Content style={{ margin: '0 16px' }}>
						<Switch>
							{Routers}
						</Switch>
					</Content>
					<BottomTemplates />
				</Layout>
			</Layout>
			// : <Author onLoginSuccess={this.onLoginSuccess} />
		return layout;

	}
}
export default App;
