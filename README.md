# Countdown App ⏰

This web sites function will accept a users input and parse it as minutes which then starts a countdown from the value entered. There is a pause button beside the output that can stop the countdown. It can then be restarted. The user has the option to fast forward time by 1, 1.5, or 2.

## Frameworks

This website does not use any front-end frameworks but instead makes use of clever CSS, and JavaScript page manipulation.

## Future Goals

I look forward to re-building this app using React while maintaining the same functionality.

## Accessibility

This website is available at this link []().

## Tests

|Scenario|Expected Result|Latest Result|Automated|
|:---:|:---:|:---:|:---:|
|User enters a negative value|A validation error from the input textbox|Test box will not accept values less than 0|Added a min attribute to the input HTML tag|
|User clicks start without manually entering a value|Countdown can't start|Countdown will start with the seconds value at 60|N/A|
|User enters a value greater than 0|The countdown will start|The countdown actually starts|Several functions are triggered by event listeners|
|User presses the pause button|The timer should hold the value on screen|The timer freezes the numbers|N/A|

**Final remarks:** I enjoyed working on this challenge and surely have learnt a lot from it.
