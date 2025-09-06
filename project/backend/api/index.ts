import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from '../src/app.module';

let app: any;

async function createApp() {
  if (!app) {
    app = await NestFactory.create(AppModule);

    // Enable CORS
    app.enableCors({
      origin: [
        'https://assignment-da-vinci-board-game.vercel.app',
        'https://*.vercel.app',
        'http://localhost:5173',
        'http://localhost:3000',
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    });

    // Enable global validation pipes
    app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    );

    // Swagger setup
    const config = new DocumentBuilder()
      .setTitle('Da Vinci Board Game API')
      .setDescription('API for managing users and posts in the Da Vinci Board Game application.')
      .setVersion('1.0')
      .addTag('users', 'User management endpoints')
      .addTag('posts', 'Post management endpoints')
      .addTag('root', 'Root API information')
      .setContact('Da Vinci Team', 'https://www.linkedin.com/company/da-vinci-board-game', 'contact@davinci-team.com')
      .addServer('https://assignment-da-vinci-board-game.onrender.com', 'Production Server')
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);

    await app.init();
  }
  return app;
}

export default async (req: any, res: any) => {
  const app = await createApp();
  return app.getHttpAdapter().getInstance()(req, res);
};
