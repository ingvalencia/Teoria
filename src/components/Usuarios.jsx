
export function Usuarios(props) {
  console.log(props);
  return (
    <div>
      <h1>{props.nombre}</h1>
      <h1>{props.edad}</h1>
      <h1>{props.direccion.ciudad}</h1>
    </div>
  );
}

/*
export function Usuarios({nombre,edad}){
  return(<h1>Nombre: {nombre} y edad: {edad}</h1>)
}*/

//export default Usuarios;