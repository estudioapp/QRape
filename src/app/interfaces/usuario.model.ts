export interface Cliente {
    $key?:string;
    Nombre:string;
    Email:string;
    Estado?:string; // Premiun o Normal
    tipoUsuario?:string;
    Empresa?:{
        NombreEmpresa:string;
        Empleados:{
            Nombre:string;
            Cargo:string;
            Jerarqia:string;
        }[]
    }
}
