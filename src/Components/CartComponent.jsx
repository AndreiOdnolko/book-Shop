import React from 'react';
import { List, Button, Image  } from 'semantic-ui-react'

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

export default CartComponent;
