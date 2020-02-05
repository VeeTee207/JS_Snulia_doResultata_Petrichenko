The package realizes JavaScript feature called event delegation. Event delegation allows you to avoid adding 
event listeners to specific tabs.  Here, the event listener is added to one parent.  So, the event listener 
analyzes clicked events to find a match on child elements. The file script.js has the following: 

info -- a parent element,
tab -- several child elements,
tabContent -- content itself that should be displayed. 
