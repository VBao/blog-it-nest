import { NestFactory } from '@nestjs/core';
import { TagModule } from './tag.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger = new Logger('Tag');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TagModule,
    {
      transport: Transport.TCP,
      logger,
      options: {
        port: 3003,
      },
    },
  );
  await app.listen();
}
bootstrap();
