interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_APP_BASE_API: string;
  readonly VITE_PROJECT_ENV: string;
  // 更多的環境變數
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
