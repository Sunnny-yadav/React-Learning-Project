# Currency Converter

This project is a currency converter application built using React and Tailwind CSS. It allows users to convert amounts between different currencies using real-time exchange rates fetched from an API.

## Features

- **Dynamic Currency Conversion**: Converts currency based on selected options.
- **Swap Currencies**: Swaps the conversion direction between From and To currencies.
- **Reset Functionality**: Resets the input fields.
- **Responsive Design**: Responsive UI for desktop and mobile devices.


## Technologies Used

- **React**: Used for building the user interface and managing state.
- **Tailwind CSS**: Provides utility-first CSS classes for styling the components.
- **useFetch Hook**: Custom hook for fetching real-time exchange rates from an external API based on selected currencies.
- **useState Hook**: Manages component state for input amounts and selected currencies.
- **useEffect Hook**: Triggers API calls on component mount and whenever the currency selection changes.
- **Inputbox Component**: Reusable component for input fields and currency selection.
- **API**: Fetches data from the [Currency API](https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/) for real-time exchange rates.

## How to Use

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Sunnny-yadav/react-learning-projects.git
   cd react-learning-projects/03currencyConverter
    ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Run the development server**:
   ```bash 
   npm run dev
    ```
4. Navigate to localhost link to view you app