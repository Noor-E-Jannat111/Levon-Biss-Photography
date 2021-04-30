import React from 'react';
import './BlogsItem.css'
const BlogsItem = ({ image }) => {
    return (
        <div className='col-lg-4'>
            <div className="img-blog">
                <img src={image.img} alt="" />
            </div>
        </div>
    );
};

export default BlogsItem;