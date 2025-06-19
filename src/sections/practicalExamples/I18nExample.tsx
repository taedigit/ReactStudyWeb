import React from 'react';
import { Typography, Button, Box } from '@mui/material';
import { MacCmd } from '../../components/MacCmd';
import { ExampleTab } from '../../components/ExampleTab';
import i18next from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

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

const i18nExampleCode =
  "import React from 'react';\n" +
  "import i18next from 'i18next';\n" +
  "import { useTranslation, initReactI18next } from 'react-i18next';\n" +
  "\n" +
  "i18next.use(initReactI18next).init({\n" +
  "  resources: {\n" +
  "    en: { translation: { greeting: 'Hello', button: 'Change to Korean' } },\n" +
  "    ko: { translation: { greeting: '안녕하세요', button: '영어로 변경' } },\n" +
  "  },\n" +
  "  lng: 'en',\n" +
  "  fallbackLng: 'en',\n" +
  "  interpolation: { escapeValue: false },\n" +
  "});\n" +
  "\n" +
  "const I18nDemo = () => {\n" +
  "  const { t, i18n } = useTranslation();\n" +
  "  const toggleLang = () => {\n" +
  "    i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en');\n" +
  "  };\n" +
  "  return (\n" +
  "    <div>\n" +
  "      <h3>{t('greeting')}</h3>\n" +
  "      <button onClick={toggleLang}>{t('button')}</button>\n" +
  "    </div>\n" +
  "  );\n" +
  "};\n" +
  "export default I18nDemo;";

const i18nExampleDesc =
  "react-i18next와 i18next를 활용한 다국어(i18n) 적용 예제입니다.\n" +
  "- 언어 리소스 객체(resources)로 다국어 문자열을 관리합니다.\n" +
  "- useTranslation 훅으로 번역(t)과 언어 전환(changeLanguage)을 사용할 수 있습니다.\n" +
  "- 실제 서비스에서는 번역 파일(JSON) 분리, fallback, 언어 감지 등을 추가로 적용합니다.";

i18next.use(initReactI18next).init({
  resources: {
    en: { translation: { greeting: 'Hello', button: 'Change to Korean' } },
    ko: { translation: { greeting: '안녕하세요', button: '영어로 변경' } },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

const I18nExample: React.FC = () => {
  const { t, i18n } = useTranslation();
  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en');
  };

  const example = (
    <Box>
      <Typography variant="h5" sx={{ mb: 2 }}>{t('greeting')}</Typography>
      <Button variant="contained" onClick={toggleLang}>{t('button')}</Button>
    </Box>
  );

  return (
    <>
      <MacCmd>npm install react-i18next i18next</MacCmd>
      <div style={stateExampleBlockStyle}>
        <Typography variant="h6" sx={{ mb: 2 }}>react-i18next 다국어(i18n) 예제</Typography>
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