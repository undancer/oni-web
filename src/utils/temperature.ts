/**
 * Convert Celsius to Fahrenheit
 *
 * @param celsius number
 * @returns {number}
 */
export const celsiusToFahrenheit = (celsius: number) => (celsius * 9 / 5) + 32;


/**
 * Convert Celsius to Kelvin
 *
 * @param celsius number
 * @returns {*}
 */
export const celsiusToKelvin = (celsius: number) => celsius + 273.15;


/**
 * Convert Fahrenheit to Celsius
 *
 * @param fahrenheit number
 * @returns {number}
 */
export const fahrenheitToCelsius = (fahrenheit: number) => (fahrenheit - 32) * 5 / 9;


/**
 * Convert Fahrenheit to Kelvin
 *
 * @param fahrenheit number
 * @returns {number}
 */
export const fahrenheitToKelvin = (fahrenheit: number) => (fahrenheit - 32) * 5 / 9 + 273.15;


/**
 * Convert Kelvin to Celsius
 *
 * @param kelvin number
 * @returns {number}
 */
export const kelvinToCelsius = (kelvin: number) => kelvin - 273.15;


/**
 * Convert Kelvin to Fahrenheit
 *
 * @param kelvin number
 * @returns {number}
 */
export const kelvinToFahrenheit = (kelvin: number) => (kelvin - 273.15) * 9 / 5 + 32;
