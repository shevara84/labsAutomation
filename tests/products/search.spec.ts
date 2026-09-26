import { test } from "@fixtures/test";
import { productSearchData, invalidProductSearchData } from "@test-data/products";

test.describe('Product search tests', () => {
  for (const productData of productSearchData) {
    test(`Search and verify product details - ${productData.product}`, async ({
      productPage,
    }) => {
      await productPage.navigateTo('/shop.php');

      await productPage.selectCategory(productData.category);
      await productPage.searchProduct(productData.product);
      await productPage.verifyProductVisible(productData.product);

      await productPage.openProduct(productData.product);
      await productPage.verifyProductDetails(
        productData.product,
        productData.price,
      );

      await productPage.goBackToProducts();
    });
  }

  test('Search non-existing product', async ({ productPage }) => {
    await productPage.navigateTo('/shop.php');

    await productPage.selectCategory(invalidProductSearchData.category);
    await productPage.searchProduct(invalidProductSearchData.product);
    await productPage.verifyNoProductsFound();
  });
});
