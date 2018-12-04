import React from 'react';
import { Menu, List, Button, Image, Popup, Icon } from 'semantic-ui-react'

const CartComponent = ({ title, id, image, removeToCart }) => (
  <List selection divided verticalAlign='middle'>
    <List.Item>
      <List.Content floated='right'>
        <Button onClick={removeToCart.bind(this, id)} color='red' size="mini">X</Button>
      </List.Content>
      <Image avatar src={image} />
      <List.Content><strong>{title}</strong></List.Content>
    </List.Item>
  </List>
);

const MenuComponent = ({ totalPrice, count, items }) => (
  <Menu>
    <Menu.Item name='browse' id="wrapper-logo">
      <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdU4NAqn-SYQhWSNIy5E9trgNGKVpqn_zikkQukx5ejjOv_wgs' className="logo"  />
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
        content={items.map(book => <CartComponent { ...book } />)}
        on="click"
        hideOnScroll
      />
    </Menu.Menu>
  </Menu>
)
export default MenuComponent;
