import React, { createContext, useContext, useState } from 'react';

interface SelectContextType {
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const SelectContext = createContext<SelectContextType | null>(null);

interface SelectProps {
  children: React.ReactNode;
}

export function Select({ children }: SelectProps) {
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <SelectContext.Provider value={{ value, onChange: setValue, isOpen, setIsOpen }}>
      <div style={{ position: 'relative' }}>{children}</div>
    </SelectContext.Provider>
  );
}

interface TriggerProps {
  children: React.ReactNode;
}

Select.Trigger = function Trigger({ children }: TriggerProps) {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error('Must be used within Select');
  
  return (
    <button 
      onClick={() => ctx.setIsOpen(!ctx.isOpen)}
      style={{
        padding: '8px 16px',
        border: '1px solid #444',
        borderRadius: '4px',
        background: '#232323',
        color: '#eaeaea',
        cursor: 'pointer',
        width: '200px',
        textAlign: 'left'
      }}
    >
      {ctx.value || children}
    </button>
  );
};

interface OptionsProps {
  children: React.ReactNode;
}

Select.Options = function Options({ children }: OptionsProps) {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error('Must be used within Select');
  
  if (!ctx.isOpen) return null;
  
  return (
    <div style={{
      position: 'absolute',
      top: '100%',
      left: 0,
      width: '200px',
      background: '#232323',
      border: '1px solid #444',
      borderRadius: '4px',
      marginTop: '4px'
    }}>
      {children}
    </div>
  );
};

interface OptionProps {
  children: React.ReactNode;
  value: string;
}

Select.Option = function Option({ children, value }: OptionProps) {
  const ctx = useContext(SelectContext);
  if (!ctx) throw new Error('Must be used within Select');
  
  return (
    <div
      onClick={() => {
        ctx.onChange(value);
        ctx.setIsOpen(false);
      }}
      style={{
        padding: '8px 16px',
        cursor: 'pointer',
        color: '#eaeaea',
        background: ctx.value === value ? '#444' : 'transparent'
      }}
    >
      {children}
    </div>
  );
}; 