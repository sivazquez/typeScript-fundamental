import { isStringObject } from "util/types";
import { IsNotEmpty, IsOptional, IsString, } from 'class-validator';

export class UpdateCarDTO {
    @IsString()
    @IsOptional()
    readonly brand?: string;
    @IsString()
    @IsOptional()
    readonly model?: string;
}