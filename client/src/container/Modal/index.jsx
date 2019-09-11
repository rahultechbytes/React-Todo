import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './style.css'

const rootModal = document.getElementById('modal-root');

class Modal extends Component {
    render() {
        var modalUI = (
            <div className="backdropStyle" onClick={this.props.onClose} >
                <div className="modalStyle" >
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