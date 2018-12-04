import React from 'react';
import { Menu, Button, Image, Popup, Icon } from 'semantic-ui-react'
import logo from '../image/icon.png'
import CartComponent from './CartComponent';

const MenuComponent = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item name='browse' id="wrapper-logo">
      <Image src={logo} className="logo" />
      book Store
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item name='signup'>
        Price: &nbsp; <b>{totalPrice}</b> &nbsp;
      </Menu.Item>
      <Popup
        trigger={
          <Button animated='vertical' color="green">
            <Button.Content hidden>Books: &nbsp; <b>{count}</b> &nbsp;</Button.Content>
            <Button.Content visible>
              <Icon name='shop' />
            </Button.Content>
          </Button>
        }
        wide="very"
        content={items.map((book, i) => <CartComponent {...book} key={i} />)}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
)
export default MenuComponent;
