/*!
 * DBG simple debug object for JavaScript v2.1
 */
(function(){
	var _log = {};
	var _re = (function(){
		var err = (new Error).stack.split("\n")[1];
		var browser = {
			mozilla: /^(.*)@(.+):(\d+)$/,
			webkit: /^\s*at\s+(\b\w+\b)?\s*\(?(\bhttp.+):(\d+):\d+\)?$/
		};

		for (var x in browser) {
			if (browser[x].test(err)) {
				return browser[x];
			}
		}

		return /(.*)(.*)(.*)/;
	})();

	function _clone(obj) {
		if (obj == null || typeof obj != "object") {
			return obj;
		}

		var copy = new obj.constructor();
		for (var x in obj) {
			copy[x] = _clone(obj[x]);
		}
		return copy;
	}

	function _dbglog(data, stack_no) {
		var err = _re.exec((new Error).stack.split("\n")[stack_no ? stack_no : 2]);

		if (err != null) {
			if (typeof data != 'undefined') {
				err[1] = _clone(data);
			} else if (err[1] == '' || typeof err[1] == 'undefined') {
				err[1] = 'GLOBAL SCOPE';
			} else {
				err[1] = 'function ' + err[1];
			}
	
			_log[err[2]]
				= _log[err[2]]
				? _log[err[2]]
				: {};
			_log[err[2]]['Line: ' + err[3]] = err[1];
		}


		return _log;
	}

	function _dbgtime(time) {
		return _dbglog(new Date(time), 3);
	}

	function _dbgbrk(data, stack_no) {
		var err = _re.exec((new Error).stack.split("\n")[stack_no ? stack_no : 2]);

		if (data != undefined) {
			err[1] = ' = ' + data.toString();
		} else if (err[1] == '' || typeof err[1] == 'undefined') {
			err[1] = 'in Global Scope';
		} else {
			err[1] = 'in function ' + err[1];
		}

		alert(
		"Break Point " + err[1] + "\n\n" +
		" - " + err[2] + ' - Line: ' + err[3]
		);
	}

	window.__defineGetter__('DBG', _dbglog);
	window.__defineSetter__('DBG', _dbglog);
	window.__defineGetter__('TIME', _dbgtime);
	window.__defineSetter__('TIME', _dbgtime);
	window.__defineGetter__('BRK', _dbgbrk);
	window.__defineSetter__('BRK', _dbgbrk);
	window.LOG = _log;
})();

/* EXAMPLE USAGE */
// 
// // logs the line and the function scope at this line
// DBG
//
// // logs an alternate message instead of the function scope
// DBG = 'alternate message'
//
// // logs an array instead of a message
// DBG = ['report', 'this is the way it is']
//
// // demonstraites a simple function logging the line number and scope
// function wait5sec() {
// 	var start = (new Date()).getTime();
// 	while ((new Date()).getTime() - start < 5000);
// DBG
// }
// 
// // demonstraites the TIME keyword which creates a timestamp for the last time that line was accessed
// (function(){
// DBG
// // timer
// TIME
// wait5sec();
// TIME
// })();
// 
// // DBG always returns the array of DBG logs
