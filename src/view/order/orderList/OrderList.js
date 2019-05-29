import React from 'react';
import './OrderList.scss';

import { Button } from 'antd';

class OrderList extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    let arr = [1, 2, 3, 4,3,4];
    return (
      <div>
        <div className="mg_t40 mg_b10">
          <span className="b mg_r20">当前订单</span>
          <Button type="primary">添加订单</Button>
        </div>
        <div className="or_list f_13 ">
          {
            arr.map((v, k) => {
              return (
                <div className={`or_item ${k === 0?"":"mg_l10"}`}>
                  <div className="or_title fcc f_14">
                    <span>订单号</span>
                    <span className="mg_l5">123456748562</span>
                  </div>
                  <div className="mg_t5">
                    <span className="or_item_t">生成日期：</span>
                    <span className="c_blue">1992.02.01</span>
                  </div>
                  <div className="mg_t5">
                    <span className="or_item_t">订购日期：</span>
                    <span className="c_blue">1992.02.01</span>
                  </div>
                  <div className="mg_t5">
                    <span className="or_item_t">光告位：</span>
                    <span className="c_blue">广告位1</span>
                  </div>
                  <div className="mg_t5">
                    <span className="or_item_t">计费方式：</span>
                    <span className="c_blue">包时段</span>
                  </div>
                  <div className="mg_t5">
                    <span className="or_item_t">预付金额：</span>
                    <span className="c_blue">30000.00元</span>
                  </div>
                  <div className="mg_t15">
                    <span className="or_item_t">点击量：</span>
                    <span className="c_blue">30次</span>
                  </div>
                  <div className="mg_t5">
                    <span className="or_item_t">展现量：</span>
                    <span className="c_blue">12万人次</span>
                  </div>
                  <div className="mg_t5">
                    <span className="or_item_t">展现人数：</span>
                    <span className="c_blue">4万人</span>
                  </div>
                  <div className="mg_t15">
                    <span className="or_item_t">剩余时间：</span>
                    <span className="c_blue">5天7小时</span>
                  </div>
                  <div className="mg_t5">
                    <span className="or_item_t">使用时间：</span>
                    <span className="c_blue">5天7小时</span>
                  </div>
                  <div className="mg_t5">
                    <span className="or_item_t">剩余金额：</span>
                    <span className="c_blue">30000.00元</span>
                  </div>
                  <div className="mg_t5">
                    <span className="or_item_t">使用金额：</span>
                    <span className="c_blue">30000.00元</span>
                  </div>
                </div>
              )
            })
          }

        </div>
      </div>
    )
  }
}

export default OrderList;

