# Food Order App with React.js & Firebase

## Overview

A simple food order app built using React.js and Firebase Realtime Database. Users can explore the menu items, place orders, and have the orders stored in the Firebase database.

## Features

- Browse menu items from Firebase.
- Select items and set quantities for orders.
- Calculate the total order amount.
- Submit orders to Firebase Realtime Database.

## Setup

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/food-order-app.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd food-order-app
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

4. **Create a `.env` file:**

    Create a file named `.env` in the root directory of the project and add your Firebase API URL:

    ```plaintext
    REACT_APP_FOOD_DB_URL=your_firebase_api_url_here
    ```

5. **Start the development server:**

    ```bash
    npm start
    ```

6. **Open in your browser:**

    Open `http://localhost:3000` in your web browser to see the app in action.

## Firebase Setup

1. **Create a Firebase project:**

    Go to the Firebase Console (https://console.firebase.google.com/) and create a new project.

2. **Get your Firebase API URL:**

    In the project settings, find your project's Firebase API URL.

3. **Add API URL to `.env`:**

    Add the API URL in variable REACT_APP_FOOD_DB_URL to the `.env` file as shown above.

## Technologies Used

- React.js
- Firebase Realtime Database
- HTML & CSS


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
