import React from "react";

function Time (){
  const date = new Date();
  const hours = date.getHours();
  const styles={};
  let timeOfDay;
  if (hours <12){
    timeOfDay = "morning";
    styles.color = "#ff0000";
  } else if (hours >= 12 && hours <17){
    timeOfDay = "afternoon";
    styles.color = "#ffff00";
  } else {
    timeOfDay = "night";
    styles.color = "#0000ff";
  }

  return(
    <time
      className="navbar"
      style={styles}
    >
      its {date.getHours() % 12} o'clock
      in the {timeOfDay}
    </time>
  );
}

export default Time;
