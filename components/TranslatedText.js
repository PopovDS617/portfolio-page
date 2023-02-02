import useTranslation from 'next-translate/useTranslation';

const TranslatedText = props => {
  const { t } = useTranslation(props.localeFile);

  return <>{t(props.text)}</>;
};

export default TranslatedText;
