import React from 'react'
import {gk} from './assets/icons'
import { f } from './assets/icons'
import { b } from './assets/icons'
import { c } from './assets/icons'


const Profile = () => {
  return (
    <div className="p-4">

    <div className="flex items-center mb-4">
    <div className="flex items-center justify-between">
                        <div className="text-lg font-bold">officegautam_kurrey</div>
                        <div className="flex space-x-10">
                            <i className="fas fa-bell"></i>
                            <i className="fas fa-plus-square"></i>
                            <i className="fas fa-bars"></i>
                        </div>
     </div>
     
    </div>
    <div className="flex justify-between items-center mb-4">
    <img src={gk} alt="Profile picture of the user" className="profile-pic mr-4 w-[80px] h-[80px]" />
        <div className="text-center">
            <div className="text-lg font-bold">69</div>
            <div className="text-sm text-gray-400">posts</div>
        </div>
        <div className="text-center">
            <div className="text-lg font-bold">500M</div>
            <div className="text-sm text-gray-400">followers</div>
        </div>
        <div className="text-center">
            <div className="text-lg font-bold">6</div>
            <div className="text-sm text-gray-400">following</div>
        </div>
    </div>
    <div className="mb-4">
        <div className='font-serif font-bold' >Gautam Kurre</div>
        <div className="text-sm">@officegautam_kurrey</div>
        <a href="https://www.sites.google.com/view/adunicorn/home" className="text-blue-500 text-sm">www.sites.google.com/view/adunicorn/home</a>
    </div>
    <div className="bg-gray-800 p-2 rounded mb-4">
        <div className="text-sm">Professional dashboard</div>
        <div className="text-xs text-gray-400">100M views in the last 30 days.</div>
    </div>
    <div className="flex justify-between mb-4 ">
        <button className="bg-gray-800 text-white py-1 px-9 rounded   ">Edit profile</button>
        <button className="bg-gray-800 text-white py-1 px-9 rounded">Share profile</button>
    </div>
    <div className="flex justify-around mb-4">
        <i className="fas fa-th-large icon"></i>
        <i className="fas fa-play-circle icon"></i>
        <i className="fas fa-user-circle icon"></i>
    </div>
    <div className="grid grid-cols-3 gap-1">
        <img src={f} alt="Post image 1" className="post-image w-[150px] h-[100px] " />
        <img src={b} alt="Post image 2" className="post-image w-[150px] h-[100px]" />
        <img src={c} alt="Post image 3" className="post-image w-[150px] h-[100px]" />
        <img src={c} alt="Post image 4" className="post-image w-[150px] h-[100px]" />
        <img src={f} alt="Post image 5" className="post-image w-[150px] h-[100px]" />
        <img src={b} alt="Post image 6" className="post-image w-[150px] h-[100px]" />
        <img src={b} alt="Post image 7" className="post-image w-[150px] h-[100px]" />
        <img src={c} alt="Post image 8" className="post-image w-[150px] h-[100px]" />
        <img src={f} alt="Post image 9" className="post-image w-[150px] h-[100px]" />
    </div>
    <div className="nav-icons mt-4 flex justify-between ">
                        <i className="fas fa-home  "></i>
                        <i className="fas fa-search"></i>
                        <i className="fas fa-plus-square"></i>
                        <i className="fas fa-heart"></i>
                        <i className="fas fa-user-circle "></i>
    </div>
</div>
  )
}

export default Profile