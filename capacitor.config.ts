import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.deel',
  appName: 'deel-capacitor',
  webDir: 'build',
  server: {
    url: 'http://192.168.1.34:3000',
    androidScheme: 'https',
    cleartext: true
  }
};

export default config;
