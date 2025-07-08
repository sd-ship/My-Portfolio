import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    return (
        <div className="m-10 flex justify-center items-center  gap-6 flex-wrap">
            <div className='rounded-2xl '>
                <div className=" hover:bg-gray-600 hover:scale-110 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 group relative">
                    <Image
                        src="/todo.png"
                        alt="To-Do App Preview"
                        width={700}
                        height={400}
                        className="rounded-lg w-full"
                    />

                    <div className="absolute bottom-0 right-0 flex items-center justify-center  bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                            href="https://to-do-app-gules-one.vercel.app/"
                            className="px-4 text-3xl py-2 bgcolor text-white rounded-md "
                        >
                            🔗
                        </Link>
                    </div>
                    <div className='md:hidden mt-5 w-full text-center'>
                        <Link
                            href="https://to-do-app-gules-one.vercel.app/"
                            className="px-4 text-center  py-2 bg-gray-500 text-white rounded-md "
                        >
                            Visit To Do App
                        </Link>
                    </div>
                </div>

            </div>

            <div className='rounded-2xl mt-10'>
                <div className=" hover:bg-gray-600 hover:scale-110 rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 group relative">
                    <Image
                        src="/JariRooms.png"
                        alt="To-Do App Preview"
                        width={700}
                        height={400}
                        className="rounded-lg w-full"
                    />

                    <div className="absolute bottom-0 right-0 flex items-center justify-center  bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Link
                            href="https://jari-rooms-dhiraj-birajdar.vercel.app/"
                            className="px-4 text-3xl py-2 bgcolor text-white rounded-md "
                        >
                            🔗
                        </Link>
                    </div>
                    <div className='md:hidden mt-5 w-full text-center'>
                        <Link
                            href="https://jari-rooms-dhiraj-birajdar.vercel.app/"
                            className="px-4 text-center  py-2 bg-gray-500 text-white rounded-md "
                        >
                            Visit Jari Rooms App
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;