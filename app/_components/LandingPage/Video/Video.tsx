import React from 'react'
import "./Video.css"

export default function Video() {
  return (
    <div className="video p-4 md:px-20 py-10 text-center">
        <h2 className="text-6xl text-[#337ab7] font-bold">Rahul Gandhi Speaks</h2>
        <div className="bg-gray-300 aspect-video md:w-3/4 mx-auto my-4">
          <video className="h-full w-full" controls>
            <source src="/assets/LandingPage/video.mp4" type="video/mp4"
             />
          </video>
        </div>
    </div>
  )
}
