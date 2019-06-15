import React from 'react';
import { Calendar, Button, Icon, message } from 'antd';
import './Cal.scss';
import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zh-cn');

class Cal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  };
  // getListData(value) {
  //   let listData;
  //   switch (value.date()) {
  //     case 8:
  //       listData = [
  //         { type: 'warning', content: 'This is warning event.' },
  //         { type: 'success', content: 'This is usual event.' },
  //       ];
  //       break;
  //     case 10:
  //       listData = [
  //         { type: 'warning', content: 'This is warning event.' },
  //         { type: 'success', content: 'This is usual event.' },
  //         { type: 'error', content: 'This is error event.' },
  //       ];
  //       break;
  //     case 15:
  //       listData = [
  //         { type: 'warning', content: 'This is warning event' },
  //         { type: 'success', content: 'This is very long usual event。。....' },
  //         { type: 'error', content: 'This is error event 1.' },
  //         { type: 'error', content: 'This is error event 2.' },
  //         { type: 'error', content: 'This is error event 3.' },
  //         { type: 'error', content: 'This is error event 4.' },
  //       ];
  //       break;
  //     default:
  //   }
  //   return listData || [];
  // }
  dateCellRender = (value) => {
    // console.log(value._d.getMonth())
    // const listData = this.getListData(value);
    if (value._d.getDate() === 28) {
      return <div className="date_t mg_b15 f_12">有</div>
    } else if (value._d.getDate() === 29) {
      return <div className="date_t mg_b15 f_12">有</div>
    } else {
      return <div className="mg_b15 c_blue f_12">无</div>
    }

  }

  getMonthData = (value) => {

    // if (value.month() === 8) {
    //   return 1394;
    // }
  }

  monthCellRender = (value) => {
    console.log(value)
    const num = this.getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }
  aa = (currentDate: moment) => {
    // console.log(currentDate._d.getMonth()+1)
    // console.log(currentDate._d.getDate())
    // if(currentDate._d.getDate() == 1) {
    //   return true
    // }

  }
  _onScrollEvent = () => {
    // console.log(this._container)
    // if (this._container.scrollLeft + this._container.clientHeight === this._container.scrollHeight) {
    //             ///todo: do something
    //     }
  }
  componentDidMount() {


  }
  calScoll = (label) => { 
    let width = this.refs.a.scrollWidth;
    let left = this.refs.a.scrollLeft;
    let clientWidth = this.refs.a.clientWidth;
    console.log(width,left,clientWidth);
    console.log()
    if (label === 'right') {
      if (left + clientWidth > width-1) {
        message.warning('没有更多了');
        return;
      }
      this.refs.a.scrollTo(325 + left, 0)
    } else {
      if (left === 0) {
        message.warning('没有更多了');
        return;
      }
      this.refs.a.scrollTo(left - 325, 0)
    }
    
  }
  render() {
    return (
      <div className="calendar">
        <div className="f_14 mg_b10 b">广告位档期查询</div>
        <div className="cal">
          <Icon type="caret-left" theme="filled" onClick={() => this.calScoll('left')} className="cal_i_l f_26" />
          <Icon type="caret-right" theme="filled" onClick={() => this.calScoll('right')} className="cal_i_r f_26" />
          {/*<Icon type="smile" theme="twoTone" />*/}
          <div className="cal_list"  onScrollCapture={() => this._onScrollEvent()} ref='a'>
            <div className="cal_item">
              <div className="fcc mg_b5">广告一档期</div>
              <div style={{ backgroundColor: "#fff", width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar disabledDate={this.aa} fullscreen={false} dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
              </div>
              <div className="fec mg_t10">
                <Button type="primary" ghost>预览</Button>
                <Button className="mg_l20" type="primary">刷新</Button>
              </div>
            </div>
            <div className="cal_item mg_l5">
              <div className="fcc mg_b5">广告2档期</div>
              <div style={{ backgroundColor: "#fff", width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar disabledDate={this.aa} fullscreen={false} dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
              </div>
              <div className="fec mg_t10">
                <Button type="primary" ghost>预览</Button>
                <Button className="mg_l20" type="primary">刷新</Button>
              </div>
            </div>
            <div className="cal_item mg_l5">
              <div className="fcc mg_b5">广告3档期</div>
              <div style={{ backgroundColor: "#fff", width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar disabledDate={this.aa} fullscreen={false} dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
              </div>
              <div className="fec mg_t10">
                <Button type="primary" ghost>预览</Button>
                <Button className="mg_l20" type="primary">刷新</Button>
              </div>
            </div>
            <div className="cal_item mg_l5">
              <div className="fcc mg_b5">广告4档期</div>
              <div style={{ backgroundColor: "#fff", width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
                <Calendar disabledDate={this.aa} fullscreen={false} dateCellRender={this.dateCellRender} monthCellRender={this.monthCellRender} />
              </div>
              <div className="fec mg_t10">
                <Button type="primary" ghost>预览</Button>
                <Button className="mg_l20" type="primary">刷新</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Cal;