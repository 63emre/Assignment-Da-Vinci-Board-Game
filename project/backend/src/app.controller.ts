import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('root')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    summary: 'Get API information',
    description:
      'Returns basic information about the Da Vinci Board Game API, including version, available endpoints, and documentation links. This endpoint provides a quick overview of the API status and capabilities.',
  })
  @ApiResponse({
    status: 200,
    description: 'Successfully retrieved API information',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Welcome to Da Vinci Board Game API!',
          description: 'Welcome message',
        },
        version: {
          type: 'string',
          example: '1.0.0',
          description: 'API version',
        },
        docs: {
          type: 'string',
          example: 'http://localhost:3001/api/docs',
          description: 'API documentation URL',
        },
        endpoints: {
          type: 'object',
          properties: {
            users: {
              type: 'string',
              example: '/users',
              description: 'User management endpoints',
            },
            posts: {
              type: 'string',
              example: '/posts',
              description: 'Post management endpoints',
            },
          },
        },
        features: {
          type: 'array',
          items: {
            type: 'string',
          },
          example: [
            'User Management',
            'Post Management',
            'CRUD Operations',
            'Swagger Documentation',
          ],
          description: 'List of available features',
        },
      },
    },
  })
  getHello(): {
    message: string;
    version: string;
    docs: string;
    endpoints: object;
    features: string[];
  } {
    return this.appService.getHello();
  }
}
