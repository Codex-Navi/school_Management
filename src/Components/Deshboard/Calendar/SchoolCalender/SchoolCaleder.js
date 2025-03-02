import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function SchoolCaleder() {
  return (
    <div>
        <h1 style={{color: '#6b46c1',fontSize:'18px',fontWeight:'bold'}}>School Calendar</h1>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DateCalendar />
    </LocalizationProvider>
    </div>
  );
}