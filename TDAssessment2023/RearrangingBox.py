# Ken has a box that rearranges itself as a robot
# Basically, the box has odd and even numbers, and all the odd numbers are sorted from least to greatest, and placed at the bottom of the box, with the highest number being at the top, and the even numbers being sorted from greatest to least, and the greatest being at the bottom, and the least being at the top.
# The greatest of the even numbers is right above the greatest number of the odd numbers.
# Ken will give an input of N, followed by a N-digit number, and a value B.
# Rearrange the numbers into this box type. Then give the index of B in this box. 
# The box's indexes start from the first odd number to the last even number, with the lowest being 1.
# There can be duplicates of numbers, take the earliest index of such number if asked.

def index_of_value(N, num, B):
    # Separate odd and even numbers
    odd = [int(d) for d in str(num) if int(d) % 2 == 1]
    even = [int(d) for d in str(num) if int(d) % 2 == 0]

    # Sort odd and even numbers
    odd.sort()
    even.sort(reverse=True)

    # Combine sorted odd and even numbers
    box = odd + even

    # Search for B in the box and return its index
    for i, val in enumerate(box):
        if val == B:
            return i+1

print(index_of_value(6, 123456, 4)) #return 3
