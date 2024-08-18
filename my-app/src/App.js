import React from 'react';
import CalendarComponent from './components/Calendar';
import CourseDetails from './components/CourseDetails';
import CustomerService from './components/CustomerService';
import LocationNavigation from './components/LocationNavigation';

function App() {
  return (
    <div>
      <h1>Silambam Academy</h1>
      <CalendarComponent />
      <CourseDetails />
      <CustomerService />
      <LocationNavigation />
    </div>
  );
}

export default App;
