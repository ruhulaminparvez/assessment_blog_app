import React from 'react';
import ReactDOM from 'react-dom';
import './style/main.css';
import { useState } from 'react';


const baseAPIURL = 'http://localhost:8000';

const App = () => {

  const [modalVisible, setModalVisible] = React.useState(false);
  
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');

  const createBlog = (event) => {
    event.preventDefault();

    console.log('title: ' + title);
    console.log('body: ' + body);

    setTitle('');
    setBody('');
  }

  const getAllPost = async () => {
    const response = await fetch(`${baseAPIURL}/posts/`);

    const data = await response.json();

    if (response.ok) {
      console.log(data);
    }
    else {
      console.log('error');
    }
  }
  
  return (
    <div>
      <div className='header'>
        <div className='logo'>
          <p className='title'>Blogs App</p>
        </div>
        <div className='add-section'>
          <a className='add-btn' href='#' 
          onClick={() => setModalVisible(true)}> Add New Blog</a>
        </div>
      </div>
      <div className='posts'>
        <p className='textCenter'>No Posts</p>
      </div>
      <div className={modalVisible? 'modal':'modal-not-visible'}>
        <div className='modalForm'>
          <div className='formHeader'>
            <div>
              <p className='formHeaderText'>Create a Blog Post</p>
            </div>
            <div>
              <p className='closeBtn' onClick={() => setModalVisible(false)}>❎</p>
            </div>
          </div>
          <form action=''> 
            <div className='formGroup'>
              <label htmlFor='title'>Title</label>
              <input type='text' name='title' id='title' className='form-control' 
              value={title} onChange={(e) => setTitle(e.target.value)}/>
            
            </div>
            <div className='formGroup'>
              <label htmlFor='body'>Body</label>
              <textarea type='text' name='body' id='body' cols='30' rows='8' className='form-control'
              value={body} onChange={(e) => setBody(e.target.value)}/>
            </div>
            <div className='formGroup'>
              <input type='submit' className='btn' value='Submit' onClick={createBlog}/>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
