'use client';
import React from 'react';

const TableSorters = ({ columns, onSortChange }) => {
    return (
        <div className="sorters">
            {columns.map((column) => (
                <button
                    key={column.id}
                    onClick={() => onSortChange(column.id)}
                    className="sort-button"
                >
                    {column.label}
                </button>
            ))}
        </div>
    );
};

export default TableSorters;
