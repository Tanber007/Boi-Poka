import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {

    const [allBooks, setAllBooks] = useState([]);

    // useEffect (() =>{
    //     fetch("data.json")
    //     .then(res => res.json())
    //     .then(data => {
    //         setAllBooks(data)
    //     }, [])
    // })

    // const bookPromise = fetch('./data.json').then(res=>res.json())

    return (
        <div>
            <h1 className='text-3xl text-center p-6 font-semibold'>Booksss</h1>
            <Suspense fallback={<span>loading...</span>}>
             <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 '>
                {
                data.map((singleBook) =><Book key={singleBook.bookID} singleBook={singleBook}></Book>)
             }
             </div>
            </Suspense>
        </div>
    );
};

export default Books;