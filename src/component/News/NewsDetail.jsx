import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import useTitle from '../Home/useTitle';

const NewsDetail = () => {
  useTitle('NewsDetail')
    let Fullnews=useLoaderData();
    let {_id,details,image_url,thumbnail_url,author,title,total_view,category_id,rating}=Fullnews;

   
    return (
        <div className='mx-28'>

<div className="card lg:card-side bg-base-100 shadow-xl">
<div className="card-body">  <h2 className="card-title">{title}</h2>
  <figure><img src={image_url} className=' w-full' alt="Album"/></figure>
  
  
    <p>{details}</p>
    <div className="card-actions justify-end">
    <Link  to={`/cate/${category_id}`}>
<button className='btn btn-accent'>All catagory</button>
</Link>
    </div>
  </div>
</div>



  
        </div>
    );
};

export default NewsDetail;