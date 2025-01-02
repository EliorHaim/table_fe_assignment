'use client';

import React from 'react';

const TableHead = ({ columns, onSort, sortConfig }) => {
    const handleSortClick = (columnId) => {
        onSort(columnId);
    };

    const renderSortIcon = (direction) => {
        return direction === 'asc' ? (
            <span className="ml-2 text-gray-500 dark:text-gray-300">▲</span>
        ) : (
            <span className="ml-2 text-gray-500 dark:text-gray-300">▼</span>
        );
    };

    return (
        <thead className="bg-gray-100 dark:bg-gray-700">
        <tr>
            {columns.map((column) => (
                <th
                    key={column.id}
                    onClick={() => column.sortable && handleSortClick(column.id)}
                    className={`p-3 text-left cursor-pointer ${
                        column.sortable ? 'hover:text-blue-500' : ''
                    }`}
                >
                    {column.label}
                    {column.sortable && sortConfig?.columnId === column.id && renderSortIcon(sortConfig.direction)}
                </th>
            ))}
        </tr>
        </thead>
    );
};

export default TableHead;
