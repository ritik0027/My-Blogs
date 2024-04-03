import React from 'react';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import AllPost from './AllPost';

function Home() {
    const authStatus = useSelector(state => state.status);
    if (!authStatus) return (
        <div className='w-full py-2'>
            <div className="hero min-h-screen object-cover" style={{ backgroundImage: 'url(../../src/assets/hero.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome !!</h1>
                        <p className="mb-5">
                        Welcome to My Blogs App, your ultimate platform for expressing and sharing your thoughts with the world! Whether you're an aspiring writer, a seasoned blogger, or simply looking to connect with like-minded individuals, our platform provides the perfect space for you to create, publish, and engage with captivating content. With user-friendly features, seamless navigation, and a vibrant community, My Blogs App empowers you to unleash your creativity and make your voice heard. Join us today and embark on a journey of inspiration, discovery, and endless possibilities in the world of blogging.
                        </p>
                        <Link
                         to={'/login'}
                         className='btn btn-primary'
                         >
                        Get Started
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )


    return (
        <div className='w-full py-8'>
            <AllPost />
        </div>
    );
}

export default Home;
