import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

// Interfaz para los usuarios
export interface User{
  id: number;
  name: string;
  email: string;
}


@Injectable()
export class UsersService {
  private users: User[] = []; //Arreglo donde se guardaran los usuarios
  private currentId = 1;  //Inicializa el ID de los usuarios

  create(user: CreateUserDto): User {
    const nameExists = this.users.some(userDB => userDB.name === user.name);  //Busca un usuario en el array con el name ingresado y si lo encuentra lo guarda en la variable
    //Si nameExist tiene un usuario guardado significa que ya existe
    if (nameExists) { 
      throw new BadRequestException("A user with the given name already exists.")
    }

    const emailExists = this.users.some(userDB => userDB.email === user.email);  //Busca un usuario en el array con el email ingresado y si lo encuentra lo guarda en la variable  
    //Si emailExist tiene un usuario guardado significa que ya existe
    if (emailExists) {
      throw new BadRequestException("A user with the given email already exists.")
    }
    
    //Crea una instancia de User con los datos recibidos
    const newUser: User = {
      id: this.currentId++,
      name: user.name,
      email: user.email,
    };
    this.users.push(newUser) //Guarda la instancia al final del arreglo
    return newUser;  //Retorna el usuario creado
  }

  findAll(): User[] {
    return this.users; //Devuelve el array de usuarios
  }

  remove(id: number){
    const originalLength = this.users.length; //Guarda el tamanio original del array
    this.users = this.users.filter(user => user.id !== id) //Crea un nuevo array con los usuarios cuyo id es distinto al que buscamos
    if (originalLength === this.users.length) {  //Si el tamanio del array es igual al original significa que el usuario no fue encontrado
      throw new NotFoundException("User not found")  //Lanza una excepcion 
    }
    return; 
  }
}
