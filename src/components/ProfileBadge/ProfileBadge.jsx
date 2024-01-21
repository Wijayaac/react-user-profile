import React, { useState } from "react";
import { range } from "../../utils/range";

function ProfileBadge() {
  // TODO: handle the state using context provider
  const [isMaximize, setIsMaximize] = useState(false);
  return (
    <div className='fixed bottom-0 w-full px-4 z-10 max-w-[375px]'>
      <div className='p-4 bg-white rounded-[20px]'>
        <ProfileContent isMaximize={isMaximize} />
        <div className='flex justify-center relative z-10'>
          <button className='btn btn-sm btn-primary rounded-full text-white' onClick={() => setIsMaximize(!isMaximize)}>
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

function ProfileContent({ isMaximize }) {
  return (
    <>
      <div className='flex justify-between items-center mt-2'>
        <h1 className='font-semibold text-2xl color-dark'>Yelena G.</h1>
        <button className='btn btn-sm btn-primary rounded-full text-white'>Follow</button>
      </div>
      <h2 className='text-sm text-gray-400 font-medium'>Female / Photographer</h2>
      <p className='font-medium text-gray-600'>Take control of your destiny.</p>
      <p className='font-medium text-lg text-gray-600 my-2'>Collection</p>
      <div className={`grid justify-between gap-4 my-4 ${isMaximize ? "grid-cols-2" : "grid-cols-4"} max-h-[54vh] overflow-auto`}>
        {/* TODO use loop on this condition */}
        {isMaximize
          ? range(0, 8).map((i) => (
              <div className=' w-full'>
                <div className='img-container pt-20'>
                  <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
                </div>
              </div>
            ))
          : range(0, 3).map((i) => (
              <div className=' w-full'>
                <div className='img-container pt-20'>
                  <img src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg' />
                </div>
              </div>
            ))}
      </div>
    </>
  );
}

export default ProfileBadge;
