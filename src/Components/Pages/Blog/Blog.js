import React from 'react';
import SharedNav from '../Shared/SharedNav';
import Category from './Category/Category';
import ShortReads from './ShortReads/ShortReads';
import Trending from './Trending/Trending';

const Blog = () => {
    return (
        <>
            <SharedNav />
            <div className='mid-container'>
                <Trending />
                <ShortReads/>
                <Category/>
            </div>
        </>
    );
};

export default Blog;