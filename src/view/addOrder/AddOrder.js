import React from 'react';
import './AddOrder.scss';

import { Select, DatePicker, Upload, Icon, Modal,Input,Button } from 'antd';
const Option = Select.Option
const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class AddOrder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       previewVisible: false,
    previewImage: '',
    fileList: [
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ],
    }
  };
  handleCancel = () => this.setState({ previewVisible: false });  //关闭弹窗

  handlePreview = async file => {              //点击文件链接或预览图标时的回调
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  handleChange = ({ fileList }) => {   //上传文件改变时的状态，
    console.log(222)
    console.log(fileList)
    this.setState({ fileList });   
  } 

  handleChange1 = (value) => {  // 选择广告位置
    console.log(`selected ${value}`);
  }
  onChange = (date, dateString) => {  //选择时间
    console.log(date, dateString);
  }
  
  render() {
     const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <Icon type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <div className="f_14">
        <div>
          <span className="add_t">选择广告位：</span>
          <Select defaultValue="lucy" style={{ width: 200 }} onChange={this.handleChange}>
            <Option value="jack">Jack</Option>
          </Select>
          <Button className="mg_l10" type="primary">查看广告位</Button>
        </div>
        <div className="mg_t40">
          <span className="add_t">选择时间段：</span>
          <RangePicker onChange={this.onChange} />
          <Button className="mg_l10" type="primary">核查日期有效性</Button>
        </div>
        <div className="mg_t40 fsc">
          <div className="add_t">
            <span >请上传广告封面：</span>
            <br/>
            <span className="f_12 c_blue">尺寸1333*2222</span>
          </div>
          
          <div className="clearfix">
            <Upload
              action="/index/tool/upLoadToOss/"
              listType="picture-card"
              fileList={fileList}
              onPreview={this.handlePreview}
              onChange={this.handleChange}
            >
              {fileList.length >= 3 ? null : uploadButton}
            </Upload>
            <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
              <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>
          </div>
        </div>
        <div className="mg_t40">
          <span className="add_t">请设置链接地址：</span>
          <Input className="addInput"/>
        </div>  
        <div className="add_button mg_t40">
          <Button type="primary" ghost>取消订单</Button>
          <Button type="primary mg_l30">生成订单</Button>
        </div>
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

export default AddOrder;