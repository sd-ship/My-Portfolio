import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const page = () => {
    return (
        <div className="mt-20 flex justify-center  ">
            <Link
                href="https://to-do-app-gules-one.vercel.app/"
                className="max-w-sm rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
                <div className="p-4   rounded-xl transition-all duration-300 ease-in-out hover:bg-gray-600 hover:scale-105">
                    <Image
                        src="/todo.png"
                        alt="To-Do App Preview"
                        width={700}
                        height={400}
                        className="rounded-lg"
                    />
                    <p className="text-center mt-2 text-blue-600 hover:underline">Visit To-Do App</p>
                </div>
            </Link>

             
        </div>
    );
};

export default page;