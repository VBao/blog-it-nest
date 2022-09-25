import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { CreateTagDto } from './dto/create-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';
import { Tag } from './schema/tag.schema';

@Injectable()
export class TagService {
  constructor(@InjectModel(Tag.name) private readonly tagModel: Model<Tag>) {}

  async findAll(): Promise<Tag[]> {
    return await this.tagModel.find().exec();
  }

  async findById(id: string): Promise<Tag> {
    return await this.tagModel.findById(id).exec();
  }

  async findBySlug(slug: string): Promise<Tag> {
    return await this.tagModel.findOne({ slug }).exec();
  }

  async createTag(createDto: CreateTagDto): Promise<Tag> {
    try {
      const createTag = new this.tagModel(createDto);
      // awthis.tagModel.create(createTag);
      createTag.createdBy = new mongoose.Types.ObjectId().toString();
      createTag.updatedBy = new mongoose.Types.ObjectId().toString();
      return await this.tagModel.create(createTag);
    } catch (e) {
      if (e.code === 11000) {
        let duplicateValue = '';
        Object.entries(e.keyValue).forEach((entry) => {
          duplicateValue += '{' + entry[0] + ':' + entry[1] + '}, ';
        });
        throw new HttpException(`duplicate value at: ` + duplicateValue, 400);
      }
    }
  }

  async updateTag(id: string, updateDto: UpdateTagDto): Promise<Tag> {
    const oldTag = await this.tagModel.findById(id);
    const updateQueryTag: mongoose.UpdateQuery<Tag> = {};
    Object.entries(updateDto).find(([key, value]) => {
      if (value != null) updateQueryTag[key] = value;
    });
    try {
      return await this.tagModel
        .findOneAndUpdate({ _id: id }, updateQueryTag)
        .exec();
    } catch (error) {
      throw new Error('');
    }
    // return oldTag;
  }
}
