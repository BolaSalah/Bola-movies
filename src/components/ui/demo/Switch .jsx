import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { MdLightMode } from 'react-icons/md';
import { MdDarkMode } from 'react-icons/md';

export function SwitchDemo() {

  return (
    <div className='flex items-center space-x-2'>
      <MdLightMode />
      <Switch id='airplane-mode' />
      <MdDarkMode />
    </div>
  );
}
