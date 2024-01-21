import { ArrowLeft, Menu } from "react-feather";
import React from "react";

function TopActionButton() {
  // TODO handle back state using context provider
  return (
    <div className='flex justify-between max-w-[375px] py-2 fixed top-0 w-full z-10'>
      <div className='btn btn-ghost'>
        <ArrowLeft className='text-white' />
      </div>
      <div className='btn btn-ghost'>
        <Menu className='text-white' />
      </div>
    </div>
  );
}

export default TopActionButton;
