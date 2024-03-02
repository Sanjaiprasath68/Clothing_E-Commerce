import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../features/cart/cartSlice';
import PaymentForm from '../../components/payment-form/payment-form.component';
import TestCardTable from '../../components/test-card-table/TestCardTable';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './check-out.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
      {cartTotal === 0 ? null : (
        <>
          <TestCardTable />
          <PaymentForm />
        </>
      )}
    </CheckoutContainer>
  );
};

export default Checkout;
