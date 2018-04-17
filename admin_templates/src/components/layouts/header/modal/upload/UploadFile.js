import React, { Component } from 'react';
import { Upload, Avatar, message } from 'antd'
import './Upload-css.css';
import logo_upload from './../../../../../images/logo-upload.png'

function verifyFileType(file) {
  const fileType = file.type;
  if (fileType === 'image/jpeg' || fileType === 'image/png') {
    return true;
  } else {
    return false;
  }
}


function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

class UploadFile extends Component {
  state = {
    imageUrl: '',
    showUpload: false
  }
  beforeUpload = (file) => {
    const fileType = verifyFileType(file);
    const imgSize = file.size / 1024 / 1024 < 2;
    if (!fileType) {
      message.error('You can only upload JPG or PNG file!');
    }
    if (!imgSize) {
      message.error('Image must smaller than 2MB');
    }
    this.setState({
      showUpload: fileType && imgSize
    })
    return fileType && imgSize;
  }

  handleUploadFile = (info) => {
    console.log(info.file.status)
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
      }));
    }
  }

  render() {
    const { showUpload } = this.state;
    return (
      <Upload className="upload"
        name="uploadImage"
        showUploadList={showUpload}
        beforeUpload={this.beforeUpload}
        onChange={this.handleUploadFile}
        action="//jsonplaceholder.typicode.com/posts/"
      >
        <Avatar className="person" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar className="img-upload" src={logo_upload} />
      </Upload>
    );
  }
}

export default UploadFile;