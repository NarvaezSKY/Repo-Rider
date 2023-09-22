// let boton=document.getElementById('Boton')
// let año=document.getElementById('año')
// let mes=document.getElementById('mes')
let texto=document.getElementById('contenido')
let divdatos=document.getElementById('content')
// let trimestre=document.getElementById('trimestre')





function datos(fecha, mes, año, trimestre, radio) {
    let arreglo = [fecha, mes, año, trimestre, radio]
    const fechaevaluacion=arreglo[0]
    let recibir= mostrar(fechaevaluacion, arreglo);


    let final=convertir(recibir)

    texto.textContent=final

    console.log(final)

}


function mostrar(fechacompleta, array) {
    array.forEach(element => {
        console.log(element)
     let textoa=document.createElement('p')   
     textoa.textContent=element
     divdatos.appendChild(textoa)
    });
    let cosos=fechacompleta.split("-")
    
    let meses = cosos[1]
    return meses; 
}


function convertir (recibir){
    if (recibir==="01"){
        return "Enero"
    }
    else if (recibir==="02"){
        return"Febrero"
    }
    else if (recibir==="03"){
        return"Marzo"
        }
        else if (recibir==="04"){
            return"Abril"
            }
            else if (recibir==="05"){
                return"Mayo"
                }
                else if (recibir==="06"){
                    return"Junio"
                    }
                    else if (recibir==="07"){
                        return"Julio"
                        }
                        else if (recibir==="08"){
                            return"Agosto"
                            }
    
                            else if (recibir==="09"){
                                return"Sptiembre"
                                }
                                else if (recibir==="10"){
                                    return"Octubre"
                                    }
                                    else if (recibir==="11"){
                                        return"Noviembre"
                                        }
                                        else if (recibir==="12"){
                                            return"Diciembre"
                                            }
}



const seleccionable=document.getElementById('select')
const boton=document.getElementById('verificar')
const div=document.getElementById('contenedor')
console.log(seleccionable)

let selectdiseño=document.createElement('select')
let opciondiseño1=document.createElement('option')
let opciondiseño2=document.createElement('option')
opciondiseño1.innerHTML="<option>maquetacion</option>"
opciondiseño2.innerHTML="<option>mockups</option>"
selectdiseño.appendChild(opciondiseño1)
selectdiseño.appendChild(opciondiseño2)
       
let selectanalisis=document.createElement('select')
let opcionanalisis1=document.createElement('option')
let opcionanalisis2=document.createElement('option')
opcionanalisis1.innerHTML="<option>requerimientos</option>"
opcionanalisis2.innerHTML="<option>historias de usuario</option>"
selectanalisis.appendChild(opcionanalisis1)
selectanalisis.appendChild(opcionanalisis2)




seleccionable.addEventListener('click', ()=>{
    if (seleccionable.value==="diseño"){
    console.log('diseño')

    selectanalisis.classList.add('desaparecer')
    selectdiseño.classList.remove('desaparecer')
    div.appendChild(selectdiseño)

    }
    else if (seleccionable.value==="analisis"){
    console.log('analisis')

    selectanalisis.classList.remove('desaparecer')
    selectdiseño.classList.add('desaparecer')
    div.appendChild(selectanalisis)
    }
})