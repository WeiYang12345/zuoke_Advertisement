import React from 'react';
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import './Home.scss';
import Page from '../page/Page';
import Order from '../order/Order';
import Company from '../company/Company';
import AddOrder from '../addOrder/AddOrder';
import {  addTodoWithDispatch,changeObj } from '../../store1/action.js';
const { Header, Sider, Content } = Layout;


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      list: [
        { name: '首页', icon: 'home', path: '/home', },
        { name: '订单', icon: 'video-camera', path: '/home/order', },
      ],
      breadList: { icon: 'home', name: '首页' },
    }
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  addMenu = (v) => {
    this.props.addCount(null)
    this.setState({
      breadList: { icon: v.icon, name: v.name }
    })
  };
  componentWillMount() {
    this.init()
  };
  
  init = () => {

    this.props.history.listen((route) => {
      console.log(route)
      let { pathname } = route;
      if( pathname === '/home' ) {
        this.props.addCount(null)
      }else if(pathname === '/home/order') {
        this.props.addCount(null)
      }
    })
    let { pathname } = this.props.location;
    if( pathname === '/home' ) {
        this.setState({ breadList: { icon: 'home', name: '首页' } })
      }else if(pathname === '/home/order') {
        this.setState({ breadList: { icon: 'video-camera', name: '订单' }})
      }
    

  }
  addSon = () => {

  }
  render() {
    let { count } = this.props.state
    let { breadList, list } = this.state;
    return (
      <div className="home">
        <Router>
          <Layout className="home_layout">
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />

              <Menu theme="dark" mode="inline" defaultSelectedKeys={[breadList.name]}>
                {
                  list.map((v, k) => {
                    return (
                      <Menu.Item key={v.name} onClick={() => { this.addMenu(v) }}>
                        <Link to={{ pathname: v.path, query: { addson: this.addSon } }}> 
                          <Icon type={v.icon} />
                          <span>{v.name}</span>
                        </Link>
                      </Menu.Item>
                    )
                  })
                }

              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
                <div className="in_b">
                  <Breadcrumb>
                    <Breadcrumb.Item href="">
                      <Icon type={breadList.icon} />
                      <span>{breadList.name}</span>
                    </Breadcrumb.Item>
                    {
                      count && (
                        <Breadcrumb.Item href="">
                          <span>{count}</span>
                        </Breadcrumb.Item>
                      )
                    }

                  </Breadcrumb>
                </div>

              </Header>
              <Content
                style={{
                  overflow: 'auto',
                  margin: '24px 30px 24px 24px',
                  padding: 24,
                  background: '#fff',
                  minHeight: 280,
                }}
              >
                <div style={{ minWidth: '1000px' }}>
                  <Switch>
                    <Route exact strict path="/home" component={Page} item='2222'></Route>
                    <Route strict path="/home/order" component={Order}></Route>
                    <Route strict path="/home/company" component={Company}></Route>
                    <Route strict path="/home/add" component={AddOrder}></Route>
                  </Switch>
                </div>
              </Content>
            </Layout>
          </Layout>
        </Router>

      </div>
    )
  }

}

const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  // console.log(ownProps)
  return {
    state: state.reducer
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addCount: (obj) => dispatch(addTodoWithDispatch(obj)),
    bbb: (obj) => dispatch(changeObj(obj)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)