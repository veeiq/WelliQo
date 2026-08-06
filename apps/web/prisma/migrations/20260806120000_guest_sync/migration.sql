-- AlterTable
ALTER TABLE "AssessmentResult" DROP COLUMN "reportVersion",
ADD COLUMN     "clientReportId" TEXT NOT NULL,
ADD COLUMN     "schemaVersion" TEXT NOT NULL DEFAULT '1.0';

-- CreateIndex
CREATE UNIQUE INDEX "AssessmentResult_clientReportId_key" ON "AssessmentResult"("clientReportId");
