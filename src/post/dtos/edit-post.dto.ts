import { PartialType, OmitType } from '@nestjs/swagger';
import { CreatePostDto } from './create-post.dto';

export class EditPostDto extends PartialType(
  OmitType(CreatePostDto, ['slug'] as const),//quitamos propiedasdes para que este dto las ignore,
) {}
