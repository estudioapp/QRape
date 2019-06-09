export interface Cliente {
    $key?:string;
    Nombre:string;
    Email:string;
    Estado?:string; // Premiun o Normal
    Empresa?:{
        NombreEmpresa:string;
        Empleados:{
            Nombre:string;
            Cargo:string;
            Jerarqia:string;
        }[]
    }
}
