import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card } from 'semantic-ui-react';
import Menu from '../Containers/Menu';
import BookCard from '../Containers/BookCard';
import Filter from '../Containers/filter';


class App extends Component {
  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({ data }) => {
      setBooks(data)
    })
  }
  
  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
        <Menu />
        <Filter />
        <Card.Group itemsPerRow={5}>
          {!isReady ? "Загрузка..." : 
          books.map((book, index) =>  <BookCard { ...book } key = { index } /> )}
        </Card.Group>
      </Container>      
    );
  }
} 

export default App;
