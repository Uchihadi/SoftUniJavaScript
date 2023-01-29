# You can use the pandas library in Python to subtract the mean of each column from a dataframe and divide by the standard deviation of each column

import pandas as pd

# Assume that df is your dataframe

# Subtract mean from each column
mean_subtracted = df.sub(df.mean(), axis=0)

# Divide by standard deviation of each column
mean_subtracted_div_std = mean_subtracted.div(df.std(), axis=0)

# Resulting dataframe
result = mean_subtracted_div_std

# This will subtract the mean of each column from the dataframe and divide the result by the standard deviation of each column
# Returning a new dataframe with the columns having mean = 0 and std = 1
result = (df - df.mean()) / df.std()
