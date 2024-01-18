import React from "react";

function ProfileBadge() {
  return (
    <div className='fixed bottom-0 w-full px-4 z-10 max-w-[375px]'>
      <div className='p-4 bg-white rounded-[20px]'>
        <div className='flex justify-between items-center mt-2'>
          <h1 className='font-semibold text-2xl color-dark'>Yelena G.</h1>
          <button className='btn btn-sm btn-primary rounded-full text-white'>Follow</button>
        </div>
        <h2 className='text-sm text-gray-400 font-medium'>Female / Photographer</h2>
        <p className='font-medium text-gray-600'>Take control of your destiny.</p>
        <p className='font-medium text-lg text-gray-600 my-2'>Collection</p>
        <div className='flex justify-between gap-4 my-4'>
          <div className='img-container w-1/5 pt-10'>
            <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
          </div>
          <div className='img-container w-1/5 pt-20'>
            <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
          </div>
          <div className='img-container w-1/5 pt-20'>
            <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
          </div>
          <div className='img-container w-1/5 pt-20'>
            <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
          </div>
        </div>
        <div className='flex justify-center'>
          <button className='btn btn-sm btn-primary rounded-full text-white'>See More</button>
        </div>
      </div>
    </div>
  );
}

export default ProfileBadge;
