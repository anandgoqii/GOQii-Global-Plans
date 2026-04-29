import { Globe } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';

export function TopBar() {
  const { preferences, setIsModalOpen } = usePreferences();

  return (
    <div className="bg-neutral-900 text-neutral-200 py-2 px-4 text-xs tracking-wide">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-1">
          <span className="opacity-80">Location:</span>
          <span className="text-white flex items-center gap-1.5 ml-1">
            <span className="text-sm">{preferences.flag}</span>
            <span className="font-medium">{preferences.countryName}</span>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 opacity-80" />
          <span className="flex items-center gap-1 text-white">
            Language: <span className="font-medium">English</span>
          </span>
        </div>
      </div>
    </div>
  );
}
