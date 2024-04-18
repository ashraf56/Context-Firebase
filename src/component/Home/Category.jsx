import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from './useTitle';

const Category = () => {
    let [cate,setCate]=useState([]);
useTitle('category')
useEffect(()=>{
fetch('https://myapp-ss.vercel.app/').then(res=> res.json()).then(data=> setCate(data))

},[])

    return (
        <div className='mx-36 text-start bg-base-300 sticky top-0  '>
             <h1 className="  text-5xl pt-8 text-center font-bold">This is category </h1>
             <div className="divider"></div> 

    <div className='mt-3  '>
{cate.map(cats=> <p  className='    py-3 text-xl font-bold '  key={cats.id}>

<Link className='  p-6  '  to={`/cate/${cats.id}`} >{cats.name}</Link>

</p> )}

</div>
    
  


            
        </div>
    );
};

export default Category;