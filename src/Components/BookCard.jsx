import React from 'react';

import { Card, Image, Icon, Button, Rating } from 'semantic-ui-react'

const BookCard = (book) => {
  const { title, author, price, rating, image, addToCart, addedCount} = book;
  return (
    <Card fluid={true}>
     <Image src={image} />
     <Card.Content>
       <Card.Header>{title}</Card.Header>
       <Card.Meta>
         <span className='date'>{author}</span>
       </Card.Meta>
     </Card.Content>
     <Card.Content extra>
       <i>
         <Icon name='rub' />
         {price}
       </i>
     </Card.Content>
     <Card.Content extra>
      <Button floated="left" onClick={addToCart.bind(this, book)} inverted color='green' >Add in cart</Button>      
      <Button floated="right" color="yellow" disabled='true' y>{`${addedCount}`}</Button> 
     </Card.Content>
     <Card.Content extra>
      Raiting:<Rating icon='star' rating={rating} maxRating={5} size='small' /> {`${rating}/5`}
     </Card.Content>
   </Card>
  )
}  

export default BookCard