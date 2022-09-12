import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Post } from 'src/post/post.schema';
import { User } from 'src/user/schema/user.schema';

@Schema({ collection: 'tag' })
export class Tag extends Document {
  @Prop({ type: Date, default: Date.now(), required: true })
  updatedAt: Date;
  @Prop({ type: Date, default: Date.now(), required: true })
  createdAt: Date;
  @Prop({ type: Types.ObjectId, required: true })
  updatedBy: string;
  @Prop({ type: Types.ObjectId, required: true })
  createdBy: string;
  @Prop({ unique: true, required: true })
  value: string;
  @Prop({ unique: true, required: true })
  desc: string;
  @Prop({ unique: true, required: true })
  color: string;
  @Prop({ required: true })
  image: string;
  @Prop({ type: [Types.ObjectId], default: [], ref: 'Post' })
  post: Post[];
  @Prop({ type: [Types.ObjectId], default: [], ref: 'User' })
  moderator: User[];
}

export const TagSchema = SchemaFactory.createForClass(Tag);
