import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from './NewsCard';

const ShowContent = () => {
    let {id}=useParams();
let ctaNews=useLoaderData();
    return (
        <div className='text-start'>
     { id &&  <h1>This is catetgory {ctaNews.length}</h1>}

{
    ctaNews.map(news=> <NewsCard  key={news._id} 
    news={news}
    ></NewsCard>)
}

                </div>
    );
};

export default ShowContent;