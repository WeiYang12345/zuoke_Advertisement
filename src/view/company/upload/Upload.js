import React from 'react';
import { Upload, Icon, Modal } from 'antd';

export default class Uploads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      previewVisible: false,   // 预览图片弹窗
      previewImage: '',  // 弹窗图片地址
      fileList: [],   //已经上传的文件列表
    } 
  };
  handleCancel = () => this.setState({ previewVisible: false });   //关闭预览图片弹窗

  onPreview = async file => {         //点击文件链接或预览图标时的回调

    if (!file.url && !file.preview) {

      console.log(!file.url,!file.preview)
      file.preview = await getBase64(file.originFileObj);
    }
    console.log(file.preview)

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  onChange = ({ fileList }) => {    //上传文件改变时的状态，
    console.log('onChange',fileList)
    this.setState({ fileList })
  };
  render() {
    const {addressList, previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="clearfix fgrow3">
        <Upload
          action="http://api.zuokexiangchun.com/index/tool/upLoadToOss/"
          listType="picture-card"
          fileList={fileList}
          onPreview={this.onPreview}
          onChange={this.onChange}
        >
          {fileList.length >= 3 ? null : uploadButton}
        </Upload>
        <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
          <img alt="example" style={{ width: '100%' }} src={previewImage} />
        </Modal>
      </div>
    )
  }
}

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}
