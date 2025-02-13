# API Test Automation

This project is an API test automation framework using **Mocha**, **Chai**, and **TypeScript** to test the ReqRes API (`https://reqres.in/api`). The framework is designed to validate key API endpoints, including user retrieval, authentication, and user updates.

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

This project provides an automated API testing framework to validate endpoints in the ReqRes API. It includes structured test cases, assertions, and reporting capabilities.

### Built With
- **Mocha** - Test framework
- **Chai** - Assertion library
- **Axios** - API requests
- **TypeScript** - Type safety
- **Faker.js** - Fake test data generation
- **Mochawesome** - Test report generator

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (>= 16.x)
- **npm** or **yarn**

### Installation

Clone the repository and install dependencies:

```sh
npm install
```

### Configuration

Modify the `config.yaml` file under `src/config/` if necessary:

```yaml
BASE_URL: "https://reqres.in/api"
USER_ID: 2
```

## Test Coverage

The test suite covers the following API endpoints:

### **1. GET Single User**
- Fetches user details using `/users/{id}`.
- Validates response status and user data.

### **2. POST Register (Successful & Unsuccessful)**
- **Successful:** Registers a user with valid email and password.
- **Unsuccessful:** Attempts to register without a password.

### **3. POST Login (Successful & Unsuccessful)**
- **Successful:** Logs in a user with valid credentials.
- **Unsuccessful:** Attempts login with an invalid email.

### **4. PATCH Update User**
- Updates a user’s name and job.
- Validates updated data in response.

## Usage

To execute the test suite, run:

```sh
npm test
```

Test reports will be generated in the `report` directory. Open `./report/index.html` in a browser to view test results.

## Contributing

Feel free to submit pull requests for improvements or additional test cases.

