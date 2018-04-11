import React, { Component } from 'react'
import { Button } from 'antd';
class DeleteButton extends Component {
    render() {
        const { title, type } = this.props;
        return (
            <Button type={type}>
                {title}
            </Button>
        )
    }
}
export default DeleteButton;