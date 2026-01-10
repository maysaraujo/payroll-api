import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PayrollModule } from './payroll/payroll.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URL!),
    PayrollModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
