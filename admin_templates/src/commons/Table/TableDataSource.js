import React, { Component } from 'react';
import { Table } from 'antd';
import { AddButton, DeleteButton } from './../Button';
class TableDataSource extends Component {
    render() {
        const { rowSelection, dataSource, columns,  scroll, header_title, footer_title} = this.props;
        const rowSelections = {
            onChange: (selectedRowKeys, selectedRows) => {
              console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
              console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
              console.log(selected, selectedRows, changeRows);
            },
        };
        return (
            <Table 
                bordered 
                rowSelection={rowSelection ? rowSelections : ''}
                dataSource={dataSource} 
                columns={columns} 
                scroll={{ x: scroll }} 
                title=  { () => header_title 
                                ? <div>
                                    <p>{header_title.toUpperCase()}</p>
                                    <AddButton title="Add Product" type="primary"/>
                                    </div> 
                                : ''
                        } 
                footer= {   () => footer_title 
                                ? (rowSelection) 
                                    ? <div>
                                        <p style={{paddingRight: "10px"}}>{footer_title.toUpperCase()}</p>
                                        <DeleteButton title="Delete All" type="danger"/>
                                      </div> 
                                    : footer_title.toUpperCase() 
                                : ''
                        } 
            />
        )
    }
}
export default TableDataSource;
