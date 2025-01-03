import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';

jest.mock('./useFetchData', () => {
    return jest.fn(() => ({
        data: [
            { id: 1, name: 'Elior Haim', email: 'haimelior@example.com' },
            { id: 2, name: 'Haim Elior', email: 'eliorhaim@example.com' },
        ],
        columns: [
            { id: 'id', label: 'ID', sortable: true },
            { id: 'name', label: 'Name', sortable: true },
            { id: 'email', label: 'Email', sortable: true },
        ],
        totalCount: 2,
        currentPage: 0,
        rowsPerPage: 5,
        handleSort: jest.fn(),
        handleFilterChange: jest.fn(),
        handlePageChange: jest.fn(),
        sortConfig: { columnId: 'name', direction: 'asc' },
    }));
});

describe('Table Component', () => {
    it('renders the table with data', () => {
        render(<Table />);
        screen.debug();
        // Check if the table headers are rendered
        expect(screen.getByText('ID')).toBeInTheDocument();
        expect(screen.getByText('Name')).toBeInTheDocument();
        expect(screen.getByText('Email')).toBeInTheDocument();

        // Check if the table data is rendered
        expect(screen.getByText('Elior Haim')).toBeInTheDocument();
        expect(screen.getByText('haimelior@example.com')).toBeInTheDocument();
        expect(screen.getByText('Haim Elior')).toBeInTheDocument();
        expect(screen.getByText('eliorhaim@example.com')).toBeInTheDocument();
    });
});
