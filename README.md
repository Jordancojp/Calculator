# Calculator

<a href="https://jordancojp.github.io/Calculator/">Live preview</a>

I went slightly off script here with function namings, future projects will follow the brief better.

I copied the layout from an basic calculator google image search but didn't rob myself of the learning process by looking through the CSS code.

I referenced how the calculator app works on my phone as a starting point to how I wanted my program to function which is why it slightly deviates from the guide.

The calculation is stored as an array with two variables, type(operator or number) and value("123 or +"). When the values are added together it looks like a formula "x + y - z".

Whenever a user presses a number, it checks if the last element in the array has the "number" type, if not it will create a new number type and add it to the end of the array otherwise it will simply add that number as a string to the value field.

When the user presses an operator, it will create a new array element at the back with simply just that operator in the value field.

Every button press triggers inputUpdate() which is where the calculation is done and projected to the results field.

The calculation starts by assigning the sum to the first number, it then iterates through the array, if an operator is detected it stores that operator and goes to the next element which will be a number and then uses that operator against the current iterated element and the total sum.

When inputting a decimal it searches the top element for an existing decimal and does nothing if one is found preventing multiple decimal inputs.

TODO - 
Add keyboard support
Add a backspace button