import type { ReactNode } from 'react';

export type SectionId = 
  | 'intro' 
  | 'editors'
  | 'setup'
  | 'bundlers'
  | 'jsx'
  | 'vdom'
  | 'components'
  | 'props'
  | 'context'
  | 'routing'
  | 'useState'
  | 'useEffect'
  | 'useRef'
  | 'useMemo'
  | 'useCallback'
  | 'useReducer'
  | 'useContext'
  | 'events'
  | 'lifecycle'
  | 'practicalExamples'
  | 'restapi'
  | 'antdesign'
  | 'mui'
  | 'reactrouter'
  | 'styledcomponents'
  | 'recoil'
  | 'reactquery'
  | 'fetchapi'
  | 'axios'
  | 'tanstackquery'
  | 'customhooks'
  | 'conditionalRendering'
  | 'stylingBasics'
  | 'api'
  | 'swr'
  | 'opensource';

export interface Section {
  id: SectionId;
  title: string;
  description: string;
  category: 'getting_started' | 'basics' | 'advanced' | 'hooks' | 'Api' | 'example' | 'opensource';
  icon: string;
  prev: SectionId | null;
  next: SectionId | null;
  content?: ReactNode;
  examples?: Array<{
    id: string;
    title: string;
    description: string;
    code: ReactNode;
    source?: string;
  }>;
  props?: ReactNode;
  state?: ReactNode;
  context?: ReactNode;
  routing?: ReactNode;
  events?: ReactNode;
  lifecycle?: ReactNode;
  hooks?: ReactNode;
  useState?: ReactNode;
  useEffect?: ReactNode;
  useRef?: ReactNode;
  useMemo?: ReactNode;
  useCallback?: ReactNode;
  useReducer?: ReactNode;
  useContext?: ReactNode;
} 