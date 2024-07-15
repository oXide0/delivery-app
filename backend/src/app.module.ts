import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Customer } from './users/user.entity';
import { UsersModule } from './users/users.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: '111418',
            database: 'delivery',
            entities: [Customer],
            synchronize: true,
        }),
        UsersModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
    constructor(private readonly dataSource: DataSource) {}
}
