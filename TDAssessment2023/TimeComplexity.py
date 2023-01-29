# You are given a binary array state consisting of integers 0 and 1. 
# You are also given operations - an array of strings, each representing an operation of one of two types: 
# 1) "L" - find the smallest index i, for which state[i] = 0, and set state[i] = 1 (if there is no such index then do nothing) 
# 2) "C{index}" - set state[index] = 0. (it is guaranteed that index is a valid 0-based index of state (ie: index < state. Length)) 
# Given state and operations, your task is to return the binary string of state array after all the operations have been applied.

for operation in operations:
    if operation == "L":
        try:
            index = state.index(0)
            state[index] = 1
        except ValueError:
            pass
    else:
        index = int(operation[1:])
        state[index] = 0
return "".join(str(i) for i in state)

