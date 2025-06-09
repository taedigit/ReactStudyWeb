import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{
        background: '#232323',
        padding: '20px',
        borderRadius: '8px',
        maxWidth: '500px',
        width: '90%',
        position: 'relative'
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            background: 'none',
            border: 'none',
            color: '#eaeaea',
            fontSize: '20px',
            cursor: 'pointer'
          }}
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.body
  );
}

export function PortalModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: '8px 16px',
          background: '#444',
          border: 'none',
          borderRadius: '4px',
          color: '#eaeaea',
          cursor: 'pointer'
        }}
      >
        Open Modal
      </button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2 style={{ color: '#eaeaea', marginBottom: '15px' }}>Portal Modal</h2>
        <p style={{ color: '#eaeaea' }}>
          This modal is rendered outside the normal DOM hierarchy using React Portal.
        </p>
      </Modal>
    </div>
  );
} 