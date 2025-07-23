import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'prisma/prisma.module';
@Module({
  imports: [
    PrismaModule,
    JwtModule.register({
      secret: 'abcdefghijklmnopqrstuvwxyz',
      signOptions: { expiresIn: '30d' },
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
