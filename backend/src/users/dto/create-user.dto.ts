import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator"; //npm i class-validator class-transformer

// Valida que los datos de entrada para crear un usuario sean correctos
export class CreateUserDto {
    @IsNotEmpty()
    @MinLength(3)
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;
}
