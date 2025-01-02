'use client';

import React from 'react';

const TablePagination = ({ currentPage, rowsPerPage, totalRecords, onPageChange }) => {
    const totalPages = Math.ceil(totalRecords / rowsPerPage);

    return (
        <div className="flex justify-between items-center mt-4">
            <button
                disabled={currentPage === 0}
                onClick={() => onPageChange(currentPage - 1)}
                className="px-3 py-1 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
            >
                Previous
            </button>
            <span className="text-gray-700 dark:text-gray-300">
                Page {currentPage + 1} of {totalPages}
            </span>
            <button
                disabled={currentPage >= totalPages - 1}
                onClick={() => onPageChange(currentPage + 1)}
                className="px-3 py-1 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
            >
                Next
            </button>
        </div>
    );
};

export default TablePagination;
