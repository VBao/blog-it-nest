import { Controller, Get, Query } from '@nestjs/common';

@Controller('post')
// @Injectable({ scope: Scope.DEFAULT })
export class PostController {
  count = 0;
  @Get()
  findAll() {
    return `Hello from list post ${this.count++}`;
  }

  @Get('/getSlug')
  findBySlug(@Query('slug1') slug1: string) {
    return `provided slug is: ${slug1}`;
  }
}
