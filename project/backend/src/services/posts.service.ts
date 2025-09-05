import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from '../entities/post.entity';
import { CreatePostDto, UpdatePostDto } from '../dto/post.dto';

@Injectable()
export class PostsService {
  private posts: Post[] = [
    {
      userId: 1,
      id: 1,
      title: 'Getting Started with React and TypeScript',
      body: 'React with TypeScript provides excellent developer experience with type safety and modern tooling. This combination allows for building scalable and maintainable web applications with confidence.',
    },
    {
      userId: 1,
      id: 2,
      title: 'Modern Web Development Best Practices',
      body: 'Following best practices in web development ensures code quality, maintainability, and performance. Key practices include proper component structure, state management, and testing strategies.',
    },
    {
      userId: 1,
      id: 3,
      title: 'Building Responsive User Interfaces',
      body: 'Creating responsive interfaces that work across all devices is essential in modern web development. Using CSS Grid, Flexbox, and media queries helps achieve this goal effectively.',
    },
    {
      userId: 2,
      id: 4,
      title: 'API Design and Backend Architecture',
      body: 'Well-designed APIs are the backbone of modern applications. RESTful principles, proper status codes, and comprehensive documentation make APIs easy to use and maintain.',
    },
    {
      userId: 2,
      id: 5,
      title: 'Database Design Fundamentals',
      body: 'Good database design is crucial for application performance and scalability. Proper normalization, indexing, and relationship modeling ensure efficient data storage and retrieval.',
    },
    {
      userId: 3,
      id: 6,
      title: 'User Experience and Interface Design',
      body: 'Great user experience comes from understanding user needs and creating intuitive interfaces. Consistent design systems and accessibility considerations are key to successful applications.',
    },
    {
      userId: 3,
      id: 7,
      title: 'Performance Optimization Techniques',
      body: 'Application performance directly impacts user satisfaction. Techniques like code splitting, lazy loading, and efficient state management help create fast, responsive applications.',
    },
    {
      userId: 4,
      id: 8,
      title: 'Testing Strategies for Web Applications',
      body: 'Comprehensive testing ensures application reliability and reduces bugs in production. Unit tests, integration tests, and end-to-end tests each serve important roles in quality assurance.',
    },
    {
      userId: 4,
      id: 9,
      title: 'DevOps and Deployment Best Practices',
      body: 'Modern deployment practices include continuous integration, automated testing, and infrastructure as code. These practices enable reliable and frequent deployments.',
    },
    {
      userId: 5,
      id: 10,
      title: 'Security Considerations for Web Apps',
      body: 'Security should be built into applications from the ground up. Proper authentication, authorization, input validation, and HTTPS are fundamental security measures.',
    },
  ];

  private nextId = 11;

  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: number): Post {
    const post = this.posts.find((post) => post.id === id);
    if (!post) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    return post;
  }

  findByUserId(userId: number): Post[] {
    return this.posts.filter((post) => post.userId === userId);
  }

  create(createPostDto: CreatePostDto): Post {
    const newPost: Post = {
      id: this.nextId++,
      ...createPostDto,
    };
    this.posts.push(newPost);
    return newPost;
  }

  update(id: number, updatePostDto: UpdatePostDto): Post {
    const postIndex = this.posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }

    this.posts[postIndex] = { ...this.posts[postIndex], ...updatePostDto };
    return this.posts[postIndex];
  }

  remove(id: number): void {
    const postIndex = this.posts.findIndex((post) => post.id === id);
    if (postIndex === -1) {
      throw new NotFoundException(`Post with ID ${id} not found`);
    }
    this.posts.splice(postIndex, 1);
  }
}
