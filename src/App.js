import React, { createContext } from 'react';
import MainLayout from './layouts/mainLayout'
import { Route } from "react-router-dom";
import MyService from "./views/MyService/myService";
import './App.css';
import artBag from "./assets/serviceImgs/art-bag.png";
import desk from "./assets/serviceImgs/desk.png";
import docBlue from "./assets/serviceImgs/doc-blue.png";
import docDarkGreen from "./assets/serviceImgs/doc-dark-green.png";
import dockGreen from "./assets/serviceImgs/doc-green.png";
import dockYellow from "./assets/serviceImgs/doc-yellow.png";
import paperTime from "./assets/serviceImgs/paper-time.png";
import {ServiceContext} from "./contexts/ServiceContext";

const servicesList = [
  {Title: 'حالة طلباتي', Description: 'تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في المكتب..', Icon:paperTime },
  {Title: 'طلبات متنوعة', Description: 'تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في المكتب..', Icon:artBag},
  {Title: 'طلبات من مكتب التطوير المؤسسي', Description: '', Icon:dockGreen},
  {Title: 'طلبات من قسم الاتصال المؤسسي', Description: '', Icon:docDarkGreen},
  {Title: ' طلبات من قسم الموارد البشرية', Description: '', Icon:dockYellow},
  {Title: 'طلبات من قسم الخدمات الإدارية', Description: '', Icon:docBlue},
  {Title: 'مكتبي', Description: ' تشمل طلبات القرطاسية صيانة المكتب والمعدات الأخرى في المكتب..', Icon:desk}
]

function App() {
  return (
    <ServiceContext.Provider value={servicesList} >
    <MainLayout>
      {/* Dynamic Components are passed down to the Layout,
          The Layout component also wraps up a essential static components  
      */}
      <Route exact path="/" component={MyService} />
    </MainLayout>
    </ServiceContext.Provider>
  );
}

export default App;
