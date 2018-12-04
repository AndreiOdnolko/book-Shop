import React from 'react'
import { Menu, Input, Icon } from 'semantic-ui-react'

const Filter = ({ setFilter, filterBy, searchQuery, setSearchQuery }) => {

  return (
    
    <Menu inverted color="yellow">
      <Menu.Item id='filter'              
      ><Icon name='filter'/>
      Filters:</Menu.Item>
      <Menu.Item
        active={filterBy === 'all'}
        onClick={setFilter.bind(this, 'all')}
      >All</Menu.Item>
      <Menu.Item
        active={filterBy === 'rating'}
        onClick={setFilter.bind(this, 'rating')}
      >Rating</Menu.Item>
      <Menu.Item
        active={filterBy === 'price_expensive'}
        onClick={setFilter.bind(this, 'price_expensive')}
      >Price (expensive)</Menu.Item>
      <Menu.Item
        active={filterBy === 'price_inexpensive'}
        onClick={setFilter.bind(this, 'price_inexpensive')}
      >Price (inexpensive)</Menu.Item>
      <Menu.Item
        active={filterBy === 'author'}
        onClick={setFilter.bind(this, 'author')}
      >Author</Menu.Item>
      <Menu.Menu position='right'>
        <Input 
          onChange={e => setSearchQuery(e.target.value)} 
          value={searchQuery} 
          icon="search" 
          placeholder='Search...' />
      </Menu.Menu >      
    </Menu>
  )
}
export default Filter