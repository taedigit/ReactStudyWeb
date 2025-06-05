import React from 'react';

interface MacWindowProps {
  children: React.ReactNode;
  title?: string;
}

export const MacWindow = ({ children, title }: MacWindowProps) => {
  return (
    <div className="mac-window">
      <div className="mac-window-titlebar">
        <div className="mac-window-buttons">
          <span className="mac-button red"></span>
          <span className="mac-button yellow"></span>
          <span className="mac-button green"></span>
        </div>
        {title && <div className="mac-window-title">{title}</div>}
      </div>
      <div className="mac-window-body">
        {children}
      </div>
    </div>
  );
} 