import React from 'react';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { connect } from 'react-redux';
import {auth} from '../../firebase/firebase.utils';
import { HeaderContainer,LogoContainer,OptionsContainer,OptionsLink} from './header.styles';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurrentUser } from '../../redux/user/user.selector';
const Header = ({currentUser,hidden})=> (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className = 'logo'/>
      </LogoContainer>
      <OptionsContainer>
          <OptionsLink to='/shop'>
              SHOP
          </OptionsLink>
          <OptionsLink to = '/shop'>
              CONTACT
          </OptionsLink>
          {
            currentUser ? (
            <OptionsLink as='div' onClick ={() => auth.signOut()}>
              SIGN OUT
            </OptionsLink>
            )
            :(
            <OptionsLink  to ='/signin'>SIGN IN</OptionsLink>
            )
          }
          <CartIcon />
      </OptionsContainer>
      {
        hidden ? null : <CartDropDown  />
      }
     
    </HeaderContainer>
);

const mapStateToProps = (state)=> createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})
export default connect(mapStateToProps)(Header);