import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import portfinder from 'portfinder';

export default defineConfig(async () => {
  // Set the base port to check for availability
  portfinder.basePort = 3000; // Or any default port you prefer

  // Find an available port
  const port = await portfinder.getPortPromise();

  // Return the Vite configuration
  return {
    plugins: [react()],
    server: {
      port: port, // Set the server to use the found port
      open: true, // Automatically open the app in the browser
      // ...other server options
    },
    test: {
      // https://github.com/vitest-dev/vitest/blob/main/examples/react-testing-lib/vite.config.ts
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/setupTests.js',
      reporters: ['default', 'html'],
      // you might want to disable the `css: true` line, since we don't have
      // tests that rely on CSS -- and parsing CSS is slow.
      // I'm leaving it in here becasue often people want to parse CSS in tests.
      // css: true,
    },
    // ...other Vite configurations
  };
});
