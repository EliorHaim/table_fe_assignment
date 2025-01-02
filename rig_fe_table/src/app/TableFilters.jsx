'use client';

import React, { useState } from 'react';

const TableFilters = ({ columns, onFilterChange }) => {
    const [filterValues, setFilterValues] = useState({});

    const handleChange = (columnId, value) => {
        setFilterValues((prevValues) => ({
            ...prevValues,
            [columnId]: value,
        }));

        // Safely call the filtering function
        if (typeof onFilterChange === 'function') {
            onFilterChange({ id: columnId, value });
        }
    };

    return (
        <div className="flex flex-wrap gap-4 mb-4">
            {columns.map((column) => (
                <input
                    key={column.id}
                    type="text"
                    placeholder={`Filter by ${column.label}`}
                    value={filterValues[column.id] || ''}
                    onChange={(e) => handleChange(column.id, e.target.value)}
                    className="p-2 border rounded-md dark:bg-gray-700 dark:text-white"
                />
            ))}
        </div>
    );
};

export default TableFilters;
