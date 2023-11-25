declare namespace NodeJS {
  export interface ProcessEnv {
    ACCESS_TOKEN_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
    ACCESS_TOKEN_EXPIRES_IN: string;
    REFRESH_TOKEN_EXPIRES_IN: string;
    EMAIL_TOKEN_SECRET: string;
    EMAIL_TOKEN_EXPIRES_IN: string;
    SALT_ROUNDS: string;
    DATABASE_URL: string;
    REDIS_URL: string;
    EMAIL_FROM: string;
    SMTP_URL: string;
    ALPHA_VANTAGE_URL: string;
    ALPHA_VANTAGE_API_KEY: string;
    REDDIT_URL: string;
    SEEKING_ALPHA_URL: string;
    RAPID_API_KEY: string;
    RAPID_API_HOST: string;
  }
}
