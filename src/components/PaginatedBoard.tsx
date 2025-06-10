import React from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PaginatedBoardProps {
  posts: Post[];
  pageSize?: number;
}

export const PaginatedBoard: React.FC<PaginatedBoardProps> = ({ posts, pageSize = 5 }) => {
  const [page, setPage] = React.useState(1);
  const totalPages = Math.ceil(posts.length / pageSize);
  const startIdx = (page - 1) * pageSize;
  const currentPosts = posts.slice(startIdx, startIdx + pageSize);

  return (
    <div style={{ background: '#232323', color: '#eaeaea', borderRadius: 8, padding: '1.5em', border: '1px solid #444', maxWidth: 600, margin: '0 auto' }}>
      <h3 style={{ marginBottom: '1em' }}>게시판 예제 (페이징)</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {currentPosts.map(post => (
          <li key={post.id} style={{ marginBottom: '1.2em', padding: '1em', background: '#333', borderRadius: 6 }}>
            <div style={{ fontWeight: 'bold', marginBottom: 4 }}>{post.title}</div>
            <div style={{ fontSize: '0.97em', color: '#b5e853' }}>{post.content}</div>
          </li>
        ))}
      </ul>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 16 }}>
        <button
          onClick={() => setPage(p => Math.max(1, p - 1))}
          disabled={page === 1}
          style={{ padding: '0.4em 1em', borderRadius: 6, background: '#444', color: '#eaeaea', border: 'none', cursor: page === 1 ? 'not-allowed' : 'pointer' }}
        >
          이전
        </button>
        <span style={{ alignSelf: 'center' }}>{page} / {totalPages}</span>
        <button
          onClick={() => setPage(p => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          style={{ padding: '0.4em 1em', borderRadius: 6, background: '#444', color: '#eaeaea', border: 'none', cursor: page === totalPages ? 'not-allowed' : 'pointer' }}
        >
          다음
        </button>
      </div>
    </div>
  );
}; 