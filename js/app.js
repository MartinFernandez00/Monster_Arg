console.log("El archivo Javascript ya esta importado");

const urlApi="https://monsterarg-c3d0.restdb.io/rest/monster?apikey=655932f7237ae7666713687e"

const applibros = {
    listarLibros: ()=>{
        //tomamos la referencia del contenedor donde se mostraran los libros.
        const contenedor=document.getElementById("contenedorLibros");

        let contenidoHTML = "";

        fetch(urlApi)
        .then(respuesta=>respuesta.json())

        .then(libros=>{
            console.log(libros);
            for (const libro of libros) {
                contenidoHTML+= `
                <div>
                    <img src="${libro.portada_url}" class="img-thumbnail"/>
                        <h6 style="text-align: left;">${libro.nombre}</h6>
                        <h7 style="text-align: left;">Fecha: ${libro.autor}<h7/>

                    <details>
                        <summary>Mas Info</summary>
                        Anecdota: ${libro.sinopsis}<br/>
                    </details>

                    <a href="#" onclick="applibros.editarLibro('${libro._id}')">Editar</a>
                    <a href="#" onclick="applibros.eliminarLibro('${libro._id}','${libro.nombre}')">Eliminar</a>
                    
                </div>
                `
            }
            console.log(contenidoHTML)
            contenedor.innerHTML=contenidoHTML;
        })
    },

eliminarLibro: (idAEliminar,nombreABorrar)=>{

    Swal.fire({
        title: `Seguro que quiere borrar el recuerdo ${nombreABorrar}?`,
        text: "No vas a poder cambiar esta operacion",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, quiero borrarlo'
    }).then((result) => {
        if (result.isConfirmed) {
            if (result.isConfirmed) {
                const urlApi = `https://monsterarg-c3d0.restdb.io/rest/monster/${idAEliminar}?apikey=655932f7237ae7666713687e`
                //`https://pracprof2023-af4f.restdb.io/rest/peliculas/${idPeliculaBorrar}?apikey=6467b09a0b60fc42f4e197fa`
                fetch(urlApi, {
                    method: 'DELETE'
                })
                    .then(response => {
                        console.log(response);
                        return applibros.listarLibros();
                    }).then(response => {
                        Swal.fire(
                            'Eliminado!',
                            `El recuerdo ${nombreABorrar} fue borrado .`,
                            'satisfactoriamente'
                        )
                    });
            }
            Swal.fire(
                'Borrado',
                'Se borro el recuerdo.',
                'success'
            )
        }
    })
},

    guardarLibros: ()=>{


        const txtId=document.getElementById("txtId");
        const txtNombre=document.getElementById("txtNombre");
        const txtAutor=document.getElementById("txtAutor");
        const txtPortadaUrl=document.getElementById("txtPortadaUrl");
        const txtSinopsis=document.getElementById("txtSinopsis");

        let urlApi='';
        let metodoHttp='';

        if (txtId.value === '') 
        {
            urlApi = "https://monsterarg-c3d0.restdb.io/rest/monster?apikey=655932f7237ae7666713687e";
            metodoHttp = 'POST';
        }
        else 
        {
            urlApi = `https://monsterarg-c3d0.restdb.io/rest/monster/${txtId.value}?apikey=655932f7237ae7666713687e`;
            metodoHttp = 'PUT';
        }

        const libroAGuardar = {
            "nombre":txtNombre.value,
            "autor":txtAutor.value,
            "portada_url":txtPortadaUrl.value,
            "sinopsis":txtSinopsis.value,
        };
        console.log(libroAGuardar);

        fetch(urlApi, {
            method: metodoHttp,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(libroAGuardar)
            })  
            .then(response => {
                console.log(response);
                window.location.href="pag-experiencias.html";
            });
    },
    editarLibro:(idLibroAEditar)=>{
        const urlApi=`https://monsterarg-c3d0.restdb.io/rest/monster/${idLibroAEditar}?apikey=655932f7237ae7666713687e`;

        fetch(urlApi).then(res => res.json()).then(libro => {

                document.getElementById("txtId").value=libro._id
                document.getElementById("txtNombre").value=libro.nombre
                document.getElementById("txtAutor").value=libro.autor
                document.getElementById("txtPortadaUrl").value=libro.portada_url
                document.getElementById("txtSinopsis").value=libro.sinopsis

                const VentanaEditar=document.getElementById('agregarEditarModal');
                let modal = new bootstrap.Modal(VentanaEditar);
                modal.show();
// let = Crear Variable
// modal.show = Muestra Siguiente
            });
        }
    }

applibros.listarLibros();
