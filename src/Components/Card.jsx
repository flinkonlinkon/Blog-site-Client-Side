import React from 'react'
import { AiFillLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";


export default function Card() {
  return (
    <div className='mx-auto'>
      <div className="card bg-base-100 w-96 md:w-[500px] shadow-xl">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex gap-3'>
      <div>
        <img className='w-12 h-12 rounded-full' src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="" />
      </div>
      <div className='text-xl font-medium'>
        Name......
      </div>
    </div>
    <h2 className="card-title">Title</h2>
    <p>DEspriction</p>
    <div className='flex gap-1'>
    <p className='text-lg'><AiFillLike /></p>
      <p className='text-lg'><BiDislike /></p>
    </div>
    
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Details</button>
    </div>
  </div>
</div>
    </div>
  )
}
