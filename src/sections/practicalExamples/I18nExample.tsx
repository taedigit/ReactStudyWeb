import React, { useState } from 'react';
import { Typography, Box, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { MacCmd } from '../../components/MacCmd';
import { ExampleTab } from '../../components/ExampleTab';
import i18next from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

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

if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpBackend)
    .init({
      fallbackLng: 'en',
      interpolation: { escapeValue: false },
      detection: { order: ['querystring', 'localStorage', 'navigator'], caches: ['localStorage'] },
      backend: {
        loadPath: '/locales/{{lng}}.json',
      },
    });
}

const i18nExampleCode =
`import i18next from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend from 'i18next-http-backend';

i18next.use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpBackend)
  .init({
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
    detection: { order: ['querystring', 'localStorage', 'navigator'], caches: ['localStorage'] },
    backend: { loadPath: '/locales/{{lng}}.json' },
  });

// public/locales/ko.json, en.json, ja.json 파일 필요

const I18nDemo = () => {
  const { t, i18n } = useTranslation();
  return (
    <select value={i18n.language} onChange={e => i18n.changeLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="ko">한국어</option>
      <option value="ja">日本語</option>
    </select>
    <h3>{t('greeting')}</h3>
    <div>{t('intro')}</div>
    <div>{t('info')}</div>
  );
};`;

const i18nExampleDesc =
  '실제 서비스처럼 언어 리소스를 public/locales/ko.json, en.json, ja.json 파일로 분리하고, i18next-http-backend로 동적으로 불러옵니다.\n- 브라우저 언어 자동 감지, Select로 언어 전환, 다양한 다국어 키 포함\n- 실제 서비스에서는 서버 연동, 동적 번역 등으로 확장합니다.';

const I18nExample: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  const handleLang = (e: any) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  const example = (
    <Box>
      <FormControl size="small" sx={{ mb: 2, minWidth: 120 }}>
        <InputLabel>{t('langLabel') || '언어'}</InputLabel>
        <Select value={lang} label={t('langLabel') || '언어'} onChange={handleLang}>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ko">한국어</MenuItem>
          <MenuItem value="ja">日本語</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="h5" sx={{ mb: 1 }}>{t('greeting')}</Typography>
      <Typography sx={{ mb: 1 }}>{t('intro')}</Typography>
      <Typography color="#b5e853">{t('info')}</Typography>
    </Box>
  );

  return (
    <>
      <MacCmd>npm install react-i18next i18next i18next-browser-languagedetector i18next-http-backend</MacCmd>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>다국어(i18n) 실전 예제 (JSON 분리/동적 로딩)</Typography>
        <ExampleTab
          example={example}
          code={i18nExampleCode}
          desc={i18nExampleDesc}
        />
      </div>
    </>
  );
};

export default I18nExample; 