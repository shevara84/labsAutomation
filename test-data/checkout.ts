export interface CheckoutData {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  address: string;
  state: string;
  city: string;
  pinCode: string;
}

export const checkoutData: CheckoutData = {
  firstName: 'Pera',
  lastName: 'Peric',
  email: process.env.CUSTOMER_EMAIL!,
  mobile: '0601234567',
  address: 'Main Street 10',
  state: 'Vojvodina',
  city: 'Subotica',
  pinCode: '24000',
};