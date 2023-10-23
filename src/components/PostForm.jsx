import React from 'react';

const PostForm = (create) => {

    const [post, setPost] = useState({title: '', body: ''})



    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Data.now()
        }
        create(newPost)
        setPost({title: '', body: ''})
      }

      
    return (
        <form className='create-form' action="">

            <MyInput
            value={post.title} 
            onChange={e => setPost({...post, title: e.target.value})}
            type="text" 
            placeholder='Post Name'
            />
            <MyInput 
            value={post.body} 
            onChange={e => setPost({...post, body: e.target.value})}
            type="text"
            placeholder='Post Description' 
            />

            <MyButton onClick={addNewPost}>Create Post</MyButton>

</form>

    );
};

export default PostForm;