import { test } from '@fixtures/test';
import { productSearchData } from '@test-data/products';

test.describe('Cart tests', () => {
  test('Add product to cart and verify cart details', async ({ productPage, cartPage }) => {
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
  });
});