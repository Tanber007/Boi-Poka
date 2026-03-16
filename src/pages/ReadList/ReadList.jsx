import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoreBook } from '../../Utilits/addToDB';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const [sort, setShort] = useState('');
    const data = useLoaderData();

    useEffect(() => {
        const storedBookData = getStoreBook();
        const ConvertedStoredBooks = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => ConvertedStoredBooks.includes(book.bookId));
        setReadList(myReadList)
    }, [])


    const handleSort = (type) => {
        setShort(type)
        if(type === "Pases"){
            const sortedByPage = [...readList].sort((a,b) => a.totalPage - b.totalPage);
            setReadList(sortedByPage)
        }

         if(type === "Reationg"){
            const sortedByRating = [...readList].sort((a,b) => a.rating - b.rating);
            setReadList(sortedByRating)
        }
    }

    return (
        <div>
            <details className="dropdown">
                <summary className="btn m-1">Short By : {sort? sort:""}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li><a onClick={() => handleSort("Pases")}>Pases</a></li>
                    <li><a onClick={() => handleSort("Reationg")}>Reationg</a></li>
                </ul>
            </details>

            <Tabs>
                <TabList>
                    <Tab>Read Book List</Tab>
                    <Tab>My wish List</Tab>
                </TabList>

                <TabPanel>
                    <h2>Book i read {readList.length}</h2>
                    {
                        readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>My wish List</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;