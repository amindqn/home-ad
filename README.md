# Home Ad App

## Overview

**Home Ad App** is a real estate application that allows users to browse, post, and manage property ads. The app is built with React, using Material-UI for styling and components, and integrates with a JSON server to handle backend data.

## Features

- User Authentication with JWT (JSON Web Tokens)
- Browse property listings
- Post new ads (authenticated users only)
- Edit and delete ads (only for the owner)
- Map integration using React Leaflet
- Form validation with React Hook Form and Yup
- Light/Dark theme toggle
- Global cl function for console.log (`cl("Hi") = console.log("Hi")`)

## Tech Stack

- **Frontend**: React, React Router, React Query, Styled Components, Material-UI
- **Backend**: JSON Server, JSON Server Auth
- **State Management**: React Context, React Query
- **Form Handling**: React Hook Form, Yup
- **Authentication**: JWT via `react-cookie` and `jose`
- **Maps**: Leaflet, React-Leaflet

## Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v14.x or later)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/amindqn/home-ad-app.git
   cd home-ad-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or if you use yarn
   yarn install
   ```

3. **Start the development server:**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Start the JSON Server:**

   Open a new terminal and run:

   ```bash
   npm run server-auth
   # or
   yarn server-auth
   ```


   The backend will run on `http://localhost:5010`.

### Environment Variables

Currently, there are no additional environment variables required for this project.

## Scripts

- `npm start` / `yarn start`: Starts the development server.
- `npm run build` / `yarn build`: Builds the app for production.
- `npm run test` / `yarn test`: Runs the test suite.
- `npm run eject` / `yarn eject`: Ejects the app configuration.
- `npm run server` / `yarn server`: Starts the JSON server.
- `npm run server-auth` / `yarn server-auth`: Starts the JSON server with authentication enabled.

## Project Structure

```plaintext
home-ad-app/
│
├── public/                      # Public static files
├── src/
│   ├── api/                     # API service files (e.g., Auth API, Ads API)
│   ├── components/              # Reusable components (e.g., Buttons, Forms)
│   ├── contexts/                # React context providers
│   ├── hooks/                   # Custom React hooks
│   ├── pages/                   # Page components (e.g., Dashboard, Login, Signup)
│   ├── styles/                  # Theme and global styles
│   ├── types/                   # TypeScript types
│   ├── formScheam/              # Yup schemas
│   ├── utils/                   # Utils function
│   ├── App.tsx                  # Root component
│   ├── index.tsx                # Entry point for React
│   └── ...                      # Other configuration and utility files
├── db.json                      # JSON Server database
├── package.json                 # Project dependencies and scripts
└── README.md                    # Project documentation
```

## Usage

### Authentication

- **Signup**: Create a new user account.
- **Login**: Authenticate with your credentials. Upon successful login, a JWT token is stored in cookies.

### Ads Management

- **Create Ad**: Authenticated users can post new property ads.
- **Edit Ad**: The owner of the ad can edit its details.
- **Delete Ad**: The owner can also delete their ads.

### Theme Toggle

The app supports light and dark themes, which can be toggled using the switch button in the header.

## Contact Us

For any inquiries or support, please feel free to reach out via the Contact Us page within the application.


## Acknowledgements

- **React**: For providing the base framework.
- **Material-UI**: For UI components and styling.
- **JSON Server**: For quickly setting up a fake REST API.
- **React-Leaflet**: For interactive maps.

---
