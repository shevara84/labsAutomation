import { test } from "@fixtures/test";
import { productSearchData, invalidProductSearchData } from "@test-data/products";

test.describe('Product search tests', () => {
  for (const productData of productSearchData) {
    test(`Search and verify product details - ${productData.product}`, async ({
      productPage,
    }) => {
      await productPage.navigateTo('/shop.php');
      // Select the product category before searching
      await productPage.selectCategory(productData.category);
      // Search for the product within the selected category
      await productPage.searchProduct(productData.product);
      // Verify that the product is visible in the search results
      await productPage.verifyProductVisible(productData.product);
      // Open the product details page
      await productPage.openProduct(productData.product);
      // Verify the product details on the product page
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
