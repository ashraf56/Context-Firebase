import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../Auth';
import moment from 'moment';
import { Fa500Px, FaClock, FaThinkPeaks } from "react-icons/fa";
import { keys } from 'localforage';
import { Link, Outlet } from 'react-router-dom';
import Category from './Category';
import ShowContent from './ShowContent';
import useTitle from './useTitle';
const Home = () => {
  useTitle('Home')

    return (
        <div >
          

          <p className='text-4xl uppercase	'>this is home  </p>

        </div>
    );
};

export default Home;