import React from 'react';
import { HashRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import './Home.scss';
import Page from '../page/Page';
import Order from '../order/Order';
import Company from '../company/Company';
const { Header, Sider, Content } = Layout;


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    }
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    console.log(this.props)
    return (
      <div className="home">
        <Router>
          <Layout className="home_layout">
            <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
              <div className="logo" />
              <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <NavLink to="/home">
                    <Icon type="user" />
                    <span>首页</span>
                  </NavLink>
                  
                </Menu.Item>
                <Menu.Item key="2">
                  <NavLink to="/home/order">
                    <Icon type="video-camera" />
                    <span>订单</span>
                  </NavLink>
                </Menu.Item>
            
              </Menu>
            </Sider>
            <Layout>
              <Header style={{ background: '#fff', padding: 0 }}>
                <Icon
                  className="trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}
                />
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
                <div style={{ minWidth: '1000px'}}>
                  <Switch>
                    <Route exact path="/home" component={Page}></Route>
                    <Route path="/home/order" component={Order}></Route>
                    <Route path="/home/company" component={Company}></Route>
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

export default App;