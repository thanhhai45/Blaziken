import React, { Component } from 'react';
import { Table } from 'antd';
import Http from './../../../utils/Http';
import _ from 'lodash';
const columns = [{
	title: 'Name',
	dataIndex: 'name',
	key: 'name',
  }, {
	title: 'Price',
	dataIndex: 'price',
	key: 'price',
  }, {
	title: 'Address',
	dataIndex: 'address',
	key: 'address',
  }];
export default class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state={
			dataSource: []
		}
	}
	render() {
		const { dataSource, check } = this.state;
		const buttonLayout = check === true ? <p>Welcom <button>Hello</button></p> : <p>Not no user</p>
		return (
			<Table style={{ marginTop: '20px' }}  dataSource={dataSource} columns={columns}/>
		)
	}

	componentDidMount() {
		const { dataSource } = this.state;
		Http.RequestAPI("GET", "https://guarded-citadel-40148.herokuapp.com/homes", {})
		.then(result => {
			result.data.data.map(data => {
				data["key"] = data.id;
				data["name"] = data.attributes["host-name"];
				data["price"] = data.attributes.price;
				data["address"] = data.attributes.address;
				dataSource.push(data);
			});
			this.setState({dataSource});
		})
		.catch(error => {
			console.log(error);
		})
	}
}
