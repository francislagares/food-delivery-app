import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

interface Props {
  children: React.ReactNode;
  onClose: () => void;
}

type Backdrop = Pick<Props, 'onClose'>;
type Overlay = Pick<Props, 'children'>;

const Backdrop = ({ onClose }: Backdrop) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ children }: Overlay) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays') as HTMLElement;

const Modal = ({ children, onClose }: Props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement,
      )}
    </>
  );
};

export default Modal;
