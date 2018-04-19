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
    uploadStatus: false,
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
    return fileType && imgSize;
  }

  handleUploadFile = (fileUpload) => {
    var fileList = fileUpload.fileList.slice(-1);
    if (fileUpload.file.status === 'done') {
      getBase64(fileUpload.file.originFileObj, imageUrl => this.setState({
        imageUrl,
      }));
      this.props.uploadSuccess();
    } else {
      this.props.uploadError();
    }
    this.setState({
      fileList
    })
  }

  render() {
    const { fileList, previewImage, imageUrl, uploadStatus } = this.state;
    const { disabled } = this.props;
    return (
      <Upload className={!disabled ? "upload" : ''}
        name="uploadImage"
        onPreview={this.handlePreview}
        beforeUpload={this.beforeUpload}
        onChange={this.handleUploadFile}
        fileList={fileList}
        action="//jsonplaceholder.typicode.com/posts/"
        disabled={disabled}
      >
        <Avatar className="person" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar className="img-upload" src={logo_upload} />
      </Upload>
    );
  }
}

export default UploadFile;