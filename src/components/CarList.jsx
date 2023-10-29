import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import React from 'react';
import { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import AddCar from './AddCar';
import EditCar from './EditCar';

function CarList() {
    const [cars, setCars] = useState([]);

    const fetchData = () => {
        fetch(`http://carrestapi.herokuapp.com/cars`)
            .then(response => response.json())
            .then(data => setCars(data._embedded.cars))
            .catch(error => console.error(error));
    };

    const deleteCar = href => {
        const options = {method: 'delete'}

        if(window.confirm("Really delete the car?")) {
            fetch(href, options)
            .then(_ => fetchData())
            .catch(error => console.error(error))
        }
    };

    const saveCar = car => {
        const options = {
            method: 'post',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(car)
        }
        fetch("http://carrestapi.herokuapp.com/cars", options)
        .then(_ => fetchData())
        .catch(error => console.error(error))  
    };

    const updateCar = (car, href) => {
        const options = {
            method: 'put',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(car)
        }
        fetch(href, options)
        .then(_ => fetchData())
        .catch(error => console.error(error))
    };

    useEffect(() => fetchData(), []);

    const columns = [
        { field: "brand" },
        { field: "model" },
        { field: "year" },
        { field: "color" },
        { field: "fuel" },
        { field: "price" },
        { 
            sortable: false,
            filter: false,
            floatingFilter: false,
            width: 150,
            cellRenderer: row => <EditCar updateCar={updateCar} car={row.data} />
        },
        {
            field: "_links.self.href",
            headerName: "",
            sortable: false,
            filter: false,
            floatingFilter: false,
            width: 150,
            cellRenderer: params => {
                return (
                    <Button
                        variant='contained'
                        color='secondary'
                        onClick={() => deleteCar(params.value)}>Delete</Button>
                );
            }
        },
    ];

    return (
        <div>
            <AddCar saveCar={saveCar} />
            <div className="ag-theme-material"
                style={{ height: '1800px', width: '1500px', margin: 'auto' }} >
                <AgGridReact
                    columnDefs={columns}
                    rowData={cars}
                    defaultColDef={{
                        sortable: true,
                        filter: true,
                        floatingFilter: true
                    }}>
                </AgGridReact>
            </div>
        </div>
    )
}

export default CarList;
