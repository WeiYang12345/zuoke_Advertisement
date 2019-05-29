import React from 'react';
import './Company.scss';
import { Button, Input, Cascader, Icon } from 'antd';
import { get } from '../../request/request';
import Upload from './upload/Upload';
const { TextArea } = Input;

class Company extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressList: [],  // 省市区
      
    }
  };
     
  address = () => {
    let url = 'https://restapi.amap.com/v3/config/district';
    let data = {
      keywords: '中国',
      subdistrict: 3,
      key: '345c945123bfc12e01f76a528a9c1fc5',
      extensions: 'base'
    }
    get(url, data).then(res => {
      if (res.data.infocode === '10000') {
        this.setState({
          addressList: res.data.districts[0].districts
        })
      }
    }).catch(err => {
      console.log(err)
    })
  };
  componentDidMount() {
    this.address();


  };
  onChange = (value) => {
    console.log(value)
  };
  render() {
    const { addressList } = this.state;

    return (
      <div className="company">
        <div className='com_list f_14'>
          <div className="fbc">
            <span className="com_title">账号名：</span>
            <span className="c_blue fgrow3">ddddsssss</span>
            <span className="c_green">已审核</span>
          </div>
          <div className="fbc mg_t20">
            <span className="com_title">帐号密码：</span>
            <span className="c_blue fgrow3">ddddsssss</span>
            <Button size="small" type="primary">修改密码</Button>
          </div>
          <div className="fsc mg_t50 nowrap">
            <span className="com_title">请输入公司名：</span>
            <Input />
          </div>
          <div className="fsc mg_t30 nowrap">
            <span className="com_title">请输入联系电话：</span>
            <Input />
          </div>
          <div className="fss mg_t30">
            <span className="com_title nowrap">请完善公司地址：</span>
            <div className="fgrow3">
              <Cascader
                className="com_cas"
                fieldNames={{ label: 'name', value: 'name', children: 'districts' }}
                options={addressList}
                placeholder="请选择所在城市"
                onChange={this.onChange}
              />
              <div className="mg_t10">
                <TextArea className="w100" placeholder="详细地址" autosize={{ minRows: 2, maxRows: 6 }}/>
              </div>
            </div>
          </div>

          <div className="fsc mg_t30">
            <span className="com_title">上传营业执照：</span>
            <Upload></Upload>
          </div>
          <div className="fsc mg_t30">
            <span className="com_title">上传阻止机构代码证：</span>
            <Upload></Upload>
          </div>
          <div className="com_button mg_t30">
             <Button type="primary" ghost>取消</Button>            
             <Button className="mg_l20" type="primary">保存</Button>            
          </div>
          
        </div>
      </div>
    )
  }
}
export default Company;