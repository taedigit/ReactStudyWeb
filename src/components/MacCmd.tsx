import React, { useState, useRef } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/vsDark';
import { TabComponent } from './TabComponent';

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
  height: '35px',
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

export function MacCmd({ children, showCaret = true, style, desc, tabs }: { children: string, showCaret?: boolean, style?: React.CSSProperties, desc?: string | null, tabs?: { label: string, content: React.ReactNode }[] }) {
  const code = typeof children === 'string' ? children : (children ? String(children) : '');
  const [copied, setCopied] = useState(false);
  const [showDesc, setShowDesc] = useState(false);
  const descBtnRef = useRef<HTMLButtonElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const [tooltipPos, setTooltipPos] = useState<{x: number, y: number}>({ x: 16, y: 16 });
  const dragData = useRef<{ startX: number, startY: number, offsetX: number, offsetY: number, dragging: boolean }>({ startX: 0, startY: 0, offsetX: 0, offsetY: 0, dragging: false });
  const [selectedTab, setSelectedTab] = useState(0);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };
  const handleDescClick = () => {
    setTooltipPos({ x: 16, y: 16 });
    setShowDesc(true);
  };
  const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    dragData.current.dragging = true;
    dragData.current.startX = e.clientX;
    dragData.current.startY = e.clientY;
    dragData.current.offsetX = tooltipPos.x;
    dragData.current.offsetY = tooltipPos.y;
    document.addEventListener('mousemove', handleDragging);
    document.addEventListener('mouseup', handleDragEnd);
  };
  const handleDragging = (e: MouseEvent) => {
    if (!dragData.current.dragging || !preRef.current) return;
    const dx = e.clientX - dragData.current.startX;
    const dy = e.clientY - dragData.current.startY;
    const preRect = preRef.current.getBoundingClientRect();
    const tooltipW = 260, tooltipH = 80;
    let x = dragData.current.offsetX + dx;
    let y = dragData.current.offsetY + dy;
    x = Math.max(0, Math.min(x, preRect.width - tooltipW));
    y = Math.max(0, Math.min(y, preRect.height - tooltipH));
    setTooltipPos({ x, y });
  };
  const handleDragEnd = () => {
    dragData.current.dragging = false;
    document.removeEventListener('mousemove', handleDragging);
    document.removeEventListener('mouseup', handleDragEnd);
  };

  return (
    <div style={macCmdWrapper}>
      <div style={{ ...macCmdTopBar, position: 'relative' }}>
        <span style={macCmdCircle('#ff5f56')}></span>
        <span style={macCmdCircle('#ffbd2e')}></span>
        <span style={macCmdCircle('#27c93f')}></span>
        <div style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', gap: 8, position: 'relative' }}>
          {tabs && tabs.length > 0 && (
            <div style={{ marginRight: 12, display: 'flex', alignItems: 'center' }}>
              <TabComponent tabs={tabs} headerMode selectedIdx={selectedTab} onTabChange={setSelectedTab} />
            </div>
          )}
          {desc !== null && (
            <button
              ref={descBtnRef}
              onClick={handleDescClick}
              style={{
                background: '#2563eb',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                padding: '2px 10px',
                fontSize: '0.6em',
                cursor: 'pointer',
                opacity: 0.85,
                height: '70%',
                marginTop: '2px',
                marginBottom: '2px',
                position: 'relative',
                zIndex: 10,
              }}
              title="코드 설명 보기"
            >
              Desc
            </button>
          )}
          <button
            onClick={handleCopy}
            style={{
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
              marginLeft: 8,
            }}
            title="코드 복사"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
      {tabs && tabs.length > 0 ? (
        <div style={{ width: '100%' }}>
          {tabs[selectedTab].content}
        </div>
      ) : (
        <Highlight {...defaultProps} code={code} language="tsx" theme={theme}>
          {({ className, style: prismStyle, tokens, getLineProps, getTokenProps }) => (
            <pre ref={preRef} style={{ ...macCmdPre, ...prismStyle, ...style, position: 'relative' }} className={className}>
              {showDesc && (
                <div
                  style={{
                    position: 'absolute',
                    top: tooltipPos.y,
                    left: tooltipPos.x,
                    zIndex: 9999,
                    background: '#232323',
                    color: '#eaeaea',
                    borderRadius: 12,
                    padding: '0.7em 1em',
                    minWidth: 220,
                    maxWidth: 340,
                    boxShadow: '0 4px 32px rgba(0,0,0,0.25)',
                    border: '1px solid #444',
                    marginTop: 0,
                    cursor: 'move',
                    userSelect: 'none',
                  }}
                  onMouseDown={handleDragStart}
                  onClick={e => e.stopPropagation()}
                >
                  <button
                    onClick={e => { e.stopPropagation(); setShowDesc(false); }}
                    style={{
                      position: 'absolute',
                      top: 8,
                      right: 12,
                      background: 'none',
                      border: 'none',
                      color: '#aaa',
                      fontSize: 18,
                      cursor: 'pointer',
                      minWidth: 22,
                      minHeight: 22,
                      width: 22,
                      height: 22,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 6,
                      transition: 'background 0.15s',
                    }}
                    aria-label="닫기"
                  >×</button>
                  <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>코드 설명</div>
                  <div style={{ fontSize: 14, lineHeight: 1.7, whiteSpace: 'pre-line' }}>{desc || '설명 없음'}</div>
                </div>
              )}
              <code style={{ cursor: 'text', position: 'relative' }}>
                {tokens.map((line, i) => {
                  const { key: lineKey, ...restLineProps } = getLineProps({ line });
                  if ('key' in restLineProps) delete restLineProps.key;
                  return (
                    <div key={i} {...restLineProps}>
                      {line.map((token, key) => {
                        const { key: tokenKey, ...restTokenProps } = getTokenProps({ token });
                        if ('key' in restTokenProps) delete restTokenProps.key;
                        return <span key={key} {...restTokenProps} />;
                      })}
                    </div>
                  );
                })}
                {showCaret && (
                  <span style={{
                    display: 'inline-block',
                    width: 8,
                    height: 18,
                    background: '#fff',
                    marginLeft: 2,
                    borderRadius: 2,
                    opacity: 0.7,
                    animation: 'blink-caret 1.1s steps(1) infinite',
                    verticalAlign: 'middle',
                  }} />
                )}
              </code>
            </pre>
          )}
        </Highlight>
      )}
      <style>{`
        @keyframes blink-caret {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}
