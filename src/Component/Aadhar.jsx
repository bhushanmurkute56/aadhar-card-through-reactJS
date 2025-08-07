import React from 'react';
import { useLocation } from 'react-router';
import triColor from "./../assets/triColor.png";
import satyamevjayate from "./../assets/satyamev-jayate.jpg";
import aadharImg from "./../assets/aadharimg.png";
import aadharCardTriColor from "./../assets/aadhar-card-tricolor.jpg";
import manImg from './../assets/man.png';
import womanImg from "./../assets/woman.png";

function Aadhar() {
    const location = useLocation();
    const {firstName, lastName, dob, aadhar, gender} = location.state || {};
    const genderImg = gender === "Male"? manImg : gender === "Female"? womanImg : "";
  return (
    <div className='flex justify-center items-center inset-0 absolute'>
      <div className='p-16 rounded-2xl bg-gray-200 shadow-2xl shadow-gray-100'>
        <div className='h-[300px] w-[380px] rounded-2xl relative shadow-xl bg-white'>
          <div className='flex justify-center'>
            <img src={aadharCardTriColor} alt="" className='h-[45px] w-[130px] mt-3 ml-[-25px]'/>
            <img src={satyamevjayate} alt="" className='h-15 w-10 ml-9 mt-1'/>
            <img src={aadharImg} alt="" className='h-15 w-20 ml-15'/>
          </div>
          <h1 className='text-center mt-2 text-lg font-bold'>GOVERNMENT OF INDIA</h1>
          <div className='text-center mt-3'>
            <h1 className='font-bold text-xl ml-23'>{firstName.toUpperCase()} {lastName.toUpperCase()}</h1>
            <h1 className='font-semibold ml-[-0px]'>{gender}</h1>
            <h1 className='font-semibold ml-[30px]'>{dob}</h1>
            <h1 className='font-bold text-2xl mt-3 ml-[50px]'>{aadhar}</h1>
            <img src={genderImg} alt="" className='h-25 w-25 absolute left-2 top-29 bg-gray-200 p-1 rounded-xl'/>
            <div className='p-4 mt-2'>
              <h1 className='border-t-2 border-brown-400 text-xl font-bold'>
                MY AADHAR
              </h1>
            </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Aadhar;