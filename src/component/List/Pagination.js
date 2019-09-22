import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    const { totalPages, page, handlePaginationClick } = props;
    return (
        <div className="Pagination">
            <button className="Pagination-button"
                    onClick={() => handlePaginationClick('prev')}
                    disabled={page <= 1}////esi heto
            >
                &larr;
            </button>

            <span className="Pegination-info">
                page <b>{page}</b> of {totalPages}
            </span>

            <button className="Pagination-button"
                     onClick={() => handlePaginationClick('next')}
                     disabled={page >= totalPages}//esi heto
                    //  onClick={handlePaginationClick('next')}
            >
                &rarr;
            </button>
        </div>
    )
}
export default Pagination;
