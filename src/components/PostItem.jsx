import React from 'react';
import MyButton from './UI/button/myButton';

const PostItem = (props) => {
    return (
        <div className="post">

        <div className="post__content">
          <h3>
          {props.post.number} {props.post.title}
          </h3>
          <p>
            {props.post.body}
          </p>
        </div>
        <div className="post__btns">
          <MyButton>Delete</MyButton>
        </div>

      </div>
    );
};

export default PostItem;