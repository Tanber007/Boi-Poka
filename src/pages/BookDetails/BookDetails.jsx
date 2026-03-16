import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB } from '../../Utilits/addToDB';

const BookDetails = () => {
    const {id}= useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);
    const {bookName, image} = singleBook;

    const handelMarkAsRead = id =>{
        //store with id 
        // where to store
        // arr or collection
        // if book already exist the show a alart
        // if book not exist then push in the collection or array

        addToStoreDB(id);
    }

    return (
        <div className='w-2/3 mx-auto p-4'>
            <img className='w-48' src={image} alt="" />
            <h5>{bookName}</h5>

            <button onClick={()=>handelMarkAsRead(id)} className="btn btn-neutral">mark as Read</button>
            <button className="btn btn-primary">add to WishList</button>
        </div>
    );
};

export default BookDetails;