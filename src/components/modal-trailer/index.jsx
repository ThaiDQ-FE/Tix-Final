import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal } from "@material-ui/core";
import { Autoplay } from "swiper";
import "./styles.scss";

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    boxShadow: theme.shadows[5],
    top: `${50}%`,
    left: `${50}%`,
    transform: `translate(-${50}%, -${50}%)`,
    "@media (max-width: 991px)": {
      width: 600,
      height: `${50}%`,
    },
    "@media (min-width: 992px)": {
      width: `${70}%`,
      height: `${70}%`,
    },
  },
}));
function ModalTrailer(props) {
  const classes = useStyles();
  const body = (
    <div className={classes.paper}>
      <img
        className="modal-trailer-close"
        src="https://i.ibb.co/9sLW6gQ/close.png"
        alt="close"
        onClick={props.close}
      />
      <iframe
        src={props.trailer + `?autoplay=1`}
        allow={Autoplay}
        className="modal-trailer-iframe"
      ></iframe>
    </div>
  );
  return (
    <div>
      <Modal open={props.open} onClose={props.close}>
        {body}
      </Modal>
    </div>
  );
}
export default ModalTrailer;
