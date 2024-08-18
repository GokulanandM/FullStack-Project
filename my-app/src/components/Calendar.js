import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events] = useState([
    {
      title: 'Silambam Class',
      start: new Date(2024, 8, 21, 10, 0),  // Date: September 21, 2024, 10:00 AM
      end: new Date(2024, 8, 21, 12, 0),    // Date: September 21, 2024, 12:00 PM
    },
    {
      title: 'Silambam Competition',
      start: new Date(2024, 8, 28, 14, 0),  // Date: September 28, 2024, 2:00 PM
      end: new Date(2024, 8, 28, 17, 0),    // Date: September 28, 2024, 5:00 PM
    }
  ]);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Silambam Calendar</h1>
      <div style={{ height: '500px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          eventPropGetter={(event) => {
            const backgroundColor = event.title.includes('Class') ? '#3174ad' : '#f44336';
            return { style: { backgroundColor } };
          }}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
