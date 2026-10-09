// ===== Lista de Super - Parte 3 (Entrega Final) =====

let listaDeSuper = ["Sal", "Leche", "Arroz"];

// 1. Funcion que imprime la lista numerada en la consola
function logItems(arreglo) {
  arreglo.forEach((producto, indice) => {
    console.log(`${indice}: ${producto}`);
  });
}

// Arma la lista como texto para mostrarla en las ventanitas
function textoLista(arreglo) {
  if (arreglo.length === 0) {
    return "La lista esta vacia.";
  }
  return arreglo.map((producto, indice) => `${indice}: ${producto}`).join("\n");
}

// 2. Super App interactiva
let comando = "";

while (comando !== "salir") {
  comando = prompt("Comando: nuevo, listar, borrar o salir");

  // Si toca Cancelar, prompt devuelve null
  if (comando === null) {
    comando = "salir";
  }
  comando = comando.trim().toLowerCase();

  if (comando === "nuevo") {
    let item = prompt("¿Que producto queres agregar?");
    if (item !== null && item.trim() !== "") {
      listaDeSuper.push(item.trim());
      console.log(`Se agrego: ${item.trim()}`);
      alert(`Se agrego: ${item.trim()}`);
    } else {
      console.log("No se agrego nada.");
      alert("No se agrego nada.");
    }

  } else if (comando === "listar") {
    logItems(listaDeSuper);
    alert("Tu lista:\n\n" + textoLista(listaDeSuper));

  } else if (comando === "borrar") {
    logItems(listaDeSuper);
    let entrada = prompt(
      "Tu lista:\n\n" + textoLista(listaDeSuper) +
      "\n\n¿Que numero de producto queres borrar?"
    );

    if (entrada === null || entrada.trim() === "") {
      console.log("Borrado cancelado.");
      alert("Borrado cancelado.");
    } else {
      let indice = Number(entrada);

      if (Number.isInteger(indice) && indice >= 0 && indice < listaDeSuper.length) {
        let eliminado = listaDeSuper.splice(indice, 1);
        console.log(`Se elimino: ${eliminado[0]}`);
        alert(`Se elimino: ${eliminado[0]}`);
      } else {
        console.log("indice invalido.");
        alert("indice invalido.");
      }
    }

  } else if (comando === "salir") {
    console.log("Saliendo...");

  } else {
    console.log("Comando no reconocido.");
    alert("Comando no reconocido.");
  }
}

console.log("Programa finalizado");
alert("Programa finalizado");