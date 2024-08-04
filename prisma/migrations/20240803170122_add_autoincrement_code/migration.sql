-- AlterTable
CREATE SEQUENCE department_code_seq;
ALTER TABLE "Department" ALTER COLUMN "code" SET DEFAULT nextval('department_code_seq');
ALTER SEQUENCE department_code_seq OWNED BY "Department"."code";

-- AlterTable
CREATE SEQUENCE office_code_seq;
ALTER TABLE "Office" ALTER COLUMN "code" SET DEFAULT nextval('office_code_seq');
ALTER SEQUENCE office_code_seq OWNED BY "Office"."code";
