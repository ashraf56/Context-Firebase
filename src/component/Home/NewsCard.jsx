import React from 'react';
import { FaBeer, FaBookmark, FaRegBookmark, FaRegStar, FaShare, FaShareAlt, FaShareAltSquare } from 'react-icons/fa';
import { AiFillStar, AiOutlineEye, AiOutlineStar, } from "react-icons/ai";
import { Link } from 'react-router-dom';
import moment from 'moment';
import Rating from 'react-rating';
import useTitle from './useTitle';

const NewsCard = ({news}) => {
let {_id,details,image_url,thumbnail_url,author,title,total_view,category_id,rating}=news;

    return (
        <div className='my-4 text-start'>
            <div className="card w-9/12 bg-base-100 shadow-xl ">

            <div className="card m-4 bg-base-200 p-6  ">

    <div className="flex items-center ">
  <div className="flex-none">
  
 <div className="avatar">
  <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src={author.img} />
    
  </div>
</div>
  </div>
  <div className="flex-auto w-64 ...">
  <div className='text-start ps-3'>
    <h2 className="card-title ">{author.name}</h2> 
    <p>{moment(author.published_date).format('yyyy-MM-DD')}
</p>
</div>
  </div>
  <div className="flex-auto  ...">
  <div className='flex ms-6'>
       <span className='px-2'> <FaRegBookmark/></span>
        <FaShareAlt/>
    </div>
  </div>
</div>       
   
    </div>
  <div className="card-body">
    <h2 className="card-title">{title}</h2> </div>
    <figure><img src={image_url} alt="Shoes" /></figure>
    <div className="card-body">
{ 
details.length < 250 ? <p>{details}</p>:
 <p>{details.slice(0,250)}.... <Link to={`/news/${_id}`}> <button className='text-amber-600 font-bold '>Read more</button>
 </Link>
</p>

}

   
   
  </div>
   <div className=' mx-10 my-6 flex  justify-between '> 
   
        <p className='  flex-grow'>
       
        <span className='text-yellow-600 items-center'>

<Rating
placeholderRating={rating.number}
readonly
  emptySymbol={<FaRegStar/> }
  placeholderSymbol={ <AiFillStar/> }
  fullSymbol={ <AiFillStar/>}>
</Rating> <span className='ps-1  text-black font-semibold'>{rating.number}</span>
            </span>  
              
        </p>
        <p></p>
<p className='flex  items-center '>
    <span><AiOutlineEye/> </span>
    <span className='ps-2'>{total_view}</span>
</p>

    </div>
</div>
        </div>
    );
};

export default NewsCard;