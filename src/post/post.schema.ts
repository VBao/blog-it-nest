import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Date, Document, Types } from 'mongoose';

export class Comment {
  @Prop({ type: Types.ObjectId })
  _id: string;
  @Prop({ type: Types.ObjectId, ref: 'User' })
  commenterId: string;
  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
  @Prop({ type: Date, default: Date.now() })
  updatedAt: Date;
  content: string;
  @Prop({ default: 0 })
  interact: number;
  parentId: number;
  interactList: any[];
}

@Schema({ collection: 'post' })
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
  @Prop({ type: Date, default: Date.now() })
  updatedAt: Date;
  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
  @Prop({ isRequired: true })
  status: 'Draft' | 'Published' | 'Delete';
  @Prop({ type: [Types.ObjectId], default: [], ref: 'Tag' })
  tag: string[];
  @Prop()
  comment: Comment[];
  @Prop({ default: 0 })
  commentCount: number;
  @Prop({ default: 0 })
  reactionCount: number;
  @Prop({ type: [Types.ObjectId], default: [], ref: 'User' })
  reactionList: string[]; // Array user id react to post
  @Prop({ type: [Types.ObjectId], default: [], ref: 'User' })
  savedByUser: string[]; // Array user id saved post to reading list
  @Prop({ type: [Types.ObjectId], default: [], ref: 'User' })
  commentList: string[]; // Array user id commented to the post
}

export const PostSchema = SchemaFactory.createForClass(Post);
