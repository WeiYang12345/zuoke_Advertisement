import React from 'react';
import { NavLink } from 'react-router-dom';
import './Page.scss';
import Table from './table/Table';
import {
  Button,
  Form,
} from 'antd';

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  };

  render() {

    return (
      <div className="page">
        <div className="fsc">
          <div className="page_in f_13">
            <div className="mg_b10">贵州皮皮欢乐有限公司</div>
            <div className="mg_b5">
              <span className="page_l_t">注册时间：</span>
              <span className="c_blue">2019-04-01</span>
            </div>
            <div className="mg_b5">
              <span className="page_l_t">联系电话：</span>
              <span className="c_blue">400-8888-8888</span>
            </div>
            <div className="mg_b5">
              <span className="page_l_t">地址：</span>
              <span className="c_blue">贵州贵阳市第一大区人民路22号</span>
            </div>
            <div className="mg_t20">
              <Button size="small" type="link">待审核</Button>
              <Button size="small" type="primary">
                <NavLink to='/home/company'>修改公司信息</NavLink>
              </Button>
            </div>
          </div>

          <div className="page_r f_13">
            <div className="mg_b5 fbc">
              <div>
                <span>账户余额：</span>
                <span className="c_blue">10000</span>
              </div>
              <div>
                <Button size="small" type="primary" ghost>充值</Button>
                <Button className="mg_l10" size="small" type="primary">充值记录</Button>
              </div>
            </div>
            <div className="mg_b20 fbc">
              <div>
                <span>历史消费：</span>
                <span className="c_blue">10000</span>
              </div>
              <div>
                <span>订单总数：</span>
                <span className="c_blue">10000</span>
              </div>
            </div>
            <div className="mg_b5">
              <span>累计展现量：</span>
              <span className="c_blue">1231233/人次</span>
            </div>
            <div className="mg_b5">
              <span>累计展现人数：</span>
              <span className="c_blue">1231233/人次</span>
            </div>
            <div className="mg_b5">
              <span>累计点击量：</span>
              <span className="c_blue">1231233/人次</span>
            </div>
          </div>

        </div>
        <Table {...this.props}></Table>
      </div>


    )
  };

}


export default Page;