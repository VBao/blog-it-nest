import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { CreateTagDto } from './dto/create-tag.dto';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Post('/create')
  async createTag(@Body() createTag: CreateTagDto) {
    return await this.tagService.createTag(createTag);
  }
}
