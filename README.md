
# Data Table Component

A reusable and customizable Data Table component built with React and styled using Tailwind CSS. This component allows displaying, filtering, sorting, and paginating tabular data with support for server-side interactions.

## Features

- **Table Rendering:** Renders a data table with dynamic rows and columns.
- **Sorting:** Sorts columns in ascending/descending order.
- **Filtering:** Filters data based on column values.
- **Pagination:** Supports pagination with configurable rows per page.
- **Server-Side Data Fetching:** Fetches data from a mock API (`jsonplaceholder.typicode.com/users`) with server-side pagination, sorting, and filtering.

## Installation

1. Clone the repository or add the component to your existing project.
2. Ensure you have [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/) set up in your project.
3. Install dependencies by running the following command:

npm install

4. Add the necessary configuration for Tailwind CSS if it is not already set up. You can follow the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation).

## Usage

### Table Component

To use the `Table` component in your project, import it and pass the necessary props.

```jsx
import Table from './components/Table';

const App = () => {
  return (
    <div className="container mx-auto">
      <Table rowsPerPage={5} />
    </div>
  );
};

export default App;
```

### Table Props

- **rowsPerPage**: The number of rows to display per page. Defaults to `5`.

```js
<Table rowsPerPage={5} />
```

### Table Filters

The `TableFilters` component provides inputs for filtering table data by specific columns. The filtering is performed on the server-side.

### Table Sorters

Sorting can be triggered by clicking on the column headers. The sort order toggles between ascending and descending.

### Table Pagination

The `TablePagination` component allows navigating between pages with controls for page numbers and rows per page.

## Example

Here’s an example of how to use the Table component:

```jsx
import React from 'react';
import Table from './components/Table';

const App = () => (
  <div className="container mx-auto">
    <h1 className="text-2xl font-bold mb-4">Data Table Example</h1>
    <Table rowsPerPage={10} />
  </div>
);

export default App;
```

## Testing

To run tests for the Table component, make sure you have Jest and React Testing Library set up.

### Running Tests

Run the following command to execute the tests:

```bash
npm test
```

This will run the test suite and show the test results.

## Development

To run the development server and start working on the component locally:

1. Start the development server:

```bash
npm run dev
```

2. Open the browser and navigate to `http://localhost:3000` to view the app.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository, create a new branch, and submit a pull request. Please follow standard development practices and write tests for any new features or bug fixes.