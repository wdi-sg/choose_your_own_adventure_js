# Exercise: Temperature Converter

![https://media.giphy.com/media/xUOxf54shCTBwOgRfG/giphy.gif](https://media.giphy.com/media/xUOxf54shCTBwOgRfG/giphy.gif)

Goal: Create a program that can convert a temperature in Fahrenheit, Celsius or Kelvin to the other two units.

## Specifications

### Part 1

> Your application should...

* Prompt the user for a starting temperature. This should be a numerical value that represents degrees in fahrenheit.
* After receiving input it should show that same temperature in both Kelvin and Celsius.

## Further: (if you get done with the above)

### Part 2

> Your application should...

* Prompt the user for a starting `temperature`. This should be a numerical value that represents degrees.
* Prompt the user for a starting `temperatureUnit`. This will represent either Fahrenheit, Celsius, or Kelvin.
* The application should print out the user-submitted temperature in the two remaining units.
  * So, if the user submitted `32` and `fahrenheit`, the program should output something like the below. Feel free to customize this however you'd like.
    ```text
    32° F = 0°C = 273.15K
    ```

Using Conditionals, have your code accept either fahrenheit, celsius or kelvin, and output the other two temp types.

Note:

>> You will need one other *kind* of data to be able to get input twice: world status data.

>> This is a data value that changes and keeps track of the world state of your program- for instance, what step is the user in? Are they supposed to enter the temperature or the unit right now?

>> You will have to store this value somewhere and alter it as needed by your program.



### Part 3
If the temperature is below 0 also print out a message like "ooh it's cold out".

If the temperature is above 40 also print out a message like "ooh it's hot out".

If the temperature is above 100 print out a message like "your literally boiling".

### Part 4
Also prompt the user for their name. When you output the result, suggest the type of clothing they should wear.

```
 nothing
 swimsuit
 shorts and shirt
 sweater
 sweater + jacket
 heavy jacket
 heavy jacket and toe warmers
 dont go outside if you want to live
```
