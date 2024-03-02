import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { ReactComponent as CEIcon } from '../../assets/ce_icon.svg';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../features/user/userSlice';
import { selectIsCartOpen } from '../../features/cart/cartSlice';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutHandler = async () => {
    await signOutUser();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to={'/'}>
          <CEIcon className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to={'/shop'}>SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutHandler}>
              SIGN-OUT
            </NavLink>
          ) : (
            <NavLink to={'/auth'}>SIGN-IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
      </NavigationContainer>
      {isCartOpen && <CartDropdown />}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
