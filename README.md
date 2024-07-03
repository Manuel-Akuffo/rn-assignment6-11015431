# rn-assignment6-11015431
OpenFashionApp
OpenFashionApp is a React Native application designed to showcase and sell fashionable clothing. This app allows users to browse through a list of products and add them to their cart, which they can then review and proceed to checkout.

# Features
Product Listing: Browse a list of products with their images, names, and prices.
Add to Cart: Add products to the cart for purchasing later.
View Cart: Review the items in your cart before proceeding to checkout.
Checkout: See the total price of items in the cart and prepare for the purchase.
Screenshots
Product List

# Checkout

# Components
ProductCard
A card component to display product details including image, name, and price, and a button to add the product to the cart.

# CartItem
A component to display cart item details including image, name, and price, and a button to remove the item from the cart.

# Screens
ProductListScreen
This screen displays a list of products. Each product is rendered using the ProductCard component.

# CheckoutScreen
This screen displays the items added to the cart. Each item is rendered using the CartItem component. The total price of the items in the cart is displayed at the bottom.

# Navigation
AppNavigator sets up a stack navigator with two screens: ProductListScreen and CheckoutScreen.

# Redux
store.ts
Configures the Redux store with a cart slice for managing cart state.

# cartSlice.ts
Defines actions and reducers for adding and removing items from the cart.

# Types
Contains TypeScript type definitions for the application.

# Contributing
Fork the repository
Create a new branch (git checkout -b feature-branch)
Commit your changes (git commit -m 'Add some feature')
Push to the branch (git push origin feature-branch)
Create a new Pull Request
