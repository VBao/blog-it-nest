import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document, Types } from 'mongoose';

export class Comment {
  @Prop({ type: Types.ObjectId })
  _id: string;
  @Prop({ type: Types.ObjectId, ref: 'User' })
  commenterId: string;
  @Prop({ default: Date.now() })
  createdAt: Date;
  @Prop({ default: Date.now() })
  updatedAt: Date;
  content: string;
  @Prop({ default: 0 })
  interact: number;
  parentId: number;
  interactList: any[];
}

@Schema()
export class Post extends Document {
  @Prop({ type: Types.ObjectId, ref: 'User' })
  authorId: string;
  @Prop({ isRequired: true })
  banner: string;
  @Prop({ isRequired: true })
  title: string;
  @Prop({ isRequired: true })
  content: string;
  @Prop({ isRequired: true })
  slug: string;
  @Prop({ default: Date.now() })
  updatedAt: Date;
  @Prop({ default: Date.now() })
  createdAt: Date;
  @Prop({ isRequired: true })
  status: 'Draft' | 'Published' | 'Delete';
  @Prop({ default: [] })
  tag: string[];
  @Prop()
  comment: Comment[];
  @Prop({ default: 0 })
  commentCount: number;
  @Prop({ default: 0 })
  reactionCount: number;
  @Prop()
  reactionList: number[];
  @Prop()
  savedByUser: any[];
  @Prop()
  commentList: number[];
}

export const PostSchema = SchemaFactory.createForClass(Post);
