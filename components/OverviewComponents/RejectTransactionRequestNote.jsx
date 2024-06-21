import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function RejectTransactionRequestNote() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="RejectTransactionRequestNote"
        aria-describedby="alert-dialog-description"
        className="bg-black"
      >
        <DialogTitle id="RejectTransactionRequestNote">
          Confirmation Note
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Canceling this order request will affect your order completion rate
            which might discourage people from initiating a transaction with
            you.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div className="flex h-[38px] w-[160px] cursor-pointer items-center justify-center rounded-md bg-danger text-lg font-bold capitalize text-white transition duration-300 hover:opacity-90 active:opacity-90">
            Reject
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
