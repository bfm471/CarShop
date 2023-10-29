import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function EditCar(props) {
  const [open, setOpen] = React.useState(false);
  const [car, setCar] = React.useState({
    brand: "",
    model: "",
    year: "",
    color: "",
    fuel: "",
    price: ""
  });

  const handleChangeInput = event => {
    setCar({...car, [event.target.name]: event.target.value})
  };

  const handleClickOpen = () => {
    console.log(props.car._links.car.href);
    setCar({brand: props.car.brand,
      model: props.car.model,
      year: props.car.year,
      color: props.car.color,
      fuel: props.car.fuel,
      price: props.car.price});
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateCar = () => {
    props.updateCar(car, props.car._links.car.href);
    setOpen(false);
  }

  const { saveCar } = props;

  return (
    <div>
      <Button variant="outlined" color='primary' onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit car</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name='brand'
            value={car.brand}
            label="Brand"
            type="text"
            fullWidth
            onChange={event => handleChangeInput(event)}
          />
          <TextField
            autoFocus
            margin="dense"
            name='model'
            value={car.model}
            label="Model"
            type="text"
            fullWidth
            onChange={event => handleChangeInput(event)}
          />
           <TextField
            autoFocus
            margin="dense"
            name='year'
            value={car.year}
            label="Year"
            type="number"
            fullWidth
            onChange={event => handleChangeInput(event)}
          />
          <TextField
            autoFocus
            margin="dense"
            name='color'
            value={car.color}
            label="Color"
            type="text"
            fullWidth
            onChange={event => handleChangeInput(event)}
          />
           <TextField
            autoFocus
            margin="dense"
            name='fuel'
            value={car.fuel}
            label="Fuel"
            type="text"
            fullWidth
            onChange={event => handleChangeInput(event)}
          />
          <TextField
            autoFocus
            margin="dense"
            name="price"
            value={car.price}
            label="Price"
            type="number"
            fullWidth
            onChange={event => handleChangeInput(event)}
          />
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={updateCar}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
