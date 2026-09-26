import { test } from '@fixtures/test';
import { productFilterData } from '@test-data/products';

test.describe('Product filter tests', () => {
  for (const filterData of productFilterData) {
    test(`Filter products by size - ${filterData.category}`, async ({ productPage }) => {
      await productPage.navigateTo(filterData.url);

      await productPage.selectSize(filterData.size);
      await productPage.verifySizeFilterChecked(filterData.size);
      await productPage.verifyProductsBySize(filterData.expectedSize);

      await productPage.clearSize(filterData.size);
      await productPage.verifySizeFilterUnchecked(filterData.size);
    });
  }
});