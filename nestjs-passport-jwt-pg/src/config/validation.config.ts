import { ValidationPipeOptions } from '@nestjs/common';
import { registerAs } from '@nestjs/config';

export default registerAs(
  'validation',
  (): ValidationPipeOptions => ({
    disableErrorMessages: false,
  }),
);
