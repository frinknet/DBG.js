DBG.js
======

DBG.js  Debugging Keywords for JavaScript

see _DBG.html_ for demo

## EXAMPLE USAGE

```javascript
// logs the line and the function scope at this line
DBG;

// logs an alternate message instead of the function scope
DBG = 'alternate message';

// logs an array instead of a message
DBG = ['report', 'this is the way it is'];

// Log a breakpoint entry
BRK = "breakpoint";

// Log the current time
TIME;

// demonstraites a simple function logging the line number and scope
function wait5sec() {
    var start = (new Date()).getTime();
    while ((new Date()).getTime() - start < 5000);
    DBG = "waiting";
}

// demonstraites the TIME keyword which creates a timestamp for the last time that line was accessed
(function(){
	// timer
	TIME;
	wait5sec();
	TIME;
})();

//output a DBG report.
DBGReport = DBG;
```
Getting the DBG object always returns the array of DBG logs. You can look at the DBG object using either Firebug, Webkit Instpector or Internet Explorer Debeloper Tools.
