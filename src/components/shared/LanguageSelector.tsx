
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          {language === 'pt' ? (
            <img 
              src="https://flagcdn.com/w20/br.png" 
              alt="Português" 
              className="w-4 h-3"
            />
          ) : (
            <img 
              src="https://flagcdn.com/w20/us.png" 
              alt="English" 
              className="w-4 h-3"
            />
          )}
          <span className="hidden sm:inline">
            {language === 'pt' ? t('language.portuguese') : t('language.english')}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => setLanguage('pt')}
          className="flex items-center gap-2"
        >
          <img 
            src="https://flagcdn.com/w20/br.png" 
            alt="Português" 
            className="w-4 h-3"
          />
          {t('language.portuguese')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className="flex items-center gap-2"
        >
          <img 
            src="https://flagcdn.com/w20/us.png" 
            alt="English" 
            className="w-4 h-3"
          />
          {t('language.english')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
