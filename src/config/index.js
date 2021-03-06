import dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT,
  SINGLE_PAYMENT_TEST_URL: process.env.SINGLE_PAYMENT_TEST_URL,
  BULK_PAYMENT_TEST_URL: process.env.BULK_PAYMENT_TEST_URL,
  PAYMENT_STATUS_TEST_URL: process.env.PAYMENT_STATUS_TEST_URL,
  GET_ACTIVE_BANKS_TEST_URL: process.env.GET_ACTIVE_BANKS_TEST_URL,
  PAYMENT_STATUS_BULK_TEST_URL: process.env.PAYMENT_STATUS_BULK_TEST_URL,
  remApiToken: process.env.remApiToken,
  remApiKey: process.env.remApiKey,
  mySecret: process.env.mySecret
};

export default config;
