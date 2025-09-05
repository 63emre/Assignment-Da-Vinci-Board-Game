import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { message: string; version: string; docs: string; endpoints: object; features: string[] } {
    return {
      message: 'Welcome to Da Vinci Board Game API! 🎯',
      version: '1.0.0',
      docs: 'http://localhost:3001/api/docs',
      endpoints: {
        users: '/users',
        posts: '/posts',
        docs_english: '/api/docs',
        docs_turkish: '/api/docs/tr'
      },
      features: [
        'User Management (CRUD)',
        'Post Management (CRUD)', 
        'User-Post Relationships',
        'Input Validation',
        'Bilingual Swagger Documentation',
        'CORS Enabled',
        'TypeScript Support',
        'Real-time Operations',
        'In-memory Storage',
        'Modern Architecture'
      ]
    };
  }
}
