//Declaración de las variables que dan inicio a las operaciones
//Constitucion del saldo inicial
const saldoInicial = 123343.56;
//Variable que almacena el saldo actualizado de la caja de ahorros
let saldoCajaAhorro;
//Variable que almacena el monto a depositado por el usuario
let dineroDepositado;
//Funcion que coinvierte un numero al formato de pesos argentinos
function numeroAPesos(dinero) {
  return (dinero = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(dinero));
}
//Clase que toma  parametros del ordenador y del usuario y crea un objeto donde se guarda dicha informacion
class Deposito{
  constructor(fecha, hora, operacion, monto, saldo) {
      this.fecha = fecha;
      this.hora = hora;
      this.operacion = operacion;
      this.monto = monto;
      this.saldo = saldo;
  }
  //Funcion que captura la fecha en que se realiza la operación
  capturarFecha(){
    this.fecha = new Date().toLocaleDateString();
  }
  //Funcion que captura la hora en que se realiza la operacion
  capturarHora(){
    this.hora = new Date().toLocaleTimeString();
  }
  //Funcion que muestra el tipo de operacion
  mostrarOperacion(){
    this.operacion = "Depósito"
  }
  //Funcion que captura la informacion sobre la operacion provista por el usuario y la devuelve en formato peso argentino
  capturarMonto(){ 
    dineroDepositado = parseInt(prompt("Ingrese el importe que desea depositar"));
    this.monto = numeroAPesos(dineroDepositado);
  }
  //Funcion que devuelve el saldo actualizado y en formato peso argentino
  actualizarSaldo(){
    saldoCajaAhorro = saldoInicial + dineroDepositado;
    this.saldo = numeroAPesos(saldoCajaAhorro);
  }
}

let depositoInput = document.getElementById("depositos-text");
depositoInput.className = "input-group";
depositoInput.innerHTML = '<p class="text">Ingrese el monto que desea depositar $: <input type="number" id="depositos-input"></input></p>';
