import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

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
  @Prop({ type: [Types.ObjectId], default: [] })
  post: string[];
  @Prop({ type: [Types.ObjectId], default: [] })
  moderator: string[];
}

export const TagSchema = SchemaFactory.createForClass(Tag);
