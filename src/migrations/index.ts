import * as migration_20250928_214719 from './20250928_214719';

export const migrations = [
  {
    up: migration_20250928_214719.up,
    down: migration_20250928_214719.down,
    name: '20250928_214719'
  },
];
