let image = new Image();
let tStart = null;
let tEnd = null;
let counter = 0;
let arrTimes = [];
let abortFallback = false;

export default function checkConnectivity(timeToCount = 3, threshold = 3000) {

    if (navigator.onLine) {
      changeConnectivity(true);
    } else {
      timeoutFallback(threshold);
    }

    window.addEventListener('online', e => {
      changeConnectivity(true);
    });

    window.addEventListener('offline', e =>{
      timeoutFallback(threshold);
    });

    timeoutFallback(threshold);
    checkLatency(timeToCount, threshold, avg => handleLatency(avg, threshold));
    setInterval(() => {
        reset();
        timeoutFallback(threshold);
        checkLatency(timeToCount, threshold, avg => handleLatency(avg, threshold));
    }, 6000);
}

function checkLatency(timeToTest, threshold, cb) {
    tStart = new Date().getTime();
    if (counter < timeToTest) {
        image.src = "https://www.google.com/images/phd/px.gif?t=" + tStart;
        image.onload = function (e) {
          abortFallback = true;
          tEnd = new Date().getTime();
          let time = tEnd - tStart;
          arrTimes.push(time);
          counter++;
          checkLatency(timeToTest, threshold, cb);
        };
        image.onerror = function(threshold) {
          timeoutFallback(threshold);
        };
    } else {
        const sum = arrTimes.reduce((a, b) => a + b);
        const avg = sum / arrTimes.length;
        cb(avg);
    }
}

function reset() {
  abortFallback = false;
  counter = 0;
  arrTimes = [];
}

function handleLatency(avg, threshold) {
    const isConnectedFast = avg <= threshold;
    changeConnectivity(isConnectedFast);
}

function changeConnectivity(state) {
  const event = new CustomEvent("connection-changed", {
    detail: {
      online: state
    }
  });
  return document.dispatchEvent(event);
}

function timeoutFallback(threshold) {
  window.setTimeout(() => {
    if(!abortFallback){
      console.log("connectivity is too slow, falling back on offline");
      changeConnectivity(false);
      reset();
    }
  }, threshold +1);
}
