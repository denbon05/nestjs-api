import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ParseIntPipe, VersioningType } from '@nestjs/common';
import { appConstants } from './common/constants';
import { setupSwagger } from './config/swagger.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    bufferLogs: true,
  });

  // security reason
  app.disable('x-powered-by');

  app.useLogger(app.get(Logger));
  app.useGlobalPipes(new ParseIntPipe());
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: appConstants.apiVersion,
  });

  setupSwagger(app);

  await app.listen(3000);
}

bootstrap();
