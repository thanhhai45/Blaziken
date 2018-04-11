import React, { Component } from 'react';
// import {  } from 'antd';
import { TableDataSource } from './../../../commons/Table';
import { EditIcon, DeleteIcon } from './../../../commons/Button';
import Http from './../../../utils/Http';
const columns = [{
	title: 'id',
	dataIndex: 'id',
	key: 'id',
	fixed: 'left'
}, {
	title: 'Price',
	dataIndex: 'price',
	key: 'price',
},
{ title: 'Column 1', dataIndex: 'price', key: '1' },
{ title: 'Column 2', dataIndex: 'price', key: '2' },
{ title: 'Column 3', dataIndex: 'price', key: '3' },
{
	title: 'Address',
	dataIndex: 'address',
	key: 'address',
},
{ title: 'Column 4', dataIndex: 'price', key: '4' },
{ title: 'Column 5', dataIndex: 'price', key: '5' },
{ title: 'Column 6', dataIndex: 'price', key: '6' },
{ title: 'Column 7', dataIndex: 'price', key: '7' },
{ title: 'Column 8', dataIndex: 'price', key: '8' },

{
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 100,
    render: () => <div>
					<EditIcon placement="top" title="Edit" style={{color: 'green', padding: '0 10px'}} />
					<DeleteIcon  placement="top" title="Delete" style={{color: 'red'}}/>
				</div>,
},
];
export default class ProductList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataSource: []
		}
	}
	render() {
		const { dataSource } = this.state;
		// console.log(columns.length);
		const scroll = columns.length*150;
		return (
			<TableDataSource 
				style={{ marginTop: '20px' }} 
				rowSelection={true}
				dataSource={dataSource} 
				columns={columns} 
				scroll={scroll}
				header_title="Product List"
				footer_title="Total" 
			/>
		)
	}

	componentDidMount() {
		const { dataSource } = this.state;
		Http.RequestAPI("GET", "https://guarded-citadel-40148.herokuapp.com/homes", {})
			.then(result => {
				result.data.data.map((data) => {
					data["key"] = data.id;
					data["id"] = data.id;
					data["price"] = data.attributes.price;
					data["address"] = data.attributes.address;
					dataSource.push(data);
				});
				this.setState({ dataSource });
			})
			.catch(error => {
				console.log(error);
			})
	}
}
