import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { HttpService } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
@Module({
  imports: [
    MoviesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
