import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS
  app.enableCors({
    origin:
      process.env.NODE_ENV === 'production'
        ? [
            'https://assignment-da-vinci-board-game.onrender.com',
            'https://*.vercel.app',
          ]
        : ['http://localhost:5173', 'http://localhost:3000'],
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

  // Swagger setup with bilingual support
  const getSwaggerConfig = (lang: string = 'en') => {
    const isTurkish = lang === 'tr';

    return new DocumentBuilder()
      .setTitle(
        isTurkish ? 'Da Vinci Board Game API' : 'Da Vinci Board Game API',
      )
      .setDescription(
        isTurkish
          ? 'Da Vinci Board Game uygulamasında kullanıcılar ve gönderileri yönetmek için API. React 19 + TypeScript frontend ve NestJS + TypeScript backend ile oluşturulmuş modern full-stack uygulama.'
          : 'API for managing users and posts in the Da Vinci Board Game application. Modern full-stack application built with React 19 + TypeScript frontend and NestJS + TypeScript backend.',
      )
      .setVersion('1.0')
      .addTag(
        'users',
        isTurkish
          ? 'Kullanıcı yönetimi uç noktaları - Kullanıcıları oluştur, oku, güncelle ve sil'
          : 'User management endpoints - Create, read, update and delete users',
      )
      .addTag(
        'posts',
        isTurkish
          ? 'Gönderi yönetimi uç noktaları - Gönderileri oluştur, oku, güncelle ve sil'
          : 'Post management endpoints - Create, read, update and delete posts',
      )
      .addTag(
        'root',
        isTurkish
          ? 'Ana API bilgileri ve sistem durumu'
          : 'Root API information and system status',
      )
      .setContact(
        'Da Vinci Team',
        'https://www.linkedin.com/company/da-vinci-board-game',
        'contact@davinci-team.com',
      )
      .addServer(
        process.env.NODE_ENV === 'production'
          ? 'https://assignment-da-vinci-board-game.onrender.com'
          : 'http://localhost:3001',
        isTurkish ? 'Production Sunucusu' : 'Production Server',
      )
      .build();
  };

  // Default English documentation
  const document = SwaggerModule.createDocument(app, getSwaggerConfig('en'));
  SwaggerModule.setup('docs', app, document, {
    customSiteTitle: 'Da Vinci Board Game API - Interactive Documentation',
    customfavIcon: '/favicon.ico',
    customCss: `
      .topbar-wrapper img { content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iOCIgZmlsbD0iIzY2N0VFQSIvPgo8cGF0aCBkPSJNOCAxMkg4LjAxTTI0IDEySDI0LjAxTTE2IDhWMTZNMTIgMTJMMjAgMTIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPg=='); }
      .swagger-ui .topbar { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
      .swagger-ui .topbar .download-url-wrapper { display: none; }
      .swagger-ui .info .title { color: #333; font-size: 2rem; font-weight: 600; }
      .swagger-ui .info .description { font-size: 1.1rem; line-height: 1.6; color: #555; }
      .swagger-ui .scheme-container { background: #f8f9fa; border-radius: 8px; padding: 1rem; }
    `,
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      filter: true,
      showExtensions: true,
      showCommonExtensions: true,
    },
  });

  // Turkish documentation on different route
  const documentTr = SwaggerModule.createDocument(app, getSwaggerConfig('tr'));
  SwaggerModule.setup('docs/tr', app, documentTr, {
    customSiteTitle: 'Da Vinci Board Game API - İnteraktif Dokümantasyon',
    customfavIcon: '/favicon.ico',
    customCss: `
      .topbar-wrapper img { content: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iOCIgZmlsbD0iIzY2N0VFQSIvPgo8cGF0aCBkPSJNOCAxMkg4LjAxTTI0IDEySDI0LjAxTTE2IDhWMTZNMTIgMTJMMjAgMTIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPg=='); }
      .swagger-ui .topbar { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
      .swagger-ui .topbar .download-url-wrapper { display: none; }
      .swagger-ui .info .title { color: #333; font-size: 2rem; font-weight: 600; }
      .swagger-ui .info .description { font-size: 1.1rem; line-height: 1.6; color: #555; }
      .swagger-ui .scheme-container { background: #f8f9fa; border-radius: 8px; padding: 1rem; }
    `,
    swaggerOptions: {
      persistAuthorization: true,
      displayRequestDuration: true,
      filter: true,
      showExtensions: true,
      showCommonExtensions: true,
    },
  });

  const port = process.env.PORT ?? 3001;
  await app.listen(port);

  console.log(`🚀 Server running on http://localhost:${port}`);
  console.log(`📚 Swagger documentation available at:`);
  console.log(`   🇬🇧 English: http://localhost:${port}/docs`);
  console.log(`   🇹🇷 Turkish: http://localhost:${port}/docs/tr`);
}
void bootstrap();
