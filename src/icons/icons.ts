import { createIcons, Bell, CircleUserRound, Info } from 'lucide';

export function initializeIcons(): void {
  createIcons({
    icons: {
      Bell,
      CircleUserRound,
      Info,
    },
  });
}
