import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { toast } from "react-toastify";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};
const PurchaseCarDeleteModal = ({
  openDelete,
  handlePurchasedCarDeleteClose,
  bookedVehicle,
  refetch,
}) => {
  const { userName, address, phone, cost, _id } = bookedVehicle;
  const handleDelete = () => {
    fetch(`https://car-dealer-server.onrender.com/bookedVehicle/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success(`Order: ${_id} is deleted successfully`);
          handlePurchasedCarDeleteClose(false);
          refetch();
        }
      });
    //console.log(_id)
  };
  const handleCancel = (e) => {
    handlePurchasedCarDeleteClose(false);
  };
  return (
    <Modal
      open={openDelete}
      onClose={handlePurchasedCarDeleteClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} width={{ xs: 380, sm: 500, md: 600 }}>
        <Typography
          id="modal-modal-title"
          variant="h5"
          component="h2"
          style={{ fontWeight: 700, color: "#c0392b" }}
        >
          Are you sure that you want to Delete {_id}?
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Please enter confirm if you want to delete the car. Be careful, if you
          delete this car might cause some issue on the app.
        </Typography>
        <Box
          display="flex"
          justifyContent={{ xs: "center", sm: "end" }}
          sx={{ mt: 2 }}
        >
          <Button
            onClick={() => handleDelete()}
            variant="contained"
            style={{ marginRight: "15px", backgroundColor: "#a93226" }}
          >
            Confirm
          </Button>
          <Button
            variant="contained"
            onClick={handleCancel}
            style={{ backgroundColor: "green" }}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default PurchaseCarDeleteModal;
