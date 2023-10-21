import React, { useEffect, useState } from 'react';
import "../App.css";

export default function Home() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const removeCard = (index) => {
        const updatedData = data.filter((item, i) => i !== index);
        setData(updatedData);
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {
                        currentItems.map((item,index) => {
                            return (<>
                                <div className="card" style={{ width: "18rem", display: "flex" }} key={item.id}>
                                    <div style={{ float: "right" }}><button type="button" className="btn-close" aria-label="Close" onClick={() => removeCard(index)}></button></div>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text">{item.body}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </>)
                        })

                    }
                </div>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => paginate(currentPage - 1)}>Previous</button>
                        </li>
                        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => {
                            return (
                                <>
                                    <li key={index} className={`page-item ${index + 1 === currentPage ? 'active' : ''}`}>
                                        <button className="page-link" onClick={() => paginate(index + 1)}>{index + 1}</button>
                                    </li>
                                </>
                            )
                        }
                        )}
                        <li className={`page-item ${currentPage === Math.ceil(data.length / itemsPerPage) ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => paginate(currentPage + 1)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}
