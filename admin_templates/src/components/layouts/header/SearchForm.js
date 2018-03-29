import React, { Component } from 'react'
import { Input } from 'antd';
const Search = Input.Search;

class SearchForm extends Component {
    render() {
        return (
            <Search
                placeholder="Search"
                onSearch={value => console.log(value)}
                style={{ width: '50%' }}
            />
        )
    }
}
export default SearchForm;
