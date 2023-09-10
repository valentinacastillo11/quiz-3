/**
 * This quiz is to test your knowledge of while-Loop.
 *
 * 1. Create a repository by cloning: https://github.com/jorgecarmona/npm-project-template
 * 2. Follow the README for instructions
 * 3. When you finish the quiz, create a PR on you repository
 * 4. Submit to your lead
 */

/**
 * Question 1
 * Using a while loop, sum all numbers from 1 to 10 and store the result in a variable called sum.
 */
sum = 0
number = 1

while number <= 10:
    sum += number
    number += 1

print(sum)
/**
 * Question 2
 * Using a while loop, create a string of numbers from 5 to 15 separated by commas, e.g., "5,6,7,...,15".
 */
start = 5
end = 15
result = ""

while start <= end:
    result += str(start)
    if start < end:
        result += ","
    start += 1

print(result)

/**
 * Question 3
 * Print all even numbers between 10 and 30 using a while loop.
 */
number = 10

while number <= 30:
    if number % 2 == 0:
        print(number)
    number += 2  

/**
 * Question 4
 * Determine the smallest power of 2 greater than 1000 using a while loop.
 */
power_of_2 = 1

while power_of_2 <= 1000:
power_of_2 *= 2

print(power_of_2)

/**
 * Question 5
 * Reverse a string "HelloWorld" using a while loop.
 */
input_str = "HelloWorld"
output_str = ""
index = len(input_str) - 1

while index >= 0:
    output_str += input_str[index]
    index -= 1

print(output_str)

/**
 * Question 6
 * Using a while loop, count how many times the letter 'a' appears in the string "banana".
 */
input_str = "banana"
count = 0
index = 0

while index < len(input_str):
    if input_str[index] == 'a':
        count += 1
    index += 1

print(count)
/**
 * Question 7
 * Using a while loop, compute the factorial of 5.
 */
number = 5
factorial = 1

while number > 0:
    factorial *= number
    number -= 1

print(factorial

/**
 * Question 8
 * Print all numbers from 100 to 80 in descending order using a while loop.
 */
number = 100

while number >= 80:
    print(number)
    number -= 1
/**
 * Question 9
 * Using a while loop, find the greatest common divisor (GCD) of two numbers, 56 and 98.
 */
# Function to calculate the GCD using the Euclidean algorithm
def find_gcd(a, b):
    while b:
        a, b = b, a % b
    return a

# Input numbers
num1 = 56
num2 = 98

# Calculate the GCD
gcd = find_gcd(num1, num2)

print("The GCD of", num1, "and", num2, "is", gcd)
/**
 * Question 10
 * Calculate the sum of all odd numbers between 1 and 50 using a while loop.
 */
number = 1
odd_sum = 0

while number <= 50:
    if number % 2 != 0:
        odd_sum += number
    number += 1

print(odd_sum)