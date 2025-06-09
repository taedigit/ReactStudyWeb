import React from 'react';

interface WithLoadingProps {
  loading?: boolean;
  children: React.ReactNode;
}

export function WithLoading({ loading = false, children }: WithLoadingProps) {
  if (loading) {
    return (
      <div style={{
        padding: '20px',
        textAlign: 'center',
        background: '#232323',
        borderRadius: '8px',
        color: '#eaeaea'
      }}>
        <div className="loading-spinner" />
        <p>Loading...</p>
      </div>
    );
  }
  return <>{children}</>;
} 