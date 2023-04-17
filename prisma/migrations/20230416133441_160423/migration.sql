-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "dueDate" TIMESTAMP(3),
ADD COLUMN     "list_position" INTEGER;

-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "dueDate" TIMESTAMP(3),
ADD COLUMN     "list_position" INTEGER;
