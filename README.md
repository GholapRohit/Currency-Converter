# Currency Converter

The website allows users to convert amounts between different currencies using real-time exchange rates.

## Project Structure

The project consists of the following files:

- **`index.html`** – The main HTML file that defines the structure of the webpage.
- **`style.css`** – The CSS file that styles the webpage.
- **`app.js`** – The JavaScript file that handles the functionality of the currency conversion.
- **`codes.js`** – The JavaScript file that contains the list of currency codes and their corresponding country codes.

## `index.html`

This file defines the structure of the Currency Converter webpage.

### Head Section:
- **Meta Tags:** Defines character set and viewport settings for responsive design.
- **Title:** Sets the title of the webpage.
- **Stylesheets:** Links to:
  - `style.css`
  - Font Awesome (for icons)
  - Google Fonts (for custom fonts)

### Body Section:
- **Container (`.container`):** Wraps the main content.
- **Header:** An `h1` element displaying the title "Currency Converter".
- **Form:** Contains input fields and dropdowns for conversion.
  - **Amount Input:** Input field to enter amount for conversion.
  - **Dropdowns:** 
    - "From" and "To" currency selectors.
    - Each with an associated image to display the country flag.
  - **Convert Button:** Button to trigger the conversion.
  - **Message Display (`.msg`):** Displays the conversion result.

## `style.css`

Contains styles for a clean and responsive Currency Converter layout.

### Styled Elements:
- `body`: Page background, fonts, and overall layout.
- `.container`: Main wrapper styling.
- `h1`: Header text styling.
- `form` elements: Inputs, dropdowns, and buttons.
- Buttons and flags: Responsive and visually appealing design.

## `codes.js`

Contains an object that maps currency codes (e.g., USD, EUR) to their corresponding country codes (e.g., US, EU).  
Used to dynamically display correct flags for each currency in the dropdowns.


## `app.js`

Handles all functionality of the currency converter.

### Features:

#### 1. Populating Dropdowns:
- Dynamically populates "From" and "To" dropdown menus using currency codes from `codes.js`.

#### 2. Handling Dropdown Changes:
- Updates country flag image whenever a currency selection changes.

#### 3. Setting Default Values:
- On page load, sets default currency selections and flags.

#### 4. Currency Conversion:
- The `convertCurrency()` function is triggered on clicking the Convert button.
- Steps:
  - Prevents default form submission.
  - Retrieves input amount and selected currencies.
  - Validates the input amount.
  - Fetches exchange rate from an external API.
  - Calculates and displays the converted amount in `.msg`.

## Usage

1. Enter the amount to convert.
2. Select currencies from the dropdowns.
3. Click the "Convert" button.
4. View the converted result displayed below the form.

## Note

Ensure you have a working internet connection as this app fetches live exchange rates from an external API.
