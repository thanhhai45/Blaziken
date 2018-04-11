import React, { Component } from 'react'
import { Button } from 'antd';
class AddButton extends Component {
    render() {
        const { title, type } = this.props;
        return (
            <Button type={type}>
                {title}
            </Button>
        )
    }
}
export default AddButton;