import { Globe } from 'lucide-react';
import { usePreferences } from '../context/PreferencesContext';

export function TopBar() {
  const { preferences, setIsModalOpen } = usePreferences();

  return (
    <div className="bg-neutral-900 text-neutral-200 py-2 px-4 text-xs tracking-wide">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-1">
          <span className="opacity-80">Delivering to:</span>
          <span className="text-white flex items-center gap-1.5 ml-1">
            <span className="text-sm">{preferences.flag}</span>
            <span className="font-medium">{preferences.countryName}</span>
          </span>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="ml-2 underline opacity-70 hover:opacity-100 transition-opacity"
          >
            [Change]
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Globe className="w-3.5 h-3.5 opacity-80" />
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            Language: <span className="font-medium text-white">{preferences.language}</span> <span className="text-[10px] opacity-70">▼</span>
          </button>
        </div>
      </div>
    </div>
  );
}
