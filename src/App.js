import './App.css';
import * as React from "react"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';

const rows: GridRowsProp = [
  { id: 1, col1: 'Pipi', col2: 'er lav', col3: 'test' },
  { id: 2, col1: 'DataGridPro', col2: 'is Awesome', col3: 'test' },
  { id: 3, col1: 'Sjokolade', col2: 'is Amazing', col3: 'test'},
  
];

const columns: GridColDef[] = [
  { field: 'col1', headerName: 'Column 1', width: 150 },
  { field: 'col2', headerName: 'Column 2', width: 150 },
  { field: 'col3', headerName: 'Column 3', width: 150 },
];

export default function App() {
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}

