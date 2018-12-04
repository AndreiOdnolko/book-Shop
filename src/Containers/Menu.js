import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as cartActions from '../actions/cart';
import Menu from '../Components/Menu';
import uniqBy from 'lodash/uniqBy';


const mapStateToProps = ({ cart }) => ({
   totalPrice: cart.items.reduce((total, book) => total + book.price, 0),
   count: cart.items.length,
   items: uniqBy(cart.items, elem => elem.id)
})
 
const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(cartActions, dispatch)
})
 
 
 export default connect(mapStateToProps, mapDispatchToProps)(Menu);