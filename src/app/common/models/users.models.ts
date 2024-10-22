export interface UserI {
    nombre: string;
    edad: number;
    //correo: string
    id: string;
}

export interface Perfil {
    nombre: string;
    edad: number;
    correo: string;
    id: string;


}

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
}