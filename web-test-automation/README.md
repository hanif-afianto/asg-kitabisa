# Web Test Automation
Automated testing framework for web applications using WebdriverIO and TypeScript, ensuring robust end-to-end testing.

## Table of Contents

- [About The Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Test Coverage](#test-coverage)
- [Usage](#usage)
- [Contributing](#contributing)

## About The Project
This project is an automated testing framework for web applications using WebdriverIO and TypeScript. It includes test scripts for login, registration, and simulation functionalities.

### Built With
- [WebdriverIO](https://webdriver.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Jasmine](https://jasmine.github.io/)
- [Applitools Eyes](https://applitools.com/)
- [wdio-html-nice-reporter](https://www.npmjs.com/package/wdio-html-nice-reporter)

## Getting Started
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 14.x)
- npm or yarn

### Installation
Clone the repository and install dependencies:
```sh
npm install
```

### Configuration
Update the `wdio.conf.ts` file as per your testing requirements, such as setting browser configurations and defining test specs.

## Test Coverage
This framework covers the following test scenarios:
- **Login Tests:** Valid and invalid WhatsApp number login attempts.
- **Registration Tests:** User registration with various health conditions.
- **Simulation Tests:** Verifying simulation functionality and input validation.

## Usage
Run tests using the following command:
```sh
npm test
```
For a specific test file, use:
```sh
npx wdio wdio.conf.ts --spec test/specs/login.ts
```

## Contributing

Feel free to submit pull requests for improvements or additional test cases.