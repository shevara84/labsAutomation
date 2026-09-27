# Playwright Automation Project

E2E test automation project built with Playwright and TypeScript against a demo e-commerce application.

## Project Structure

* **Page Object Model (POM)** – Page-specific locators and actions are separated from test cases.
* **Custom Fixtures** – Used to provide reusable page objects and test setup.
* **Test Data** – Test data is stored in the `test-data` folder and used for data-driven testing (DDT).
* **Authentication State** – Authenticated tests use Playwright `storageState` to reuse a logged-in session.
* **Environment Variables** – Test credentials and application URL are loaded from `.env` using `dotenv`.
* **TypeScript** – Used for type safety and project configuration.
* **ESLint & Prettier** – Used for linting and code formatting.

## Test Scenarios

The project currently covers:

* Login and logout
* Product search
* Product filtering
* Product details
* Add product to cart
* Cart validation
* Complete checkout flow
* Order placement

## Test Execution

Tests run in parallel by default.

### Run all tests

```bash
npm test
```

### Run tests with Playwright UI

```bash
npm run test:ui
```

### Run ESLint

```bash
npm run lint
```

### Check code formatting

```bash
npm run format
```

### Run complete validation

```bash
npm run validate
```

The `validate` script runs formatting checks, ESLint, and the full Playwright test suite.

### Open Playwright HTML report

```bash
npx playwright show-report
```

## GitHub Actions

The project uses GitHub Actions for automated test execution.

* Pull requests targeting `main` automatically run ESLint and Playwright tests.
* The workflow can also be triggered manually through GitHub Actions.
* After a successful workflow on `main` or a manual run, the Playwright HTML report is deployed to GitHub Pages.
* GitHub Actions keeps the history of previous workflow runs, including branch, commit, and trigger information.

### Playwright Report

[View Playwright Report](https://shevara84.github.io/labsAutomation/)

### GitHub Deployments

[View Deployments](https://github.com/shevara84/labsAutomation/deployments)

## Local Setup

### Requirements

* Node.js (LTS recommended)
* npm
* Git

### Clone the Repository

```bash
git clone https://github.com/shevara84/labsAutomation.git
cd labsAutomation
```

### Install Dependencies

Install all project dependencies from `package.json`:

```bash
npm ci
```

### Install Playwright Browsers

Install the required Playwright browsers:

```bash
npx playwright install
```

### Environment Variables

Create a `.env` file in the project root:

```env
BASE_URL=https://your-environment-url
CUSTOMER_EMAIL=your-email
CUSTOMER_PASSWORD=your-password
```

The `.env` file should not be committed to the repository.

A `.env.example` file is provided as a template.

### Run Tests

Run the complete test suite:

```bash
npm test
```

Run tests with the Playwright UI:

```bash
npm run test:ui
```

Run a specific test file:

```bash
npx playwright test tests/auth/login.spec.ts
```

### Run Validation

Run formatting checks, ESLint, and the complete Playwright test suite:

```bash
npm run validate
```

## Authentication

The project uses Playwright `storageState` for authenticated test scenarios.

Authentication is handled through the Playwright setup project. After a successful login, the authenticated browser state is stored locally in:

```text
.auth/user.json
```

The `.auth` directory is excluded from Git and is generated when the authentication setup runs.

Authentication tests such as login and logout use the UI directly and do not depend on the stored authentication state.
