# Instagram Clone

This is a simple Instagram clone built using React Native.

## Project Structure

```
instagram-clone/
├── App.js
├── navigation/
│   └── Navigation.js
└── screens/
    ├── HomeScreen.js
    ├── LoginScreen.js
    └── ProfileScreen.js
```

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/instagram-clone.git
   cd instagram-clone
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the app:**

   For iOS:
   ```sh
   npx react-native run-ios
   ```

   For Android:
   ```sh
   npx react-native run-android
   ```

## File Descriptions

### `App.js`

This is the entry point of the app. It imports the `Navigation` component and renders it.

### `navigation/Navigation.js`

This file sets up the navigation for the app using React Navigation. It defines a stack navigator with three screens: `LoginScreen`, `HomeScreen`, and `ProfileScreen`.

### `screens/LoginScreen.js`

This file contains the login screen component. It includes a username input field and a login button. When the login button is pressed, it navigates to the `HomeScreen`.

### `screens/HomeScreen.js`

This file contains the home screen component. It displays a simple text and a button to navigate to the `ProfileScreen`.

### `screens/ProfileScreen.js`

This file contains the profile screen component. It displays a simple text indicating the profile page.

## Usage

1. **Login Screen:**
   - Enter a username in the input field.
   - Press the "Login" button to navigate to the `HomeScreen`.

2. **Home Screen:**
   - Displays a welcome message.
   - Press the "Go to Profile" button to navigate to the `ProfileScreen`.

3. **Profile Screen:**
   - Displays a message indicating the profile page.

## Dependencies

- [React Native](https://reactnative.dev/)
- [React Navigation](https://reactnavigation.org/)
- [React Native Screens](https://github.com/software-mansion/react-native-screens)

## Contributing

If you would like to contribute to this project, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

---

Feel free to customize the README file further to suit your project's needs!
