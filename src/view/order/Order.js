import React from 'react';

import Cal from './calendar/Cal.js';
import OrderList from './orderList/OrderList';


class Order extends React.Component {

  constructor (props) {
    super(props)
  };

  render () {
    return (
      <div>
        <Cal></Cal>
        <OrderList></OrderList>
      </div>
    )
  }
}

export default Order;