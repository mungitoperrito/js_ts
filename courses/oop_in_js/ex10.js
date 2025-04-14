// Stopwatch project

// Load on web page to keep function available.

function Stopwatch(){

  let startTime = 0;
  let endTime = 0;
  let timeLapsed = 0;
  let isRunning = false;

  Object.defineProperty(this, 'duration', {
    get: function(){ return timeLapsed; }
  });

  this.start = function(){
    if (isRunning)
        throw new Error('Already running');

    isRunning = true;

    startTime = new Date();
  };

  this.stop = function(){
    if (!isRunning)
        throw new Error('Already stopped');

    isRunning = false;

    endTime = new Date();
    // Date() returns time in milliseconds
    timeLapsed += (endTime.getTime() - startTime.getTime()) / 1000;
  };

  this.reset = function(){
    timeLapsed = 0;
    startTime = null;
    endTime = null;
    isRunning = false;
  };
}



// Sample run in browser
// Load page then run in the console

/*
sw = new Stopwatch();
Stopwatch {start: ƒ, stop: ƒ, reset: ƒ}

sw.start()
undefined

sw.start()
ex10.js:18 Uncaught Error: Already running
    at Stopwatch.start (ex10.js:18:15)
    at <anonymous>:1:4
Stopwatch.start @ ex10.js:18
(anonymous) @ VM209:1

sw.stop()
undefined

sw.stop()
ex10.js:27 Uncaught Error: Already stopped
    at Stopwatch.stop (ex10.js:27:15)
    at <anonymous>:1:4
Stopwatch.stop @ ex10.js:27
(anonymous) @ VM224:1

sw.duration
9.543

sw.reset()
undefined

sw.start()
undefined

sw.stop()
undefined

sw.duration
4.482
*/