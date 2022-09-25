import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { NextFunction } from 'express';
import { CreatePost } from './dto/create-post.dto';
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

  @Post('/create')
  async create(@Body() createPost: CreatePost) {
    return 'working on it';
  }
}
