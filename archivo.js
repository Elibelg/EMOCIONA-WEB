var variable = document.getElementById("boton")
variable.addEventListener("click", cambiartexto)

var titulotexto = document.getElementById("lema")

function cambiartexto()
{
  
  if(titulotexto.classList.contains("activado"))
    {
       titulotexto.classList.remove ("activado")
    titulotexto.classList.add ("desactivado")
      titulotexto.innerText = "¡NO TE OLVIDES!"
    }
else if(titulotexto.classList.contains("desactivado"))
 {
   titulotexto.classList.remove ("desactivado")
  titulotexto.classList.add ("activado") 
   titulotexto.innerText ="EMOCIONA A TU ALUMNADO Y APRENDERÁ"
 }
}
