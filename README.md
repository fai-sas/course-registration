#Project features:

• Courses can not be selected multiple times

• Credit hours can not exceed 20 hours

• Users can see remaining credit hours available in their courses

• Users can see total price of their courses

• If users select any course multiple times or their credit hours exceed, they will get relevant warnings

#How I managed the state in my assignment project:

In Cards.jsx file to render each card, i declared useState and set initial value as empty array. Later i updated the state value of each card with the details i found in JSON file.

In App.jsx file i declared different states for different purposes.

I declared initial state value as empty array and updated them to show the courses only when any user selects the course.

I also declared and updated state values to show total credit hours remaining, total credit hour selected and total price of the selected courses.
