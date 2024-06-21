import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function ActivateOfferDialog({
  open,
  handlePauseBuyerOffer,
  handleClose,
}) {
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <p className="text-xl text-lightGray font-bold font-rubik">
            Activate Offer
          </p>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p className="text-sm text-lightGray font-medium font-rubik">
              Are you sure you want to activate this the offer?
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <div
            onClick={handleClose}
            className="bg-primary hover:bg-primary/95 active:bg-primary/95 transition duration-300 text-white w-fit py-2 px-8 cursor-pointer rounded flex items-center justify-center  "
            autoFocus
          >
            No
          </div>
          <div
            onClick={handlePauseBuyerOffer}
            className="bg-yellow-500 hover:bg-yellow-200/95 active:bg-yellow-300/95 transition duration-300 text-white w-fit py-2 px-8 cursor-pointer rounded flex items-center justify-center  "
          >
            Yes
          </div>
        </DialogActions>
      </Dialog>
    </div>
  );
}
