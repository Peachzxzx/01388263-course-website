import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { differenceInCalendarDays } from "date-fns";

function isSameDay(a, b) {
	return differenceInCalendarDays(a, b) === 0;
}
let coloredDates = [new Date()];
function tileClassName({ date, view }) {
	// Add class to tiles in month view only
	if (view === "month") {
		// Check if a date React-Calendar wants to check is on the list of dates to add class to
		if (coloredDates.find((dDate) => isSameDay(dDate, date))) {
			return "";
		}
	}
}

const MyCalendar = () => {
	const [value, onChange] = useState(new Date());

	return (
		<div>
			<Calendar onChange={onChange} value={value} tileClassName={tileClassName} />
		</div>
	);
};

export default MyCalendar;
