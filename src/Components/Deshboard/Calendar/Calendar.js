import React from 'react';
import TeacherTable from './TeacherTable/TeacherTable';
import SchoolCaleder from './SchoolCalender/SchoolCaleder';

function Calendar(props) {
  return (
    <div style={{display:'flex',width:"100%",justifyContent:'space-around'}}>
      <SchoolCaleder />
      <TeacherTable/>
    </div>
  );
}

export default Calendar;