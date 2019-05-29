import React from 'react';
import './Table.scss';
import { NavLink } from 'react-router-dom';
import { Input, DatePicker, Select, Button, Table, Divider, Tag } from 'antd';
const Option = Select.Option;
const { RangePicker } = DatePicker;

class PageTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        { title: '订单号', dataIndex: 'name', key: 'name', width:'50px'},
        { title: '生成时间', dataIndex: 'age', key: 'age',align:'center', width:'100px', },
        { title: '预付金额', dataIndex: 'address', key: 'adsdress', align:'center', width:'150px' },
        { title: '预定时间', dataIndex: 'address', key: 'addrefss', align:'center', width:'150px'},
        { title: '广告位名', dataIndex: 'address', key: 'adddress', align:'center', width:'150px' },
        { title: '收费模版名', dataIndex: 'address', key: 'addre23ss', align:'center', width:'150px',render: (text, record) => ( <span>{text}</span>)},
        { title: '消费金额', dataIndex: 'address', key: 'addrerss', align:'center', width:'150px'},
        { title: '关闭时间', dataIndex: 'address', key: 'addretss', align:'center',  width:'150px'},
        { title: '有效时间', dataIndex: 'address', key: 'addyress', align:'center', width:'150px'},
        { title: '退还金额', dataIndex: 'address', key: 'addriess', align:'center',  width:'150px'},
        { title: '订单状态', dataIndex: 'address', key: 'adduress',  align:'center',  width:'150px'},
        { title: '展现量', dataIndex: 'address', key: 'address',  align:'center',  width:'150px'},
        { title: '点击量', dataIndex: 'address', key: 'addroess', align:'center', width:'150px' },
        { title: '展现人数', dataIndex: 'address', key: 'addremss', align:'center', width:'150px'},
      
      ],
      data: [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ]
    }
  };
  handleChange(value) {
    console.log(`selected ${value}`);
  };
  componentDidMount () {
    
  }
  render() {
    let { columns, data } = this.state;
    return (
      <div className="PageTable">
        <div className="fec mg_t40">
          <Button type="primary" ghost><NavLink to="/home/order">当前订单</NavLink></Button>
          <div className="fgrow3 mg_l30"><span>当前正在进行的订单：</span><span>2个</span></div>
          <div>历史订单</div>
        </div>

        <div className="mg_t50 mg_b50 fec">
          <Input className="pt_input" placeholder="订单ID" />
          <Input className="pt_input" placeholder="广告位名" />
          <div className="nowrap">
            <span >创建时间：</span>
            <RangePicker className="pt_time" />
          </div>
          <div className="pt_select mg_l20">
            <Select className="pt_select" defaultValue="lucy" onChange={this.handleChange}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
          </div>
          <div className="mg_l20">
            <Button type="primary" className="" ghost>清空</Button>
            <Button type="primary" className="mg_l20">搜索</Button>
          </div>

        </div>

        <Table columns={columns}  scroll={{ x: '200%', }} dataSource={data} />

      </div>
    )
  }
}

export default PageTable;