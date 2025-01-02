'use client';

import React from 'react';
import TableRow from './TableRow';

const TableBody = ({ data, columns }) => {
    return (
        <tbody>
        {data.map((row, index) => (
            <TableRow key={index} row={row} columns={columns} />
        ))}
        </tbody>
    );
};

export default TableBody;
