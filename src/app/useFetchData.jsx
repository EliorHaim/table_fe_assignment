'use client';

import { useState, useEffect } from 'react';

const useFetchData = (rowsPerPage = 5, fetchFn = fetch) => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [totalCount, setTotalCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [filters, setFilters] = useState({});
    const [sortConfig, setSortConfig] = useState(null);

    const fetchData = async (page = 0, filters = {}, sortConfig = {}) => {
        try {
            let url = `https://jsonplaceholder.typicode.com/users?_page=${page + 1}&_limit=${rowsPerPage}`;

            // Apply filters
            Object.keys(filters).forEach((key) => {
                if (filters[key]) {
                    url += `&${key}_like=${filters[key]}`;
                }
            });

            // Apply sorting
            if (sortConfig?.columnId) {
                url += `&_sort=${sortConfig.columnId}&_order=${sortConfig.direction}`;
            }

            const response = await fetchFn(url);
            const result = await response.json();
            const totalRecords = response.headers.get('X-Total-Count') || 0;

            // Generate columns dynamically from response data
            if (result.length > 0) {
                const keys = Object.keys(result[0]);
                const generatedColumns = keys.map((key) => ({
                    id: key,
                    label: key.charAt(0).toUpperCase() + key.slice(1),
                    sortable: true,
                }));
                setColumns(generatedColumns);
            }

            setData(result);
            setTotalCount(Number(totalRecords));
        } catch (error) {
            console.error('Error fetching data:', error);
            setData([]);
        }
    };

    useEffect(() => {
        fetchData(currentPage, filters, sortConfig);
    }, [currentPage, filters, sortConfig]);

    const handleFilterChange = (filter) => {
        setFilters((prev) => ({ ...prev, [filter.id]: filter.value }));
    };

    const handleSort = (columnId) => {
        const direction =
            sortConfig?.columnId === columnId && sortConfig.direction === 'asc'
                ? 'desc'
                : 'asc';
        setSortConfig({ columnId, direction });
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return {
        data,
        columns,
        totalCount,
        currentPage,
        rowsPerPage,
        handleSort,
        handleFilterChange,
        handlePageChange,
        sortConfig,
    };
};

export default useFetchData;
//testing