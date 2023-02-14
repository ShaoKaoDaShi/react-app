import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'react_app_ts_sub_01', // app name registered
    entry: '//localhost:3001',
    container: '#yourContainer',
    activeRule: '/',
  }

]);

start();