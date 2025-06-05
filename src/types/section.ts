import type { ReactNode } from 'react';

export type SectionId = 
  | 'intro' 
  | 'setup'
  | 'components'
  | 'props'
  | 'state'
  | 'hooks'
  | 'context'
  | 'routing'
  | 'useState'
  | 'useEffect'
  | 'useRef'
  | 'useMemo'
  | 'useCallback'
  | 'useReducer'
  | 'useContext';

export interface Section {
  id: SectionId;
  title: string;
  description: string;
  content?: ReactNode;
  category: 'getting_started' | 'basics' | 'advanced' | 'hooks';
  icon: string;
  prev: SectionId | null;
  next: SectionId | null;
} 