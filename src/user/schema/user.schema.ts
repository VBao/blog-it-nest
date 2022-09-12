import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Post } from 'src/post/post.schema';
import { Tag } from 'src/tag/schema/tag.schema';

@Schema({ collection: 'user' })
export class User extends Document {
  @Prop({ unique: true, required: true })
  name: string;
  @Prop({ unique: true, required: true })
  username: string;
  @Prop({ required: true, default: 'other' })
  gender: 'male' | 'female' | 'other';
  @Prop({ default: '' })
  bio: string;
  @Prop({ required: true })
  password: string;
  @Prop({
    default:
      'https://avatars.dicebear.com/api/gridy/' +
      Math.floor(100000 + Math.random() * 900000) +
      '.svg',
  })
  avatar: string;
  @Prop({ default: 'User', required: true })
  role: 'Moderator' | 'Admin' | 'User';
  @Prop({ unique: true, required: true })
  schoolEmail: string;
  @Prop({ unique: true, required: true })
  privateEmail: string;
  @Prop({ default: '' })
  website: string;
  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
  @Prop({ type: Date, default: Date.now() })
  updatedAt: Date;
  @Prop({ default: 'Activated' })
  status: 'Activated' | 'Deactivated' | 'Deleted';
  @Prop({ type: [Types.ObjectId], default: [], ref: 'Tag' })
  followedTag: Tag[];
  @Prop({ type: [Types.ObjectId], default: [], ref: 'User' })
  followedUser: User[];
  @Prop({ type: [Types.ObjectId], default: [], ref: 'Post' })
  readingList: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);
