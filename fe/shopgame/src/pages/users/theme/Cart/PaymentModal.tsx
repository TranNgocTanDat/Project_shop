import React from 'react';
import './PaymentModal.css';


interface PaymentModalProps {
    message: string;
    onClose: () => void;
}

const PaymentModal: React.FC<PaymentModalProps> = ({ message, onClose }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h2>Thông Báo</h2>
                <p>{message}</p>
                <button onClick={onClose} className="close-button">Đóng</button>
            </div>
        </div>
    );
};

export default PaymentModal;
