import React from 'react';

interface ToggleProps {
  label: string;
  initial: boolean;
}

export function Toggle({ label, initial }: ToggleProps) {
  const [isOn, setIsOn] = React.useState(initial);
  return (
    <div>
      <label>
        {label}
        <input
          type="checkbox"
          checked={isOn}
          onChange={() => setIsOn(!isOn)}
        />
      </label>
    </div>
  );
} 