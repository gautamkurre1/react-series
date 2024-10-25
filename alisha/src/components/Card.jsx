import React from 'react'
import {gk} from '../assets/icons'
import { b } from '../assets/icons';
import { c } from '../assets/icons';
import { f } from '../assets/icons';



const Card = () => {
  return (
  
    <div className="flex">
    <div className="w-1/5 p-4">
        <div className="text-white text-2xl mb-4  font-semibold  ">GAUTAM KURRE</div>
        <div className="flex items-center mb-4">
            <i className="fas fa-home sidebar-icon"></i>   
            <span className="ml-4 sidebar-text">Home</span>
        </div>
        <div className="flex items-center mb-4">
            <i className="fas fa-search sidebar-icon"></i>
            <span className="ml-4 sidebar-text">Search</span>
        </div>
        <div className="flex items-center mb-4">
            <i className="fas fa-compass sidebar-icon"></i>
            <span className="ml-4 sidebar-text">Explore</span>
        </div>
        <div className="flex items-center mb-4">
            <i className="fas fa-video sidebar-icon"></i>
            <span className="ml-4 sidebar-text">Reels</span>
        </div>
        <div className="flex items-center mb-4">
            <i className="fas fa-envelope sidebar-icon"></i>
            <span className="ml-4 sidebar-text">Messages</span>
        </div>
        <div className="flex items-center mb-4">
            <i className="fas fa-heart sidebar-icon"></i>
            <span className="ml-4 sidebar-text">Notifications</span>
        </div>
        <div className="flex items-center mb-4">
            <i className="fas fa-plus-square sidebar-icon"></i>
            <span className="ml-4 sidebar-text">Create</span>
        </div>
        <div className="flex items-center mb-4">
            <img src={gk} alt="Profile picture" className="profile-pic w-8 h-8" />
            <span className="ml-4 sidebar-text">Profile</span>
        </div>
        <div className="flex items-center">
            <i className="fas fa-bars sidebar-icon"></i>
            <span className="ml-4 sidebar-text">More</span>
        </div>
    </div>
    <div className="w-4/5 p-4">
        <div className="flex items-center mb-4">
            <img src={gk} alt="Profile picture" className="profile-pic w-24 h-24" />
            <div className="ml-4">
                <div className="text-xl font-bold">officegautam_kurrey</div>
                <div className="profile-actions mt-2">
                    <button>Edit profile</button>
                    <button>View archive</button>
                    <button>Ad tools</button>
                </div>
            </div>
        </div>
        <div className="profile-stats mb-4">
            <span>68 posts</span>
            <span>500M followers</span>
            <span>6 following</span>
        </div>
        <div className="mb-4">
            <div className="font-bold">Gautam Kurre</div>
            <div>@officegautam_kurrey</div>
            <div><a href="https://www.sites.google.com/view/adunicorn/home" className="text-blue-500">www.sites.google.com/view/adunicorn/home</a></div>
            <div>100M accounts reached in the last 30 days. <span className="text-blue-500">View insights</span></div>
        </div>
        <div className="flex justify-between border-b border-gray-700 pb-2 mb-4">
            <div className="text-center w-1/4">
                <span className="font-bold">POSTS</span>
            </div>
            <div className="text-center w-1/4">
                <span>REELS</span>
            </div>
            <div className="text-center w-1/4">
                <span>SAVED</span>
            </div>
            <div className="text-center w-1/4">
                <span>TAGGED</span>
            </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <img src={b} alt="Post image" className="post-image" />
            <img src={c} alt="Post image" className="post-image" />
            <img src={f} alt="Post image" className="post-image" />
        </div>
    </div>
</div>

  )
}

export default Card