// SPEED DETECTOR PROGRAM
function  checkCarSpeed(speed){
    const speedLimit= 70;
    kmAboveSpeedLimit= 5; // this when you go above the speed limit
   // if sped is less than 70 it should display ok
    if( speed < speedLimit + kmAboveSpeedLimit){
        return "Ok";
    }
    // what is happening below is to get our points we are taking the users inputed speed minus the speed limit,
    //then if the speed is greater than 12 the license will be suspended otherwise your points will be displayed
   
    const demeritPoints= Math.floor(speed - speedLimit) / 5  // how we are going to calculate the demerit points
if( demeritPoints >= 12){
    return "License suspended";
}else{
    return demeritPoints;
}
}
checkCarSpeed(150);