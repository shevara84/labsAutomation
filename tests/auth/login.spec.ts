import { test, expect } from "@fixtures/test";
import { validUsers, invalidLoginData } from "@test-data/login";

test.describe("Login tests", () => {
  test("Valid login", async ({ loginPage }) => {
    //navigate to the home page
    await loginPage.navigateTo("/");
    // Login with valid credentials for customer
    await loginPage.login(validUsers[0].email, validUsers[0].password);
    // Add assertions to verify successful login
    await loginPage.verifyUrl("/shop.php");
  });
  for (const invalidData of invalidLoginData) {
    test(`Invalid login - ${invalidData.scenario}`, async ({ loginPage }) => {
      //navigate to the home page
      await loginPage.navigateTo("/");
      // Add your login steps here with invalid credentials
      await loginPage.login(invalidData.email, invalidData.password);
      // Add assertions to verify error message
      await expect(loginPage.loginErrorMsg).toHaveText(
        invalidData.errorMessage,
      );
    });
  }
});
