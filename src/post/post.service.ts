import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from './post.schema';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name) private readonly postModel: Model<Post>,
  ) {}

  async findAll(): Promise<Post[]> {
    return await this.postModel.find().populate('tag').exec();
  }

  async findBySlug(slug: string): Promise<Post> {
    const post = await this.postModel.findOne({ slug }).exec();
    return post;
  }
}
