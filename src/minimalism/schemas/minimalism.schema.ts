import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MinimalismDocument = HydratedDocument<Minimalism>;

@Schema()
export class Minimalism {}

export const MinimalismSchema = SchemaFactory.createForClass(Minimalism);
