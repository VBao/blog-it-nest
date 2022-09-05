import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Post } from 'src/post/post.schema';

@Schema()
export class User extends Document {
  name: string;
  username: string;
  bio: string;
  password: string;
  avatar: string;
  role: string;
  schoolEmail: string;
  privateEmail: string;
  website: string;
  @Prop({ type: Date, default: Date.now() })
  createdAt: Date;
  @Prop({ type: Date, default: Date.now() })
  updatedAt: Date;
  status: 'Activated' | 'Deactivated' | 'Deleted';
  followedTag: any[];
  @Prop({ type: [Types.ObjectId], default: [], ref: 'User' })
  followedUser: any[];
  @Prop({ type: [Types.ObjectId], default: [], ref: 'Post' })
  readingList: Post[];
}

export const UserSchema = SchemaFactory.createForClass(User);
