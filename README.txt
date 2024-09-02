# E-commerce Website

## Overview
This is a simple e-commerce website project built using Vue.js for the frontend and Node.js for the backend. The website features a homepage that displays available clothing items, a dynamic search bar for finding clothing items, and basic authentication with sign-in and sign-up functionality.

## Features
- **Home Page**: Displays a list of available clothing items.
- **Search Functionality**: Dynamically displays relevant clothing items as the user types in the search bar.
- **Authentication**: Includes sign-in and sign-up forms for user authentication.
- **Responsive Design**: The website is responsive and works well on various screen sizes.
- **Category Listing**: Displays categories for "Girls" and "Boys" in a horizontal layout on the homepage.

## Project Structure
```bash
ecommerce-project/
│
├── backend/
│   ├── data/
│   │   └── products.json     # JSON file storing product data
│   ├── index.js              # Entry point for the backend server
│   └── routes/
│       └── products.js       # Route handler for fetching product data
│
├── frontend/
│   ├── public/
│   │   └── assets/           # Images and other static assets
│   ├── src/
│   │   ├── assets/           # Static images
│   │   ├── components/
│   │   │   ├── AppNavbar.vue # Navbar component
│   │   │   ├── ClothingSearch.vue # Search component
│   │   │   └── AppFooter.vue # Footer component
│   │   ├── views/
│   │   │   ├── HomePage.vue  # Home page component
│   │   │   ├── SignIn.vue    # Sign-in page component
│   │   │   └── SignUp.vue    # Sign-up page component
│   │   ├── App.vue           # Main Vue.js App component
│   │   ├── main.js           # Main entry point for Vue.js
│   └── package.json          # NPM package configuration for the frontend
├── .gitignore                # Git ignore file
└── README.md                 # Project README file
Usage
Home Page: Visit http://localhost:8080 to view the homepage and see available products.
Search: Start typing in the search bar to find clothing items dynamically.
Sign In/Sign Up: Use the "Sign In" and "Sign Up" links in the navbar to access authentication pages.
Dependencies
Backend
Express
Body-parser
Frontend
Vue.js
Bootstrap
Html