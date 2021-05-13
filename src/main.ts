import { NestFactory } from '@nestjs/core';
import { ServerModule } from './server.module';

const bootstrap = async () => {
  const server = await NestFactory.create(ServerModule);
  await server.listen(3000);
};

bootstrap();