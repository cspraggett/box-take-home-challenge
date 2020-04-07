#The Challenge
A client is asking us to create a system, where multiple users can create, fill and ship a box in realtime.
The idea is that a user can create a box, and many users can fill that box with many many items.
However, there are some limitations, that a box can not have infinite, items. Instead a box has a max
weight, which can be set by the user creating that box. You can only put items when there is no way to
exceed the weight of the box. A quick mock image is provided bellow ( but by any means, this is not
the final design, you have free reign over it, and can modify it as you see fit )
You can use any backend you desire, however your frontend framework is React. Any npm modules
are permitted to use.
##Specs

- Users can connect to the app
- Any user can create a box
- All users must be able to see a box or boxes that have been created
- Users can drag and drop items into a said box. Until the box is full
- Users cannot overfill a box. The box cannot exceed its weight limit
- User that created the box is able to “ship” it out ( make it disappear off the screen)
- Everything must be done in real time
  ###Stretch
- When an item is being dragged, No other person can drag that said item.
- Make a navbar to display total number of users that are online
- Notification system where it somehow displays to everyone:
  “User **\_** has put item \_**\_ into Box \_\_\_\_**”
- Data persisted (using mongoDB or Redis)
