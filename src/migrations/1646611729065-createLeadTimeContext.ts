/* import {MigrationInterface, QueryRunner} from "typeorm";

export class createLeadTimeContext1646611729065 implements MigrationInterface {
    name = 'createLeadTimeContext1646611729065'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deployments" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "startedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "finishedAt" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TABLE "tasks" ADD "deployedAt" TIMESTAMP WITH TIME ZONE`);
        await queryRunner.query(`ALTER TYPE "events_eventtype_enum" RENAME TO "events_eventtype_enum_old"`);
        await queryRunner.query(`CREATE TYPE "events_eventtype_enum" AS ENUM('START_CYCLE', 'FINISH', 'SHIP', 'PROMOTE', 'FAIL', 'RECOVERY', 'GENERIC')`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "eventType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "eventType" TYPE "events_eventtype_enum" USING "eventType"::"text"::"events_eventtype_enum"`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "eventType" SET DEFAULT 'START_CYCLE'`);
        await queryRunner.query(`DROP TYPE "events_eventtype_enum_old"`);
        await queryRunner.query(`ALTER TYPE "events_eventtype_enum" RENAME TO "events_eventtype_enum_old"`);
        await queryRunner.query(`CREATE TYPE "events_eventtype_enum" AS ENUM('START_CYCLE', 'FINISH', 'SHIP', 'PROMOTE', 'FAIL', 'RECOVERY', 'GENERIC')`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "eventType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "eventType" TYPE "events_eventtype_enum" USING "eventType"::"text"::"events_eventtype_enum"`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "eventType" SET DEFAULT 'START_CYCLE'`);
        await queryRunner.query(`DROP TYPE "events_eventtype_enum_old"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "events_eventtype_enum_old" AS ENUM('START_CYCLE', 'SHIP', 'PROMOTE', 'FAIL', 'RECOVERY', 'GENERIC')`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "eventType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "eventType" TYPE "events_eventtype_enum_old" USING "eventType"::"text"::"events_eventtype_enum_old"`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "eventType" SET DEFAULT 'START_CYCLE'`);
        await queryRunner.query(`DROP TYPE "events_eventtype_enum"`);
        await queryRunner.query(`ALTER TYPE "events_eventtype_enum_old" RENAME TO "events_eventtype_enum"`);
        await queryRunner.query(`CREATE TYPE "events_eventtype_enum_old" AS ENUM('START_CYCLE', 'SHIP', 'PROMOTE', 'FAIL', 'RECOVERY', 'GENERIC')`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "eventType" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "eventType" TYPE "events_eventtype_enum_old" USING "eventType"::"text"::"events_eventtype_enum_old"`);
        await queryRunner.query(`ALTER TABLE "events" ALTER COLUMN "eventType" SET DEFAULT 'START_CYCLE'`);
        await queryRunner.query(`DROP TYPE "events_eventtype_enum"`);
        await queryRunner.query(`ALTER TYPE "events_eventtype_enum_old" RENAME TO "events_eventtype_enum"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "deployedAt"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "finishedAt"`);
        await queryRunner.query(`ALTER TABLE "tasks" DROP COLUMN "startedAt"`);
        await queryRunner.query(`ALTER TABLE "deployments" DROP COLUMN "state"`);
    }

}
 */