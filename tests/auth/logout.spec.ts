import { test, expect } from "@fixtures/test";
import { validUsers } from "@test-data/login";

test.describe("Logout tests", () => {
  test("Successful logout", async ({ loginPage }) => {
    //navigate to the home page
    await loginPage.navigateTo("/");
    // Login with valid credentials for customer
    await loginPage.login(validUsers[0].email, validUsers[0].password);
    // Perform logout action
    await loginPage.logout();
    // Add assertions to verify successful logout
    await expect(loginPage.logOutButton).not.toBeVisible();
    await loginPage.verifyUrl("/index.php");
  });
});
