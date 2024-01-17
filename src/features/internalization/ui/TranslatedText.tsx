import useTranslation from 'next-translate/useTranslation';

type TranslatedTextProps = {
  localeFile: string;
  text: string;
};

export const TranslatedText = (props: TranslatedTextProps) => {
  const { t } = useTranslation(props.localeFile);

  return <>{t(props.text)}</>;
};
