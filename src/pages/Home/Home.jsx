import React from 'react';
import bookimg from '../../assets/books.jpg'
import Books from '../Books/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
            <div className='flex justify-around items-center p-4 m-auto w-full'>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <button className="btn btn-neutral">Neutral</button>
            </div>
            <div>
                <img className='w-3/12' src={bookimg} alt="" />
            </div>

            <Books data={data}></Books>
        </div>
    );
};

export default Home;