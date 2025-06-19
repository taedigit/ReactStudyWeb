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
        loadPath: '/locales/{{lng}}/{{ns}}.json',
      },
      ns: ['common', 'form'],
      defaultNS: 'common',
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
    backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
    ns: ['common', 'form'],
    defaultNS: 'common',
  });

// public/locales/en/common.json, form.json 등 필요

const { t } = useTranslation(['common', 'form']);
// 네임스페이스 지정, keyPrefix 활용, 플러럴 예시
return (
  <>
    <div>{t('greeting')}</div>
    <div>{t('submit', { ns: 'form' })}</div>
    <div>{t('item', { ns: 'form', count: 1 })}</div>
    <div>{t('item', { ns: 'form', count: 2 })}</div>
  </>
);`;

const i18nExampleDesc =
  '고급 i18n: 네임스페이스 분리, 동적 네임스페이스 로딩, keyPrefix, 플러럴(복수형) 처리 예시입니다.\n- /locales/en/common.json, form.json 등 네임스페이스별 JSON 분리\n- useTranslation(["common", "form"])\n- t("item", { ns: "form", count: 2 })로 복수형 자동 처리\n- 실제 서비스에서는 다국어 모듈화, 동적 import, 서버 번역 등으로 확장합니다.';

const I18nExample: React.FC = () => {
  const { t, i18n } = useTranslation(['common', 'form']);
  const [lang, setLang] = useState(i18n.language);
  const handleLang = (e: any) => {
    setLang(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  const example = (
    <Box>
      <FormControl size="small" sx={{ mb: 2, minWidth: 120 }}>
        <InputLabel>{t('langLabel', { ns: 'common', defaultValue: 'Language' })}</InputLabel>
        <Select value={lang} label={t('langLabel', { ns: 'common', defaultValue: 'Language' })} onChange={handleLang}>
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="ko">한국어</MenuItem>
          <MenuItem value="ja">日本語</MenuItem>
          <MenuItem value="zh">中文</MenuItem>
          <MenuItem value="fr">Français</MenuItem>
          <MenuItem value="es">Español</MenuItem>
          <MenuItem value="th">ไทย</MenuItem>
          <MenuItem value="ar">العربية</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="h5" sx={{ mb: 1 }}>{t('greeting', { ns: 'common' })}</Typography>
      <Typography sx={{ mb: 1 }}>{t('intro', { ns: 'common' })}</Typography>
      <Typography color="#b5e853">{t('info', { ns: 'common' })}</Typography>
      <Typography sx={{ mt: 2, fontWeight: 600 }}>form 네임스페이스 예시</Typography>
      <Typography>{t('submit', { ns: 'form' })} / {t('reset', { ns: 'form' })}</Typography>
      <Typography>{t('item', { ns: 'form', count: 1 })}</Typography>
      <Typography>{t('item', { ns: 'form', count: 2 })}</Typography>
    </Box>
  );

  return (
    <>
      <MacCmd>npm install react-i18next i18next i18next-browser-languagedetector i18next-http-backend</MacCmd>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>다국어(i18n) 고급 예제 (네임스페이스/플러럴)</Typography>
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