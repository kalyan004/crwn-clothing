import React from 'react';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { connect } from 'react-redux';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { createStructuredSelector } from 'reselect';
import { CartIconContainer,ItemCountSpan,ShoppingIconContainer} from './cart-icon.styles';
const CartIcon = ({toggleCartHidden,itemCount}) => (
    <CartIconContainer onClick = {toggleCartHidden}>
        <ShoppingIconContainer/>
        <ItemCountSpan>{itemCount}</ItemCountSpan>
    </CartIconContainer>

);

const mapDispatchToProps = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
});

const mapStateToProps =  createStructuredSelector({
    itemCount :selectCartItemsCount
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartIcon);