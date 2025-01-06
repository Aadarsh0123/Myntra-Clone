# Myntra Clone

This is a fully functional e-commerce web application clone of Myntra, built using React. The project mimics the core features of Myntra, including product listing, filtering, detailed product view, and cart functionality.


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API](#api)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Product Listing**: Displays a list of products fetched from the FakeStore API.
- **Product Details**: View detailed information about each product.
- **Cart Functionality**: Add and remove products from the cart.
- **User Authentication**: Firebase authentication for user login and signup.
- **Responsive Design**: Mobile-first design using TailwindCSS.
- **State Management**: Managed using Redux and Redux Persist.

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Firebase**: Backend-as-a-Service for authentication and database.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **React Icons**: Collection of popular icons for React projects.
- **React Redux**: Official React bindings for Redux.
- **React Router DOM**: DOM bindings for React Router.
- **React Slick**: Carousel component for React.
- **Redux**: Predictable state container for JavaScript apps.
- **Redux Persist**: Persist and rehydrate a Redux store.
- **Slick Carousel**: Carousel/slider library.
- **FakeStore API**: Free API for testing and prototyping e-commerce applications.

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-username/myntra-clone.git
   cd myntra-clone
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Add Firebase configuration**

   Create a `.env` file in the root directory and add your Firebase configuration:

   ```env
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   REACT_APP_FIREBASE_APP_ID=your_app_id
   ```

4. **Start the application**

   ```sh
   npm start
   ```

## Usage

- **Home Page**: Displays a list of products fetched from the FakeStore API.
- **Navbar**: Displays a list of products Man, Women Home & Living and Beauty.
- **Product Page**: Click on a product to view detailed information.
- **Cart**: Add products to the cart and view them.
- **Authentication**: Sign up or log in to manage your cart.

## API

This project uses the [FakeStore API](https://fakestoreapi.com/products) for fetching product data. No API key is required.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
