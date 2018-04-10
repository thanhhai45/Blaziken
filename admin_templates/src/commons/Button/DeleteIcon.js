import React, { Component } from 'react'
import { Icon, Tooltip } from 'antd';
class DeleteIcon extends Component {
    render() {
        const { placement, title, style } = this.props
        return (
            <Tooltip placement={placement} title={title}>
                <Icon type="delete" style={style} />
            </Tooltip>
        )
    }
}
export default DeleteIcon;
