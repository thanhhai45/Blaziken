import React, { Component } from 'react'
import { Icon, Tooltip } from 'antd';
class EditIcon extends Component {
    render() {
        const { placement, title, style } = this.props
        return (
            <Tooltip placement={placement} title={title}>
                <Icon type="edit" style={style} />
            </Tooltip>
        )
    }
}
export default EditIcon;
