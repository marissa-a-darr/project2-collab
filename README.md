# Better Have My Money

Group Project #2

## User Story

AS A user

I WANT to generate a webpage that displays my monthly expenses

SO THAT I can have a better outlook on my monthly spending

## Acceptance Criteria

GIVEN a Monthly Expenses site

WHEN I visit the site for the first time

THEN I am presented with a login page, if I do not have an account

THEN I am can register for one

WHEN I choose to sign up

THEN I am prompted to create a username and password

WHEN I click on the sign-up button

THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in

THEN I am prompted to enter my username and password

WHEN I am signed in to the site

THEN I am taken to the homepage

WHEN I click on any other links in the navigation

THEN I see navigation links for the homepage, chart, and the option to log out

WHEN I click on the homepage option in the navigation

THEN I am taken to the homepage and presented with all of my monthly expenses

WHEN I click Paid

THEN I am able to check off if monthly expense has been paid

WHEN I click new expense

THEN I am able to add a new monthly expense

THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment

WHEN I click on the chart option in the navigation

THEN I am taken to the the chart page where I am presented with a diagram view of my monthly expenses

WHEN I click on the logout option in the navigation

THEN I am signed out of the site

## Technologies Used

- Node.js/Express.js

- Handlebars.js as a template engine

- MySQL and Sequelize ORM for the database

- GET/POST routes for retrieving/adding new data

- Chart.js Library

- Folder Structure Meeting MVC paradigm

- Authentication (express-session/cookies)

- .env to protect API keys/Sensative information


## Mockup

The following is a link to the deployed "Better Have My Money Site":



## Description
The goal of Group Project 02 was to create an organized webpage where a user can monitor their monthly expenses. The user is able to view outgoing payments in an organized UI that displays each expense in a card providing the: Payment Name, Bill Type, Amount, and Payment Due. The user can also look at their expenses through a generated chart showing how much is spent each month.
