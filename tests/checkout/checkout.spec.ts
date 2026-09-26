import { test } from '@fixtures/test';
import { productSearchData } from '@test-data/products';
import { checkoutData } from '@test-data/checkout';

test.describe('Checkout tests', () => {
  test('Complete checkout successfully', async ({ productPage, cartPage, checkoutPage }) => {
    const productData = productSearchData[0];

    await productPage.navigateTo('/shop.php');

    await productPage.selectCategory(productData.category);
    await productPage.searchProduct(productData.product);
    await productPage.openProduct(productData.product);

    await productPage.addProductToCart(productData.product);
    await productPage.openCart();

    await cartPage.verifyProduct(productData.product);
    await cartPage.verifyPrice(productData.price);
    await cartPage.verifyQuantity('1');
    await cartPage.verifyTotal(productData.price);

    await checkoutPage.proceedToCheckout();

    await checkoutPage.fillCheckoutForm(
      checkoutData.firstName,
      checkoutData.lastName,
      checkoutData.email,
      checkoutData.mobile,
      checkoutData.address,
      checkoutData.state,
      checkoutData.city,
      checkoutData.pinCode,
    );

    await checkoutPage.continue();
    await checkoutPage.placeOrder();

    await checkoutPage.verifyOrderSuccess();
  });
});