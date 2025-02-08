# Currency-Converter
The website allows users to convert amounts between different currencies using real-time exchange rates.

The project consists of the following files:<br>
index.html- The main HTML file that defines the structure of the webpage.<br>
style.css- The CSS file that styles the webpage.<br>
app.js- The JavaScript file that handles the functionality of the currency conversion.<br>
codes.js- The JavaScript file that contains the list of currency codes and their corresponding country codes.<br>

The index.html file defines the structure of the Currency Converter webpage. It includes the following key elements:<br>
Head Section:<br>
Meta Tags- Defines the character set and viewport settings for responsive design.<br>
Title- Sets the title of the webpage.<br>
Stylesheets- Links to the external CSS file (style.css) and Font Awesome for icons. It also includes links to Google Fonts for custom fonts.<br>
Body Section:<br>
Container- A div element with the class container that wraps the main content of the webpage.<br>
Header- An h1 element that displays the title "Currency Converter".<br>
Form- A form element that contains the input fields and dropdowns for currency conversion.<br>
Amount Input- An input field where users can enter the amount they want to convert.<br>
Dropdowns- Two dropdown menus for selecting the "From" and "To" currencies. Each dropdown is accompanied by an image element to display the corresponding country flag.<br>
Convert Button- A button that triggers the currency conversion when clicked.<br>
Message Display- A div element with the class msg that displays the conversion result.<br>

The style.css file contains the styles for the Currency Converter webpage. It includes styles for the body, container, header, form elements, dropdowns, and buttons. The styles ensure a clean and responsive design.

The codes.js file contains an object that maps currency codes to their corresponding country codes. This object is used to display the correct flag for each currency in the dropdown menus.

The app.js file contains the JavaScript code that handles the functionality of the currency conversion. It includes the following key elements:<br>
Populating Dropdowns-
The script dynamically populates the "From" and "To" dropdown menus with options based on the currency codes defined in codes.js.<br>
Handling Dropdown Changes-
Event listeners are added to the dropdown menus to update the displayed country flag whenever the selected currency changes.<br>
Setting Default Values-
The script sets default values for the dropdown menus and the corresponding flags when the page loads.<br>
Currency Conversion Function-
The convertCurrency function is triggered when the "Convert" button is clicked. It performs the following steps:<br>
Prevents the default form submission behavior.<br>
Retrieves the entered amount and selected currencies.<br>
Validates the input amount.<br>
Fetches the exchange rate from an external API.<br>
Calculates the converted amount and displays the result in the message display element<br>
