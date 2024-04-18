import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header';

const News = () => {
    return (
        <div className='bg-base-200'>
            <Header></Header>
      <div className="grid grid-cols-1 gap-0 justify-center mt-5">
  

  <div className='bg-base-200 "container mx-auto ' >
<Outlet></Outlet>
  </div>


</div>
        </div>
    );
};

export default News;