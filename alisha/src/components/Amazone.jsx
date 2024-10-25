import React from 'react'
import {c, b, f, } from '../assets/icons'

const Amazone = () => {
  return (
  
                    <div className="bg-gray-100">
                        {/* Header */}
                        <div className="bg-orange-500 p-2 flex items-center justify-between">
                            <div className="flex items-center">
                                <input type="text" placeholder="Search genius" className="p-2 rounded w-full" />
                                <i className="fas fa-search p-2"></i>
                            </div>
                            <i className="fas fa-qrcode p-2"></i>
                        </div>
                        <div className="bg-yellow-400 p-2 text-center">
                            <span>Delivering to Raipur 492013 - Update location</span>
                        </div>
                        
                        {/* Navigation */}
                        <div className="bg-orange-500 p-2 flex justify-around  ">
                            {['Deals','Bazaar', 'Supercar',].map((item, index) => (
                                <div key={index} className="text-center">
                                    <img src={c} alt={`${item} icon`} className=" flex justify-between w-20 h-20 rounded-full font-semibold  " />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                        
                        {/* Main Banner */}
                        <div className="relative">
                            <img src={f} alt="Great Indian Festival Banner" className="w-full" />
                            <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
                                <h1 className="text-2xl font-bold">GREAT INDIAN FESTIVAL</h1>
                                <h2 className="text-xl">Diwali Special</h2>
                                <p>Get 20% Cashback</p>
                                <p>Ends 29th Oct</p>
                            </div>
                        </div>
                        
                        {/* Services */}
                        <div className="grid grid-cols-2 gap-2 p-2">
                            {[
                                { title: 'Amazon Pay', icon: 'fas fa-wallet' },
                                { title: 'Send Money', icon: 'fas fa-paper-plane' },
                                { title: 'Scan any QR', icon: 'fas fa-qrcode' },
                                { title: 'Recharge & Bills', icon: 'fas fa-file-invoice' }
                            ].map((service, index) => (
                                <div key={index} className="bg-blue-950 p-4 rounded flex items-center">
                                    <i className={`${service.icon} text-2xl mr-2`}></i>
                                    <span>{service.title}</span>
                                </div>
                            ))}
                        </div>
                        
                        {/* Deals */}
                        <div className="grid grid-cols-2 gap-2 p-2">
                            {[
                                { title: 'Deals under ₹699', image: 'https://placehold.co/100x100' },
                                { title: 'Under ₹99', image: 'https://placehold.co/100x100' },
                                { title: 'Budget Buy', image: 'https://placehold.co/100x100' },
                                { title: 'Super Saver',  }
                            ].map((deal, index) => (
                                <div key={index} className="bg-white p-4 rounded flex flex-col items-center text-black  font-semibold  ">
                                    <img src={b} alt={deal.title} className="mb-2 rounded-2xl min-h-40  " />

                                    <span>{deal.title}</span>
                                </div>
                            ))}
                        </div>
                        
                        {/* Advertisement */}
                        <div className="p-2">
                            <img src={c} alt="OnePlus Nord CE4 Ad" className="w-full rounded-3xl cursor-zoom-in " />
                        </div>
                        
                        {/* Footer Navigation */}
                        <div className="bg-white p-2 flex justify-around border-t">
                            {['Home', 'You', 'Cart', 'Menu'].map((item, index) => (
                                <div key={index} className="text-center">
                                    <i className={`fas fa-${item.toLowerCase()} text-2xl`}></i>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            };
    


export default Amazone;