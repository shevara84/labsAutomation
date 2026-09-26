export interface ProductSearchData {
  category: string;
  product: string;
  price: string;
}

export const productSearchData: ProductSearchData[] = [
  {
    category: 'Shop Women Fashion',
    product: 'White T-Shirt',
    price: '$500',
  },
  {
    category: 'Shop Men Fashion',
    product: 'Black T-Shirt',
    price: '$150',
  },
  {
    category: 'Kids Fashion',
    product: 'Pink Shoes',
    price: '$250',
  },
  {
    category: 'Electronics',
    product: 'Samsung Mobile',
    price: '$150',
  },
];

export interface InvalidProductSearchData {
  category: string;
  product: string;
}

export const invalidProductSearchData: InvalidProductSearchData = {
  category: 'Shop Women Fashion',
  product: 'Jacket',
};

export interface ProductFilterData {
  category: string;
  url: string;
  size: string;
  expectedSize: string;
}

export const productFilterData: ProductFilterData[] = [
  {
    category: 'Women Fashion',
    url: '/womens-wear.php',
    size: 's',
    expectedSize: 'S',
  },
  {
    category: 'Men Fashion',
    url: '/mens-wear.php',
    size: 's',
    expectedSize: 'S',
  },
  {
    category: 'Kids Fashion',
    url: '/kids-wear.php',
    size: 's',
    expectedSize: 'S',
  },
  // {
  //   category: 'Electronics',
  //   url: '/electronics.php',
  //   size: 's',
  //   expectedSize: 'S',
  // },
];