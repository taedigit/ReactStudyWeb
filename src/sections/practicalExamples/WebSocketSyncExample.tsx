import React, { useEffect, useRef, useState } from 'react';
import { Typography, Button, TextField, Box, Stack, Paper, List, ListItem, ListItemText } from '@mui/material';
import { ExampleTab } from '../../components/ExampleTab';
import { MacCmd } from '../../components/MacCmd';

const stateExampleBlockStyle = {
  background: '#484f54',
  padding: '1.5em 2em',
  borderRadius: '8px',
  border: '1px solid #eee',
  marginTop: '1.2em',
  marginBottom: '2em',
  marginLeft: 0,
  marginRight: 0,
};

const wsSyncCode =
`import React, { useEffect, useRef, useState } from 'react';
// BroadcastChannel은 실제 WebSocket 대체용(브라우저 탭 동기화)
const channel = new BroadcastChannel('demo-sync');

const WebSocketSyncDemo = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  useEffect(() => {
    channel.onmessage = (e) => {
      if (e.data.type === 'msg') setMessages(msgs => [...msgs, e.data.text]);
      if (e.data.type === 'count') setCount(e.data.value);
    };
    return () => { channel.close(); };
  }, []);
  const sendMsg = () => {
    if (!input) return;
    channel.postMessage({ type: 'msg', text: input });
    setInput('');
  };
  const inc = () => channel.postMessage({ type: 'count', value: count + 1 });
  return (
    <div>
      <div>동기화 카운터: {count} <button onClick={inc}>+1</button></div>
      <input value={input} onChange={e => setInput(e.target.value)} placeholder="메시지 입력" />
      <button onClick={sendMsg}>전송</button>
      <ul>
        {messages.map((m, i) => <li key={i}>{m}</li>)}
      </ul>
    </div>
  );
};`;

const wsSyncDesc =
  '실제 WebSocket 없이 BroadcastChannel로 브라우저 탭 간 실시간 동기화(채팅/카운터) 예제입니다.\n- 실제 서비스에서는 WebSocket, Socket.IO, 서버 연동 등으로 확장\n- useEffect로 연결/해제, 상태 관리, 메시지 송수신 등 구현\n- 여러 탭에서 입력/카운터가 동기화됨을 확인할 수 있습니다.';

const WebSocketSyncExample: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const [count, setCount] = useState(0);
  const channelRef = useRef<BroadcastChannel>();

  useEffect(() => {
    const channel = new BroadcastChannel('demo-sync');
    channelRef.current = channel;
    channel.onmessage = (e) => {
      if (e.data.type === 'msg') setMessages(msgs => [...msgs, e.data.text]);
      if (e.data.type === 'count') setCount(e.data.value);
    };
    return () => { channel.close(); };
  }, []);

  const sendMsg = () => {
    if (!input) return;
    channelRef.current?.postMessage({ type: 'msg', text: input });
    setInput('');
  };
  const inc = () => channelRef.current?.postMessage({ type: 'count', value: count + 1 });

  const example = (
    <Paper sx={{ p: 2, mb: 2, background: '#23272e', color: '#fff' }}>
      <Stack spacing={2}>
        <Box>
          <Typography sx={{ mb: 1 }}>동기화 카운터: <b>{count}</b></Typography>
          <Button variant="contained" onClick={inc}>+1</Button>
        </Box>
        <Stack direction="row" spacing={1}>
          <TextField
            value={input}
            onChange={e => setInput(e.target.value)}
            size="small"
            placeholder="메시지 입력"
            sx={{ flex: 1, bgcolor: '#fff' }}
          />
          <Button variant="contained" onClick={sendMsg}>전송</Button>
        </Stack>
        <List dense sx={{ bgcolor: '#181c20', borderRadius: 1 }}>
          {messages.map((m, i) => (
            <ListItem key={i}><ListItemText primary={m} /></ListItem>
          ))}
        </List>
      </Stack>
    </Paper>
  );

  return (
    <>
      <MacCmd>npm install</MacCmd>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>WebSocket/실시간 동기화 예제</Typography>
        <ExampleTab
          example={example}
          code={wsSyncCode}
          desc={wsSyncDesc}
        />
      </div>
    </>
  );
};

export default WebSocketSyncExample; 