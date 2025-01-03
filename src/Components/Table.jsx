'use client';

import React from 'react';
import TableHead from './TableHead';
import TableBody from './TableBody';
import TablePagination from './TablePagination';
import TableFilters from './TableFilters';
import useFetchData from './useFetchData';

const Table = ({ rowsPerPage = 5 }) => {
    const {
        data,
        columns,
        totalCount,
        currentPage,
        handleSort,
        handleFilterChange,
        handlePageChange,
        sortConfig,
    } = useFetchData(rowsPerPage);

    return (
        <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
            <TableFilters columns={columns} onFilterChange={handleFilterChange} />
            <table className="w-full table-auto border-collapse">
                <TableHead columns={columns} onSort={handleSort} sortConfig={sortConfig} />
                <TableBody data={data} columns={columns} />
            </table>
            <TablePagination
                currentPage={currentPage}
                rowsPerPage={rowsPerPage}
                totalRecords={totalCount}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Table;
