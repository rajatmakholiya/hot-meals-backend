import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [AddressController],
  providers: [PrismaService, AddressService],
})
export class AddressModule {}
