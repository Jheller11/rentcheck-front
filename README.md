# RentCheck DC

## Desciption:

This project was developed as a tool for Washington D.C. area renters and landlords to get an accurate estimate of neighborhood rent prices based on an analysis of the market. Using a multivariate linear regression, RentCheck DC applies its custom model to a given input and generates an accurate estimate of a market rate monthly rent.

## Technologies Used:

* React
* Express
* Node
* MongoDB

## Deployed Application:

* Application: https://rentcheck-dc.surge.sh/
* API: https://rentcheck-dc.herokuapp.com/apartments (Repository: https://github.com/Jheller11/rentcheck-back)

## How to Use:

1.  Go to http://www.google.com
2.  Click on "Get My Estimate"
3.  Fill out the form and clock "Submit"
4.  View your estimate!

## How the Estimate is created:

* I used a multivariate linear regression from ml.js (details: https://github.com/mljs/regression-multivariate-linear) to generate a model for my estimates by providing the following inputs and outputs for known apartment listings:

* Inputs:

1.  Number of Bedrooms
2.  Number of Bathrooms
3.  Apartment Size (sq. ft.)
4.  Number of Parking Spots (if any are included in listed rent price)
5.  Neighborhood (categorized 1-5 based on median rents, 5 is for the most desirable neighborhoods)

* Output:

  * Monthly Rent

* After creating the model, I now simply pass in user input for Inputs 1-5 above and generate an Output equal to the monthly rent estimate.

## Limitations

1.  Data - I am working on adding more data from a wider variety of neighborhoods. The current sample is not large enough to ensure accuracy.
2.  Bias - The current sample is biased towards luxury apartment buildings/close to metro. Therefore, estimates have a tendency to come in slightly higher. I am working on adding additional inputs to adjust the model.
