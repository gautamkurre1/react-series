import React from 'react'
import {gk} from './assets/icons'


const Whatsapp = () => {
  return (
  
    <div className="p-4">
    <header className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Whatsapp</h1>
        <div className="flex items-center space-x-4">
            <i className="fas fa-search"></i>
            <i className="fas fa-qrcode"></i>
            <i className="fas fa-camera"></i>
            <i className="fas fa-ellipsis-v"></i>
        </div>
    </header>
    <div className="relative mb-4">
        <input type="text" placeholder="Ask Meta AI or Search" className="w-full p-2 rounded-full bg-gray-800 text-gray-400 pl-10" />
        <i className="fas fa-search absolute left-3 top-3 text-blue-600"></i>
    </div>
    <div className="space-y-4">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                    <i className="fas fa-users text-gray-500"></i>
                </div>
                <div>
                    <h2 className="font-bold">SVG Tech</h2>
                    <p className="text-sm text-gray-400">Announcements</p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <i className="fas fa-video text-gray-400"></i>
                <span className="bg-green-500 text-white text-xs rounded-full px-2">10</span>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <img src={gk} alt="Profile picture of Bajaj Traders Mangla Bsp" className="w-12 h-12 rounded-full" />
                <div>
                    <h2 className="font-bold">Gk Tech </h2>
                    <p className="text-sm text-gray-400 flex items-center">
                        <i className="fas fa-check-double text-blue-500 mr-1"></i>
                        <i className="fas fa-image mr-1"></i> Photo
                    </p>
                </div>
            </div>
            <p className="text-sm text-gray-400">Yesterday</p>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <img src={gk} alt="Profile picture of Sudha Sales Bilaspur" className="w-12 h-12 rounded-full" />
                <div>
                    <h2 className="font-bold">Adunicorn</h2>
                    <p className="text-sm text-gray-400 flex items-center">
                        <i className="fas fa-file-alt mr-1"></i>file
                    </p>
                </div>
            </div>
            <p className="text-sm text-gray-400">Yesterday</p>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <img src={gk} alt="Profile picture of Gautam Kurrey" className="w-12 h-12 rounded-full" />
                <div>
                    <h2 className="font-bold">Gautam Kurrey (You)</h2>
                    <p className="text-sm text-gray-400 flex items-center">
                        <i className="fas fa-video mr-1"></i> Video
                    </p>
                </div>
            </div>
            <p className="text-sm text-gray-400">10/16/24</p>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <img src={gk} alt="Profile picture of Jitendra Bhaiya" className="w-12 h-12 rounded-full" />
                <div>
                    <h2 className="font-bold">Gk Fintech</h2>
                    <p className="text-sm text-gray-400 flex items-center">
                        <i className="fas fa-check-double text-blue-500 mr-1"></i>
                        <i className="fas fa-file-image mr-1"></i> png
                    </p>
                </div>
            </div>
            <p className="text-sm text-gray-400">10/16/24</p>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <div className="w-14 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <i className="fab fa-whatsapp text-white"></i>
                </div>
                <div>
                    <h2 className="font-bold">WhatsApp</h2>
                    <p className="text-sm text-gray-400 flex items-center">
                        <i className="fas fa-video mr-1"></i> Share updates in real-time with video n...
                    </p>
                </div>
            </div>
            <p className="text-sm text-gray-400">10/12/24</p>
        </div>
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <img src={gk} alt="Profile picture of Jitendra Bhaiya" className="w-12 h-12 rounded-full" /> 
                <div>
                    <h2 className="font-bold">United State</h2>
                    <p className="text-sm text-gray-400 flex items-center">
                        <i className="fas fa-briefcase mr-1"></i> Singapore
                    </p>
                </div>
            </div>
            <div className="flex items-center space-x-2">
                <i className="fas fa-image text-gray-400"></i>
                <i className="fas fa-chevron-right text-gray-400"></i>
            </div>
        </div>

        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                <img src="https://placehold.co/48x48" alt="Profile picture of Webtrack Technologies C116" className="w-12 h-12 rounded-full" />
                <div>
                    <h2 className="font-bold">Webtrack Technologies C116</h2>
                </div>
            </div>
        </div>
    </div>
    <footer className="fixed bottom-0 left-0 right-0 bg-gray-800 p-4 flex justify-around">
        <div className="flex flex-col items-center">
            <i className="fas fa-comment text-green-500"></i>
            <span className="text-xs text-green-500">Chats</span>
        </div>
        <div className="flex flex-col items-center">
            <i className="fas fa-circle-notch text-gray-400"></i>
            <span className="text-xs text-gray-400">Updates</span>
        </div>
        <div className="flex flex-col items-center">
            <i className="fas fa-users text-gray-400"></i>
            <span className="text-xs text-gray-400">Communities</span>
        </div>
        <div className="flex flex-col items-center">
            <i className="fas fa-phone-alt text-gray-400"></i>
            <span className="text-xs text-gray-400">Calls</span>
        </div>
    </footer>
</div>

  )
}

export default Whatsapp