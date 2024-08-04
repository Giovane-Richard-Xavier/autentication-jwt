import { $Enums } from "@prisma/client";
import { IsBoolean, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    full_name: string;

    @IsString()
    birtdate?: string;

    @IsString()
    @IsNotEmpty()
    cpf: string;

    @IsString()
    @MinLength(4)
    @MaxLength(20)
    password_hash: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    phone?: string;

    @IsBoolean()
    is_active: boolean;

    @IsString()
    @IsNotEmpty()
    role: $Enums.user_role;

    @IsString()
    @IsNotEmpty()
    department_id: string;

    @IsString()
    @IsNotEmpty()
    office_id: string;
}
