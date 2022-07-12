import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Bars } from  'react-loader-spinner';
import '../loader.css';

const Loader = () => {
  return (
    <>
    <div className='loader'>
    <Bars color="#00BFFF" height={90} width={90}  />
    </div>
    </>
   
  );
}

export default Loader;