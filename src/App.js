import React from 'react';
import MainLayout from './layouts/mainLayout'
import { Route } from "react-router-dom";
import MyService from "./views/MyService/myService";
import './App.css';

function App() {
  return (
    <MainLayout>
      {/* Dynamic Components are passed down to the Layout,
          The Layout component also wraps up a essential static components  
      */}
      <Route exact path="/" component={MyService} />
    </MainLayout>
  );
}

export default App;
