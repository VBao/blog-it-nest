import { Controller } from '@nestjs/common';
import { Body, Post, Put, Query } from '@nestjs/common/decorators';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}
  @Post('/create')
  async createTag(@Body() createTag: CreateTagDto) {
    return await this.tagService.createTag(createTag);
  }

  @Put()
  async putTag(@Query('id') id: string, @Body() updateTag: UpdateTagDto) {
    // await this.tagService.updateTag(id, updateTag);
    return await this.tagService.updateTag(id, updateTag);

    // try {
    //   console.log('Here');

    // } catch (e) {}
  }
}
