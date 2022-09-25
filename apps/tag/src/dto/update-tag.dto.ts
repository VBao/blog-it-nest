import { IsBase64, IsString } from 'class-validator';
export class UpdateTagDto {
  @IsString()
  value?: string;
  @IsString()
  desc?: string;
  @IsString()
  color?: string;
  @IsBase64()
  image?: string;
}
