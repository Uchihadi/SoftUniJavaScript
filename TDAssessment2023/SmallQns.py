"Hello Mike".split()
# The result will be : ['Hello', 'Mike']
# split() method in Python is used to split a string into a list of substrings using a specified delimiter.

A = [1]
A.append([2, 3, 4, 5])
# list A = [1] and we perform the operation A.append([2, 3, 4, 5]), this will add the list [2, 3, 4, 5] as a single element
# The resulting list A would be [1, [2, 3, 4, 5]] and the length of the list would be 2

Name = "Jake Matthew"
print(Name[-1])
# Name[-1] will return the last character of the string, which is "w".

A = {'a','b'}
B = {'a','a'}
A.intersection(B)
# Result of operation {'a','b'} & {'a'}{'a'}
# Operation {'a','b'} & {'a','a'} it returns a set containing all the elements that are common to both sets
# Output will be {'a'}

ser = pd.Series(['a', 'b', 'c'])
# Creates a pandas Series object named 'ser' with three elements 'a', 'b', 'c'
# A Series is a one-dimensional labeled array capable of holding any data type
# Similar to a column in a spreadsheet or a dataframe in pandas

print(type(ser)) # <class 'pandas.core.series.Series'>
print(ser[0]) # 'a'
print(ser.values) # array(['a', 'b', 'c'], dtype=object)

