import React, { useState } from 'react'
import './styles/App.css'
import Counter from './components/counter';
import ClassCounter from './components/ClassCounter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MyButton from './components/UI/button/myButton';
import PostForm from './components/PostForm';



function App() {
  const [posts, setPosts] = useState ([
    {id:1, title: 'JS', body: "Description"},
    {id:2, title: 'JS', body: "Description"},
    {id:3, title: 'JS', body: "Description"},
  ])


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }




  return (
    <div className='App'>

      <PostForm create={createPost}></PostForm>
      <PostList posts={posts} title="Post List" />
    </div>
  );
}

export default App;
