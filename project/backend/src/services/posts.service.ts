import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from '../entities/post.entity';
import { CreatePostDto, UpdatePostDto } from '../dto/post.dto';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class PostsService {
  constructor(private readonly databaseService: DatabaseService) {}

  findAll(): Post[] {
    return this.databaseService.readPosts();
  }

  findOne(id: number): Post {
    const posts = this.databaseService.readPosts();
    const post = posts.find((post) => post.id === id);
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  findByUserId(userId: number): Post[] {
    const posts = this.databaseService.readPosts();
    return posts.filter((post) => post.userId === userId);
  }

  create(createPostDto: CreatePostDto): Post {
    const posts = this.databaseService.readPosts();
    const nextId = Math.max(...posts.map(p => p.id), 0) + 1;
    const newPost: Post = {
      id: nextId,
      ...createPostDto,
    };
    posts.push(newPost);
    this.databaseService.writePosts(posts);
    return newPost;
  }

  update(id: number, updatePostDto: UpdatePostDto): Post {
    const posts = this.databaseService.readPosts();
    const postIndex = posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    posts[postIndex] = { ...posts[postIndex], ...updatePostDto };
    this.databaseService.writePosts(posts);
    return posts[postIndex];
  }

  remove(id: number): void {
    const posts = this.databaseService.readPosts();
    const postIndex = posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    posts.splice(postIndex, 1);
    this.databaseService.writePosts(posts);
  }
}
