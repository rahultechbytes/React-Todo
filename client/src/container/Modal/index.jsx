import React, { Component } from 'react';
import ReactDom from 'react-dom';

const backdropStyle = {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    display: 'grid',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
}
const modalStyle = {
    padding: 20,
    background: '#fff',
    borderRadius: '2px',
    display: 'inline-block',
    minHeight: '300px',
    margin: '1rem',
    position: 'relative',
    minWidth: '300px',
    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    justifySelf: 'center',
};

const rootModal = document.getElementById('modal-root');

class Modal extends Component {
    render() {
        var modalUI = (
            <div style={backdropStyle} onClick={this.props.onClose} >
                <div style={modalStyle} >
                    {this.props.children}
                    <hr />
                    <button onClick={this.props.onClose}>Close</button>
                </div>
            </div>
        )
        return ReactDom.createPortal(
            modalUI,
            rootModal
        );
    }
}
export default Modal