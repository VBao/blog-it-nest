import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Post extends Document {
  @Prop()
  userUsername: string;
  @Prop()
  userAvater: string;
  @Prop()
  userName: string;
  @Prop()
  banner: string;
  @Prop()
  title: string;
  @Prop()
  content: string;
  @Prop()
  slug: string;
  @Prop()
  updatedAt: Date;
  @Prop()
  createdAt: Date;
  @Prop()
  status: 'Published' | 'Draft' | 'Deleted' | 'Archived';
}

export const PostSchema = SchemaFactory.createForClass(Post);
