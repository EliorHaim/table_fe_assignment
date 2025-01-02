'use client';

import React from 'react';

const TableRow = ({ row, columns }) => {
    const renderCellContent = (columnId) => {
        const value = row[columnId];
        if (typeof value === 'object' && value !== null) {
            // Handle nested objects (e.g., address or company)
            if (columnId === 'address') {
                return `${value.street}, ${value.suite}, ${value.city}, ${value.zipcode}`;
            }
            if (columnId === 'company') {
                return value.name; // Display the company name
            }
            return JSON.stringify(value); // Fallback for other nested objects
        }
        return value; // For primitive values
    };

    return (
        <tr className="border-b dark:border-gray-700">
            {columns.map((column) => (
                <td
                    key={column.id}
                    className="px-4 py-2 text-sm text-gray-800 dark:text-gray-300"
                >
                    {renderCellContent(column.id)}
                </td>
            ))}
        </tr>
    );
};

export default TableRow;
