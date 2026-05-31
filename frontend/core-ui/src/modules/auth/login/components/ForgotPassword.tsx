import { Button } from 'erxes-ui';
import { ForgotPasswordForm } from './ForgotPasswordForm';
import { Link } from 'react-router-dom';
import { AppPath } from '@/types/paths/AppPath';
import { useTranslation } from 'react-i18next';

export const ForgotPassword = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <div className="flex flex-col items-center gap-3">
        <div className="font-semibold text-lg leading-none">
          {t('auth.forgot-password.title')}
        </div>
        <div className="text-center text-sm text-accent-foreground">
          {t('auth.forgot-password.description')}
        </div>
      </div>
      <ForgotPasswordForm />
      <Button
        type="button"
        variant="link"
        asChild
        className="flex text-foreground hover:bg-transparent"
      >
        <Link to={AppPath.Login}>{t('auth.login')}</Link>
      </Button>
    </>
  );
};
