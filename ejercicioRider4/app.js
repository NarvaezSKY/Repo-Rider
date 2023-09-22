let texto = document.getElementById('resultado');
let divNotas = document.getElementById('miDiv');

const setText = (data) => {
    texto.textContent = data;
    console.log(typeof (data));
    console.log(data);
    texto.textContent = data;
}

const getData = () => {
    return new Promise((resuelve, rechaza) => {
        setText('Calcular Notas?');
        setTimeout(() => {
            resuelve(true);
        }, 2000);
    })
}

const showData = (arrayNotas) => {
    return new Promise((resuelve1, rechaza) => {
        setText('Esperando Autorizacion');
        resuelve1 = {};
        for (let index = 0; index < arrayNotas.length; index++) {
            resuelve1[index] = arrayNotas[index];
        }
        setTimeout(() => {
            calcularProm(resuelve1);
        }, 2000);
    })
}

const calcularProm = (objetoNotas) => {
    return new Promise((resuelve2, rechaza) => {
        resuelve2 = objetoNotas[0] + objetoNotas[1] + objetoNotas[2];
        let resuFinal = resuelve2 / 3;
        setText(`El promedio es: ${resuFinal}`);
    })
}

let arrayTotal = [];
const subirHTML = (arrayNotas) => {
    divNotas.innerHTML = "";

    arrayTotal.push(arrayNotas)
    console.log(arrayTotal)

    arrayTotal.forEach((element, index) => {
        let notas = document.createElement('div');
        notas.innerHTML = `<br> <p>Nota ${index + 1}</p>`;

        let inputNota = document.createElement('input');
        inputNota.type = 'text';
        inputNota.disabled = true;
        inputNota.placeholder = element; 
        notas.appendChild(inputNota);

        let botonEliminar = document.createElement('button');
        botonEliminar.innerText = "Eliminar";
        botonEliminar.addEventListener('click', () => eliminarNota(arrayTotal, element));
        notas.appendChild(botonEliminar);

        let botonEditar = document.createElement('button');
        botonEditar.innerText = "Editar";
        botonEditar.addEventListener('click', () => editarNota(inputNota, index));
        notas.appendChild(botonEditar);

        divNotas.appendChild(notas);
    });
}

const eliminarNota = (at, notaAEliminar) => {
    const index = at.indexOf(notaAEliminar);
    if (index !== -1) {
        at.splice(index, 1);

        const divsNotas = divNotas.querySelectorAll('div');
        if (divsNotas[index]) {
            divNotas.removeChild(divsNotas[index]);
        }

        console.log(at, "después de eliminar");
    }
}

const editarNota = (inputNota, index) => {
    inputNota.disabled = false;
    inputNota.dataset.originalValue = inputNota.value; 
    let botonGuardar = document.createElement('button');
    botonGuardar.innerText = "Guardar";
    botonGuardar.addEventListener('click', () => guardarNota(inputNota, index));
    divNotas.appendChild(botonGuardar);
}

const guardarNota = (inputNota, index) => {
    inputNota.disabled = true;
    const valorOriginal = inputNota.dataset.originalValue;

    
    if (inputNota.value !== valorOriginal) {
        arrayTotal[index] = parseInt(inputNota.value);
        inputNota.dataset.originalValue = inputNota.value;
    }

    
    const botones = divNotas.querySelectorAll('button');
    botones.forEach(boton => {
        if (boton.innerText === "Guardar") {
            divNotas.removeChild(boton);
        }
    });
}

function miNota(nota1, nota2, nota3) {
    let arrayNotas = [];
    arrayNotas.push(parseFloat(nota1));
    arrayNotas.push(parseFloat(nota2));
    arrayNotas.push(parseFloat(nota3));

    getData(arrayNotas).then(valor => {
        if (valor) {
            return showData(arrayNotas);
        }
    }).then(tal => {
        setText(tal);
    })
        .catch(err => console.log(err))

    subirHTML(arrayNotas)
}

function limpiar(n1, n2, n3) {
    console.log(n1)
    n1.value = ""
    n2.value = ""
    n3.value = ""
}
