import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ description: 'Post title' })
  @IsNotEmpty()
  @IsString()
  title: string;

  @ApiPropertyOptional({ description: 'Post content' })
  @IsOptional()
  @IsString()
  body?: string;

  @ApiProperty({ description: 'User ID who created the post' })
  @IsNumber()
  userId: number;
}

export class UpdatePostDto {
  @ApiPropertyOptional({ description: 'Post title' })
  @IsOptional()
  @IsString()
  title?: string;

  @ApiPropertyOptional({ description: 'Post content' })
  @IsOptional()
  @IsString()
  body?: string;

  @ApiPropertyOptional({ description: 'User ID who created the post' })
  @IsOptional()
  @IsNumber()
  userId?: number;
}

export class PostResponseDto {
  @ApiProperty({ description: 'Post ID' })
  id: number;

  @ApiProperty({ description: 'Post title' })
  title: string;

  @ApiPropertyOptional({ description: 'Post content' })
  body?: string;

  @ApiProperty({ description: 'User ID who created the post' })
  userId: number;
}
