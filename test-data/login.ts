export interface ValidUser {
    role: 'customer' | 'admin';
    email: string;
    password: string;
}

export const validUsers: ValidUser[] = [
    {
        role: 'customer',
        email: process.env.CUSTOMER_EMAIL!,
        password: process.env.CUSTOMER_PASSWORD!,
    },

    // Add admin user when an admin account is available.
    // {
    //   role: 'admin',
    //   email: process.env.ADMIN_EMAIL!,
    //   password: process.env.ADMIN_PASSWORD!,
    // },
];

export interface InvalidLoginData {
    scenario: string;
    email: string;
    password: string;
    errorMessage: string;
}

export const invalidLoginData: InvalidLoginData[] = [
    {
        scenario: 'Invalid email',
        email: 'peraperic@gmail.com',
        password: process.env.CUSTOMER_PASSWORD!,
        errorMessage: 'Invalid email or password!',
    },
    {
        scenario: 'Invalid password',
        email: process.env.CUSTOMER_EMAIL!,
        password: 'wrongPassword',
        errorMessage: 'Invalid email or password!',
    },
];