import { Link } from "react-router";

const Book = ({ singleBook }) => {

    const {bookName, bookId, publisher, yearOfPublishing, tags, category, rating, image } = singleBook;

    return (
        
            <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-sm border p-4">
                <figure className="p-4 bg-gray-300 w-2/3 mx-auto">
                    <img className="h-[160px]"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="flex justify-center gap-5">
                        {
                        tags.map(tag =><button>{tag}</button>)
                    }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p>{publisher}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating}</div>
                    </div>
                </div>
            </div></Link>
        
    );
};

export default Book;