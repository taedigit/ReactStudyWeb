import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import FetchAPI from './FetchAPI';

export default function ApiSection(): React.ReactElement | null {
  const { id } = useParams();
  const navigate = useNavigate();

  switch (id) {
    case 'fetchapi':
      return <FetchAPI />;
    case 'axios':
    case 'restapi':
    case 'customhooks':
    case 'reactquery':
    case 'tanstackquery':
      return <div>예제 준비 중...</div>;
    default:
      navigate('/404');
      return null;
  }
} 