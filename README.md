DBG.js
======

DBG.js  Debugging Keywords for JavaScript

see [DBG.html] for demo

## EXAMPLE USAGE

```javascript
// logs the line and the function scope at this line
DBG

// logs an alternate message instead of the function scope
DBG = 'alternate message'

// logs an array instead of a message
DBG = ['report', 'this is the way it is']

// demonstraites a simple function logging the line number and scope
function wait5sec() {
	var start = (new Date()).getTime();
	while ((new Date()).getTime() - start < 5000);
DBG
}

// demonstraites the TIME keyword which creates a timestamp for the last time that line was accessed
(function(){
DBG
// timer
TIME
wait5sec();
TIME
})();
```

getting the DBG object always returns the array of DBG logs

Look at the DBG object using either Firebug, Webkit Instpector or Internet Explorer Debeloper Tools
