import { Injectable } from '@nestjs/common';
import { User } from '../entities/user.entity';
import { Post } from '../entities/post.entity';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class DatabaseService {
  private readonly dataDir = path.join(process.cwd(), 'data');
  private readonly usersFile = path.join(this.dataDir, 'users.json');
  private readonly postsFile = path.join(this.dataDir, 'posts.json');

  constructor() {
    this.ensureDataDirectory();
    this.initializeData();
  }

  private ensureDataDirectory(): void {
    if (!fs.existsSync(this.dataDir)) {
      fs.mkdirSync(this.dataDir, { recursive: true });
    }
  }

  private initializeData(): void {
    // Initialize users if file doesn't exist
    if (!fs.existsSync(this.usersFile)) {
      const initialUsers: User[] = [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          phone: '1-770-736-8031 x56442',
          website: 'hildegard.org',
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          phone: '010-692-6593 x09125',
          website: 'anastasia.net',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
          phone: '1-463-123-4447',
          website: 'ramiro.info',
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          username: 'Karianne',
          email: 'Julianne.OConner@kory.org',
          phone: '493-170-9623 x156',
          website: 'kale.biz',
        },
        {
          id: 5,
          name: 'Chelsey Dietrich',
          username: 'Kamren',
          email: 'Lucio_Hettinger@annie.ca',
          phone: '(254)954-1289',
          website: 'demarco.info',
        },
      ];
      this.writeUsers(initialUsers);
    }

    // Initialize posts if file doesn't exist
    if (!fs.existsSync(this.postsFile)) {
      const initialPosts: Post[] = [
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
          userId: 2,
          id: 3,
          title: 'API Design and Backend Architecture',
          body: 'Well-designed APIs are the backbone of modern applications. RESTful principles, proper status codes, and comprehensive documentation make APIs easy to use and maintain.',
        },
        {
          userId: 2,
          id: 4,
          title: 'Database Design Fundamentals',
          body: 'Good database design is crucial for application performance and scalability. Proper normalization, indexing, and relationship modeling ensure efficient data storage and retrieval.',
        },
        {
          userId: 3,
          id: 5,
          title: 'User Experience and Interface Design',
          body: 'Great user experience comes from understanding user needs and creating intuitive interfaces. Consistent design systems and accessibility considerations are key to successful applications.',
        },
      ];
      this.writePosts(initialPosts);
    }
  }

  // User operations
  readUsers(): User[] {
    try {
      const data = fs.readFileSync(this.usersFile, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  writeUsers(users: User[]): void {
    try {
      fs.writeFileSync(this.usersFile, JSON.stringify(users, null, 2));
    } catch (error) {
      console.error('Error writing users:', error);
    }
  }

  // Post operations
  readPosts(): Post[] {
    try {
      const data = fs.readFileSync(this.postsFile, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  writePosts(posts: Post[]): void {
    try {
      fs.writeFileSync(this.postsFile, JSON.stringify(posts, null, 2));
    } catch (error) {
      console.error('Error writing posts:', error);
    }
  }
}
