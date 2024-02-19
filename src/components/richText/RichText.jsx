import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Import the styles
import './RichText.css'; // Your custom styling

const RichText = () => {
  const [value, setValue] = useState('');

  return (
    <>
    <h3>RichText Box</h3>
    <div className="richTextEditor">
      <ReactQuill theme="snow" value={value} onChange={setValue} />
    </div>
    <button className='button'>Save</button>
    </>
  );
};

export default RichText;
