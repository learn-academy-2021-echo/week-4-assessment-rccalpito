# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'

# def is_this_odd (number)
#     if number.even?
#         p "#{number} is even"
#     elsif number.odd?
#         p "#{number} is odd"
#     else
#         p 'enter a number pls'
#     end
# end

# is_this_odd(num3)


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# def vowel_destroyer (stringArr)
#     p stringArr.delete "aeiouAEIOU"
# end

# vowel_destroyer(album3)
# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# def palindrometer (string_array)
#     if string_array.downcase == string_array.downcase.reverse
#         p "#{string_array} is a palindrome"
#     else
#         p "#{string_array} is not a palindrome"
#     end
# end

palindrometer(is_palindrome2)