import React from "react";
import { useState, useEffect } from "react";

import { FaLocationDot } from "react-icons/fa6";

const BookingPage = () => {
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");
  const [duration, setDuration] = useState("");
  const [mettingOption, setMettingOption] = useState("in-Personal");
  const [toogleInput, setToogleInput] = useState(false);

  const zoom = "consulting/assets/BookingImage/zoom.png";
  const google_meet = "consulting/assets/BookingImage/google_meet.png";
  const microsoft_team = "consulting/assets/BookingImage/microsoft_team.png";
  const telegram = "consulting/assets/BookingImage/telegram.png";
  const whatsapp = "consulting/assets/BookingImage/whatsapp.png";

  useEffect(() => {
    if (!fromTime || !toTime) {
      setDuration(null);
      return; // No calculation if any time is not set
    }

    // Create Date objects with the time, assuming the same date to simplify calculation
    const fromDate = new Date(`1970-01-01T${fromTime}:00`);
    const toDate = new Date(`1970-01-01T${toTime}:00`);

    // Calculate the difference in milliseconds
    const diffMilliseconds = toDate - fromDate;

    // If the result is negative, it means 'To' time is before 'From' time
    if (diffMilliseconds < 0) {
      setDuration("The 'To' time must be after the 'From' time.");
    } else {
      // Convert milliseconds to minutes (or hours, seconds, etc.)
      const diffMinutes = diffMilliseconds / 1000 / 60;
      setDuration(diffMinutes); // Now it's a number
    }
  }, [fromTime, toTime]); // This effect will run every time fromTime or toTime changes

  return (
    <section className="pt-[80px] lgMax:pt-[60px] mdMax:pt-[52px] ">
      <div className="max-w-[1140px] mx-auto my-0 lgMax:max-w-[920px] lgMax:mx-auto lgMax:my-0 mdMax:max-w-[720px] mdMax:mx-auto mdMax:my-0 py-14 lgMax:px-12">
        <iframe
          class="airtable-embed"
          src="https://airtable.com/embed/appRt9Jfof8PTQWKl/pagMMYOZpvtTOCWgz/form"
          frameborder="0"
          onmousewheel=""
          width="100%"
          height="1385"
          style={{ background: "transparent" }}
        ></iframe>
      </div>
    </section>
  );
};

export default BookingPage;
