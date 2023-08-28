import React from "react";
import moment from "moment";

const VideoDuration = ({ duration }) => {
  const timeFormat = moment()
    .startOf("day")
    .seconds(duration)
    .format("H:mm:ss");
  return (
    <div className="absolute bottom-2 right-2 bg-black text-white text-xs rounded-md">
      {timeFormat}
    </div>
  );
};

export default VideoDuration;
