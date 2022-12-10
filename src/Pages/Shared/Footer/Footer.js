import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer class="text-black bg-base-200">
        <div class="container p-6 mx-auto">
            <div class="lg:flex">
                <div class="w-full -mx-6 lg:w-2/5">
                    <div class="px-6">
                        <div>
                            <Link href="#" class="text-2xl font-semibold">Promit Biswas</Link>
                        </div>
    
                        <p class="max-w-sm mt-2 text-gray-500 dark:text-gray-400">Join 31,000+ other and never miss out on new tips, tutorials, and more.</p>
    
                       
                    </div>
                </div>
    
                <div class="mt-6 lg:mt-0 lg:flex-1">
                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div>
                            <h3 class="text-2xl font-semibold">About</h3>
                            <Link href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Company</Link>
                            <Link href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">community</Link>
                            <Link href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Careers</Link>
                        </div>
    
                        <div>
                            <h3 class="text-2xl font-semibold">Blog</h3>
                            <Link href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Tec</Link>
                            <Link href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Music</Link>
                            <Link href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Videos</Link>
                        </div>
    
                        <div>
                            <h3 class="text-gray-700 uppercase dark:text-white">Products</h3>
                            <Link href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Mega cloud</Link>
                            <Link href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Aperion UI</Link>
                            <Link href="#" class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">Port UI</Link>
                        </div>
    
                        <div>
                            <h3 class="text-2xl font-semibold">Contact</h3>
                            <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">+1 526 654 8965</span>
                            <span class="block mt-2 text-sm text-gray-600 dark:text-gray-400 hover:underline">promitms7@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
    
            <hr class="h-px my-6 bg-gray-200 border-none dark:bg-gray-700"/>
    
            <div>
                <p class="text-center text-gray-500 dark:text-gray-400">© Brand 2020 - All rights reserved</p>
            </div>
        </div>
    </footer>
    );
};

export default Footer;