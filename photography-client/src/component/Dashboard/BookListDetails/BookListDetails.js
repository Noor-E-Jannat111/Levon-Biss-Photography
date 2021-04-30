import React from 'react';

const BookListDetails = ({ BookListDetails }) => {
    console.log(BookListDetails);
    return (
        <div class="row">
            <div class="card-group">
                <div class="card text-white bg-dark mb-3" style={{ maxWidth: "18rem" }}>
                    <div class="card-body">
                        <h5 class="card-title">{BookListDetails.title}</h5>
                        <p class="card-text">{BookListDetails.description}</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookListDetails;