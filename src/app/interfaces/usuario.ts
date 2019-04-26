export interface Usuario {
    $key?:string;
    Nombre:string;
    Email:string;
    Contrasena:string;
    Empresa?:{
        NombreEmpresa:string;
        Empleados:{
            Nombre:string;
            Cargo:string;
            Jerarqia:string;
        }[]
    }
}
