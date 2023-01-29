# You're given pandas dataframe df that shows top 10 countries with the most CO2 emissions in 2014.
# You are asked to plot a horizontal barplot using matplotlib

import matplotlib.pyplot as plt

# Assume that df is your dataframe
df = df.sort_values(by='CO2_Emissions', ascending=False).head(10)

# Create the bar plot
plt.barh(df['Country'], df['CO2_Emissions'])

# Add axis labels
plt.xlabel('CO2 Emissions (in Millions of Metric Tons)')
plt.ylabel('Country')

# Show the plot
plt.show()

# This will create a horizontal bar plot with the countries on the y-axis and their corresponding CO2 emissions on the x-axis.

# With the use of plt.barh() and plt.yticks():
# The plt.yticks() function is used to set the y-axis tick labels to the values of the 'Country' column in the dataframe.

import matplotlib.pyplot as plt

# Assume that df is your dataframe
df = df.sort_values(by='CO2_Emissions', ascending=False).head(10)

# Create the bar plot
plt.barh(df['Country'], df['CO2_Emissions'])

# Add ytick labels
plt.yticks(df['Country'])

# Add axis labels
plt.xlabel('CO2 Emissions (in Millions of Metric Tons)')
plt.ylabel('Country')

# Show the plot
plt.show()


