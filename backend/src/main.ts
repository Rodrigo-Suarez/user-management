import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Habilita CORS para permitir solicitudes desde otros dominios.

  // Configura el pipe de validación global para validar y transformar los datos de entrada.
  app.useGlobalPipes(new ValidationPipe({ 
    whitelist: true, //elimina propiedades no definidas en el DTO.
    transform: true //convierte automáticamente tipos (ej: strings a números).
  }));

  await app.listen(process.env.PORT ?? 3000); //Utiliza el puerto definido en la variable de entorno PORT o 3000 por defecto.
}
bootstrap();
