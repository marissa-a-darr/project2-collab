# Better Have My Money

Group Project #2

## User Story

AS A user

I WANT to generate a webpage that displays my monthly expenses

SO THAT I can have a better outlook on my monthly spending


## Acceptance Criteria

GIVEN a CMS-style expenses site

WHEN I visit the site for the first time

THEN I am prompted to either sign up or sign in

WHEN I choose to sign up

THEN I am prompted to enter my first and last name and create a username and password

WHEN I click on the sign-up button

THEN my user credentials are saved and I am logged into the site

WHEN I revisit the site at a later time and choose to sign in

THEN I am prompted to enter my username and password

WHEN I am signed in to the site

THEN I see navigation links for the homepage, the dashboard, charts, expenses and the option to log out

WHEN I click on the homepage option in the navigation

THEN I am taken to the homepage presented with the expenses or the chart

WHEN I click on the expenses

THEN I am presented with each of my montly expenses including: The payment Name, Payment due date, amount, and its Bill Type

WHEN I click New Expense

THEN I am presented with an option to enter a new montly expense

WHEN I click on the charts

THEN I am able to see a chart view of my montly expenses

WHEN I click on the logout option in the navigation

THEN I am signed out of the site

WHEN I am idle on the site for more than a set time

THEN I am able to view comments but I am prompted to log in again before I can add, update, or delete comments


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
