import { $Enums } from "@prisma/client";

export class CreateUserDto {
    full_name: string;
    birtdate: string;
    cpf: string;
    password_hash: string;
    email: string;
    phone: string;
    is_active: boolean;
    role: $Enums.user_role;
    department_id: string;
    office_id: string;
}
