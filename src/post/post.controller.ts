import { Controller, Get, Query } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('post')
// @Injectable({ scope: Scope.DEFAULT })
export class PostController {
  constructor(private postService: PostService) {}
  count = 0;
  @Get()
  async findAll() {
    return await this.postService.findAll();
    // return `Hello from list post ${this.count++}`;
  }

  @Get('/getSlug')
  findBySlug(@Query('slug1') slug1: string) {
    return `provided slug is: ${slug1}`;
  }
}
