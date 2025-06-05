interface CodeBlockProps {
  code: string;
}

export const CodeBlock = ({ code }: CodeBlockProps) => (
  <div
    style={{
      background: '#484f54',
      padding: '1.5em 2em',
      borderRadius: '8px',
      border: '1px solid #eee',
      marginTop: '1.2em',
      marginBottom: '2em',
      marginLeft: 0,
      marginRight: 0,
    }}
  >
    <pre style={{ background: 'transparent', padding: 0, margin: 0, border: 'none', boxShadow: 'none', overflowX: 'auto' }}>
      <code>{code}</code>
    </pre>
  </div>
); 