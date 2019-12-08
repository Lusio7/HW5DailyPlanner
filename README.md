# HW5DailyPlanner
Homework 5 Assignment Daily Planner

#Day Planner

Criteria:

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery. The app should display standard business hours (9 a.m. to 5 p.m.). Each time slot should represent one hour and contain the following:

The time

A field to hold user input

A save button

Clicking on the save button will store the time and user input in localStorage. Near the top of the calendar, the application should display the current day. Additionally, each hour should be color coded to reflect whether the time slot is in the past, the present, or the future. This will change depending on the time of day. You'll need to use the Moment.js library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.`

Minimum Requirements

Functional, deployed application.

GitHub repository with a unique name and a README describing project.

The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).

Each timeblock contains an input field and save button.

Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.

The current day is displayed at the top of the calendar.

Each timeblock is color coded to indicate whether it is in a past, present, or future hour.

GIVEN that an employee adds events to a specific hour in a calendar

WHEN the employee clicks the save button

THEN events are saved in the timeblock for that hour
