import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AddCar(props) {
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
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    saveCar(car);
    setOpen(false);
  }

  const { saveCar } = props;

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add car
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add new car</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="brand"
            name='brand'
            label="Brand"
            type="text"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="model"
            name='model'
            label="Model"
            type="text"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="year"
            name='year'
            label="Year"
            type="number"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="color"
            name='color'
            label="Color"
            type="text"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
          />
           <TextField
            autoFocus
            margin="dense"
            id="fuel"
            name='fuel'
            label="Fuel"
            type="text"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="price"
            name="price"
            label="Price"
            type="number"
            fullWidth
            variant="standard"
            onChange={event => handleChangeInput(event)}
          />
        
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
