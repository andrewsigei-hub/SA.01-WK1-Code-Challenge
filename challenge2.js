function checkSpeedLimit(speed) {
  /* Declaring a speed limit check function with the parameter of speed and 
     calculate demerit points if speed limit is exceeded
   */

  const SpeedLimit = 70; // Speed Limit of 70km/h
  const KmPerPoint = 5; // For every 5km/h over the speed limit add 1 demerit point
  if (speed < 70) {
    console.log("OK"); // Within limit
  } else {
    const points = Math.floor((speed - SpeedLimit) / KmPerPoint); //Calculation of points accumulated
    if (points > 12) {
      return "License suspended"; // Driver has more than 12 point, suspend license
    }

    return `points:${points}`; // Returns Demerit points
  }
}
console.log(checkSpeedLimit(9)); // Test
