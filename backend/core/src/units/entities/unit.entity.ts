import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm"
import {
  IsBoolean,
  IsDate,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  IsUUID,
} from "class-validator"
import { Expose, Type } from "class-transformer"
import { Property } from "../../property/entities/property.entity"
import { AmiChart } from "../../ami-charts/entities/ami-chart.entity"
import { ValidationsGroupsEnum } from "../../shared/types/validations-groups-enum"

@Entity({ name: "units" })
class Unit {
  @PrimaryGeneratedColumn("uuid")
  @Expose()
  @IsUUID(4, { groups: [ValidationsGroupsEnum.default] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  id: string

  @CreateDateColumn()
  @Expose()
  @IsDate({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => Date)
  createdAt: Date

  @UpdateDateColumn()
  @Expose()
  @IsDate({ groups: [ValidationsGroupsEnum.default] })
  @Type(() => Date)
  updatedAt: Date

  @ManyToOne(() => AmiChart, (amiChart) => amiChart.units, { eager: true, nullable: true })
  amiChart: AmiChart | null

  @Column({ nullable: true, type: "text" })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  amiPercentage?: string | null

  @Column({ nullable: true, type: "text" })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsNumberString({}, { groups: [ValidationsGroupsEnum.default] })
  annualIncomeMin?: string | null

  @Column({ nullable: true, type: "text" })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsNumberString({}, { groups: [ValidationsGroupsEnum.default] })
  monthlyIncomeMin?: string | null

  @Column({ nullable: true, type: "integer" })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsNumber({}, { groups: [ValidationsGroupsEnum.default] })
  floor?: number | null

  @Column({ nullable: true, type: "text" })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  annualIncomeMax?: string | null

  @Column({ nullable: true, type: "integer" })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsNumber({}, { groups: [ValidationsGroupsEnum.default] })
  maxOccupancy?: number | null

  @Column({ nullable: true, type: "integer" })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsNumber({}, { groups: [ValidationsGroupsEnum.default] })
  minOccupancy?: number | null

  @Column({ nullable: true, type: "text" })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsNumberString({}, { groups: [ValidationsGroupsEnum.default] })
  monthlyRent?: string | null

  @Column({ nullable: true, type: "integer" })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsNumber({}, { groups: [ValidationsGroupsEnum.default] })
  numBathrooms?: number | null

  @Column({ nullable: true, type: "integer" })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsNumber({}, { groups: [ValidationsGroupsEnum.default] })
  numBedrooms?: number | null

  @Column({ nullable: true, type: "text" })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  number?: string | null

  @Column({ nullable: true, type: "text" })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  priorityType?: string | null

  @Column({ nullable: true, type: "text" })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  reservedType?: string | null

  @Column({ nullable: true, type: "numeric", precision: 8, scale: 2 })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  sqFeet?: string | null

  @Column({ nullable: true, type: "text" })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  status?: string | null

  @Column({ nullable: true, type: "text" })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  unitType?: string | null

  @Column({ nullable: true, type: "numeric", precision: 8, scale: 2 })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsString({ groups: [ValidationsGroupsEnum.default] })
  monthlyRentAsPercentOfIncome?: string | null

  @ManyToOne(() => Property, (property) => property.units, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  property: Property

  @Column({ type: "boolean", nullable: true })
  @Expose()
  @IsOptional({ groups: [ValidationsGroupsEnum.default] })
  @IsBoolean({ groups: [ValidationsGroupsEnum.default] })
  bmrProgramChart?: boolean | null
}

export { Unit as default, Unit }
