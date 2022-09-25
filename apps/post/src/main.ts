import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { PostModule } from './post.module';

const logger = new Logger('Blog');

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    PostModule,
    {
      transport: Transport.TCP,
      logger,
      options: {
        port: 3001,
      },
    },
  );
  await app.listen();
}
bootstrap();
