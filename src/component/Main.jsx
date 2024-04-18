import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Category from './Home/Category';
import ShowContent from './Home/ShowContent';
import { FaThinkPeaks } from 'react-icons/fa';
import moment from 'moment';
const Main = () => {
    return (
        <div className='text-center h-full bg-base-200 content-center	'>
            <Header></Header>
            <p className='text-9xl uppercase	'>this is home  </p>
            <p className='text-2xl flex justify-center'> <span className='pe-2 text-4xl'><FaThinkPeaks/></span> { moment().format("dddd, MMMM Do YYYY, h:mm a")}</p>
            <div className="grid grid-cols-2 gap-0 justify-center mt-5">
  <div >
<Category></Category>

  </div>

  <div >
<Outlet></Outlet>
  </div>


</div>
            
        </div>
    );
};

export default Main;