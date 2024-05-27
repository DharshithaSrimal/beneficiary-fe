import { DataGrid } from "@mui/x-data-grid"
import { useEffect } from "react";

export const PreviousAppointments = ({rows = []}) => {

    const columns = [
        { field: 'vaccine', headerName: 'Vaccine', flex: 1, headerClassName: 'table-header' },
        { field: 'center', headerName: 'Vaccine Center', flex: 3, headerClassName: 'table-header' },
        { field: 'date', headerName: 'Date', flex: 2, headerClassName: 'table-header' },
        { field: 'status', headerName: 'Status', flex: 1, headerClassName: 'table-header' }
    ];

    return <div style={{ marginTop: '1em' }}>
        <h5 className='appointment-header'>Previous Appointments</h5>
        <DataGrid
            rows={rows}
            columns={columns}
            autoHeight={true}
            rowHeight={40}
            headerHeight={40}
            sx={{ border: 'none', marginBottom: '10em' }}
            getRowClassName={(params) => `table-row`}
        />
    </div>
}