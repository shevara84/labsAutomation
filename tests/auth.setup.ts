import { test as setup } from "../fixtures/test";

setup("authenticate", async ({ loginPage }) => {
  await loginPage.navigateTo("/");
  await loginPage.login(
    process.env.CUSTOMER_EMAIL!,
    process.env.CUSTOMER_PASSWORD!,
  );

  await loginPage.page.context().storageState({
    path: ".auth/user.json",
  });
});
