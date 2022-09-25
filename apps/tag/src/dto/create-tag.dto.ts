import { IsBase64, IsNotEmpty, IsString } from 'class-validator';
import { Tag } from '../schema/tag.schema';
export class CreateTagDto {
  @IsString()
  @IsNotEmpty()
  value: string;
  @IsString()
  @IsNotEmpty()
  desc: string;
  @IsString()
  @IsNotEmpty()
  color: string;
  @IsBase64()
  @IsNotEmpty()
  image: string;
}
