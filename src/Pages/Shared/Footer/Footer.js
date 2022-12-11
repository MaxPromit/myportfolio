import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-black bg-base-200">
        <div className="container p-6 mx-auto">
            <div className="lg:flex">
                <div className="w-full -mx-6 lg:w-2/5">
                    <div className="px-6">
                        <div>
                            <Link href="#" className="text-2xl font-semibold">Promit Biswas</Link>
                        </div>
    
                        <p className="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>
    
                       
                    </div>
                </div>
    
                <div className="mt-6 lg:mt-0 lg:flex-1">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div>
                            <h3 className="text-2xl font-semibold">About</h3>
                            <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</Link>
                            <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</Link>
                            <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</Link>
                        </div>
    
                        <div>
                            <h3 className="text-2xl font-semibold">Blog</h3>
                            <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</Link>
                            <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</Link>
                            <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</Link>
                        </div>
    
                        <div>
                            <h3 className="text-2xl font-semibold">Products</h3>
                            <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</Link>
                            <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</Link>
                            <Link href="#" className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Port UI</Link>
                        </div>
    
                        <div>
                            <h3 className="text-2xl font-semibold">Contact</h3>
                            <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+880 1797430977</span>
                            <span className="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">promitms7@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
    
            <hr className="h-px my-6 bg-gray-200 border-none dark:bg-gray-700"/>
    
            <div>
                <p className="text-center text-gray-500 dark:text-gray-400">© Brand 2020 - All rights reserved</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;