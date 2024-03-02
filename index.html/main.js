const ficha = document.getElementById("ficha")
const nombre = document.getElementById("nombre")
const apellido = document.getElementById("apellido")
const correo = document.getElementById("correo")
const telefono = document.getElementById("telefono")
const genero = document.getElementsByName('genero');
const ciudad = document.getElementById("ciudad")
const habilidades = document.getElementsByName("habilidades")
const enviar = document.getElementById("enviar")
const opciones = document.getElementById("opciones")



//expresiones regulares
// let permite declarar variables limitando su alcance al bloque, declaración, o expresión donde se está usando, no es global

//validar la ficha 
const validarFicha = function () {
  let cod = /^[a-z]{3}_[0-9]{5}$/;
  let texto = ficha.value
  console.log(texto);

  if (texto.match(cod) == null) {
    alert("ingrese una ficha valida")
  } // != siginifica desigualdad 

}

//validar nombre
const validarNombre = function () {
  let name = /^[A-Za-z ° ]+$/;
  let texto = nombre.value
  console.log(texto);

  if (texto.match(name) == null) {
    alert("ingrese un nombre")
  }
}


//validar apellido
const validarApellido = function () {
  let lastname = /^[A-Za-z ° ]+$/;
  let texto = apellido.value
  console.log(texto);

  if (texto.match(lastname) == null) {
    alert("ingrese un apellido")
  }
}


//validar correo 
const validarCorreo = function () {
  let email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let texto = correo.value
  console.log(texto)

  if (texto.match(email) == null) {
    alert("escriba un correo")
  }
}


//validar telefono
const validarTelefono = function () {
  let tel = /^[0-9]{10}$/
  let texto = telefono.value
  console.log(texto)

  if (texto.match(tel) == null) {
    alert("escriba su telefono")
  }
}


//validar genero
const validarGenero = function (evento) {
  let validado = 0
  for (const i of genero) {  //i recorre las tres opciones y busca la que este marcada
    if (i.checked) {
      validado = i.value
      break
    }

  }
  if (validado === 0) {
    evento.preventDefault() //evita que el formulario se envie
    alert("debe marcar un genero")
  }
}

//validar ciudad
const validarCiudad = function (evento) {
  if (ciudad.value === "") {
    evento.preventDefault()
    alert("indique una ciudad")
  }
}



const validarOpciones = function () {
  let checkboxes = document.getElementsByName("habilidades")
  let cont = 0;
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      cont++
    }
  }
  console.log(cont)
  if (cont < 3) {
    alert("debes escojer mas")
  } else {
    alert("bien")
  }
}