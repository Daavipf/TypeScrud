declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_USER: string;
    DATABASE_PASSWORD: string;
    PORT: number;
  }
}
