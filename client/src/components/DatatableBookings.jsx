import "./CSS/DatatableBookings.scss";
import { DataGrid } from "@mui/x-data-grid";
import { villaColumns, villaRows } from "../DatatableSource";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const DatatableBookings = () => {
    const [data, setData] = useState(villaRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 210,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="datatable">
            <div className="datatableTitle">
                Latest Bookings
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={villaColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default DatatableBookings;