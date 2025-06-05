import React, { useState } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';

const macCmdWrapper = {
  background: '#1e1e1e',
  borderRadius: '10px',
  margin: '0.5em 0',
  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  overflow: 'hidden',
  border: '1px solid #222',
};
const macCmdTopBar = {
  display: 'flex',
  alignItems: 'center',
  height: '28px',
  background: '#232323',
  padding: '0 12px',
  borderBottom: '1px solid #222',
  gap: '8px',
};
const macCmdCircle = (color: string) => ({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  background: color,
  display: 'inline-block',
});
const macCmdPre: React.CSSProperties = {
  background: 'transparent',
  color: '#eaeaea',
  padding: '1em',
  fontFamily: 'Menlo, Monaco, Consolas, monospace',
  fontSize: '1em',
  margin: 0,
  lineHeight: '1.6',
  overflowX: 'auto',
};

export function MacCmd({ children, showCaret = true, style }: { children: string, showCaret?: boolean, style?: React.CSSProperties }) {
  const code = typeof children === 'string' ? children : (children ? String(children) : '');
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  return (
    <div style={macCmdWrapper}>
      <div style={macCmdTopBar}>
        <span style={macCmdCircle('#ff5f56')}></span>
        <span style={macCmdCircle('#ffbd2e')}></span>
        <span style={macCmdCircle('#27c93f')}></span>
        <button
          onClick={handleCopy}
          style={{
            marginLeft: 'auto',
            background: '#333',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            padding: '2px 10px',
            fontSize: '0.6em',
            cursor: 'pointer',
            opacity: 0.8,
            height: '70%',
            marginTop: '2px',
            marginBottom: '2px',
          }}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <Highlight {...defaultProps} code={code} language="tsx" theme={theme}>
        {({ className, style: prismStyle, tokens, getLineProps, getTokenProps }) => (
          <pre style={{ ...macCmdPre, ...prismStyle, ...style }} className={className}>
            <code style={{ cursor: 'text', position: 'relative' }}>
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
              {showCaret && (
                <span style={{
                  display: 'inline-block',
                  width: '1px',
                  height: '1em',
                  background: '#eaeaea',
                  marginLeft: '2px',
                  verticalAlign: 'middle',
                  animation: 'blink-caret 1s steps(1) infinite',
                  position: 'relative',
                  top: '2px',
                }}></span>
              )}
            </code>
          </pre>
        )}
      </Highlight>
      <style>{`
        @keyframes blink-caret {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
} 