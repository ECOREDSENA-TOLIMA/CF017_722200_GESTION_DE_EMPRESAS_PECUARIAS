<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Zoonosis

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-md-4.mb-3
        img(src="@/assets/curso/temas/tema4/img-1.svg")
      .col-md-8
        p Las zoonosis son enfermedades de los animales vertebrados que se pueden transmitir al hombre. Los patógenos zoonóticos pueden ser bacterias, virus, parásitos o agentes no convencionales y propagarse a los humanos por contacto directo, ingestión, inhalación, por vectores intermediarios o mordeduras. Su importancia está dada por el impacto que ocasiona a la salud y también en las importantes pérdidas económicas que ocasionan este tipo de enfermedades. 
        p Actualmente, existe una interacción muy cercana entre el hombre y los animales tanto de compañía como de producción. El crecimiento de la actividad comercial y el desplazamiento de personas, animales, sus productos y subproductos han propiciado una mayor diseminación de las zoonosis 

    .row.mb-4(data-aos="fade-left")
      .col-md-10
        p El Ministerio de Salud de Colombia, menciona que aproximadamente el 43,6 % de las zoonosis presenta distribución mundial y que de estas el 45 % son de origen viral, 28 % bacteriano, 20 % parasitario y el 7 % por agentes micóticos, presentándose en trabajadores agropecuarios y personas que tienen contacto con animales o sus productos, aunque condiciones actuales han hecho que la epidemiologia de las enfermedades cambie, haciendo vulnerables a personas del común que tienen animales de compañía y de granja.
      .col-md-2
        img(src="@/assets/curso/temas/tema4/img-2.svg")

    .cajon.p-2.mt-0.col-lg-12.m-auto.pb-0.mb-5(style="background-color:#DBF9BD; overflow-x: hidden !important")
      p.mb-2.py-1(style="overflow-x: hidden !important") Algunas de las enfermedades zoonóticas más importantes son: la rabia, leptospirosis, brucelosis, tuberculosis bovina, cisticercosis, toxoplasmosis, cisticercosis, ántrax, influenza aviar, leishmaniasis, rickettsiosis, entre otras. 

    p.mb-5 Las zoonosis se pueden clasificar dependiendo del ciclo seguido por su agente infeccioso, por la naturaleza de su agente etiológico, según su aparición y también, según su origen presumible. 

    LineaTiempoD.color-acento-contenido.mb-5
      .row(numero="a" titulo="Según el ciclo seguido por el agente infeccioso se pueden clasificar en zoonosis")
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-3.png', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          p.text-small <strong>Directas:</strong> en este tipo de zoonosis, el agente solo necesita de un huésped vertebrado para realizar su ciclo.
          p.text-small <strong>Ciclo zoonosis:</strong> aquí el agente requiere infectar más de un huésped para realizar su ciclo.
          p.text-small <strong>Metazoonosis:</strong> el agente infeccioso demanda un huésped vertebrado e invertebrado para realizar todo su ciclo.
          p.text-small <strong>Saprozoonosis:</strong> en este tipo, el agente realiza parte de su ciclo en un vertebrado y la otra parte en un vehículo o lugar de desarrollo no animal.

      .row(numero="b" titulo="Según la naturaleza de su agente etiológico")
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-4.png', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          p.text-small Virus
          p.text-small Baceterias 
          p.text-small Hongos 
          p.text-small Protozoos
          p.text-small Helmintos 
          p.text-small Artrópodos 

      .row(numero="c" titulo="Según su aparición se pueden clasificar en zoonosis emergentes y re-emergentes")
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-5.png', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          p.text-small <strong>Zoonosis emergentes:</strong> son aquellas que están apareciendo en donde los agentes causales obtienen la capacidad de afectar nuevas células.
          p.text-small <strong>Zoonosis re-emergentes:</strong> constituyen un gran grupo de enfermedades que se consideraban que estaban controladas y con tendencia a desaparecer, pero tomaron fuerza y se volvieron a distribuir.

      .row(numero="d" titulo="Según su origen presumible se pueden clasificar de tres maneras")
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema4/img-6.png', alt='Texto que describa la imagen')
        .col-md-6.mb-4.mb-md-0
          p.text-small <strong>Saprozoonosis:</strong> son aquellas infecciones producidas por agentes que requieren un lugar de desarrollo o reservorio no animal (plantas, suelo, materia orgánica).
          p.text-small <strong>Zooantropozoonosis:</strong> cuando las infecciones son transmitidas del hombre hacia los animales vertebrados inferiores.
          p.text-small <strong>Antropozoonosis:</strong> o también llamadas zoonosis reversas se refiere a enfermedades naturalmente transmitidas de humanos a otros vertebrados.

    Separador 

    .titulo-segundo.color-primario(data-aos="fade-right")
      h2 Tipos de transmisión

    p.mb-5 En función de su modo de transmisión, existen diferentes tipos de transmisión como las que se mencionan a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right", atl="")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 4.] <em>Tipos de transmisión</em>
        figure
          img(src='@/assets/curso/temas/tema4/img-7-1.png', alt='Figura 4 Tipos de transmisión. En la figura se representan los tipos de transmisión como: transmisión directa, transmisión indirecta, transmisión horizontal, trasmisión vertical.')  
    
    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right", alt="")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 4.] <em>Tipos de transmisión</em>
        figure
          img(src='@/assets/curso/temas/tema4/img-7-2.png', alt='Figura 4 Tipos de transmisión. En la figura se representan los tipos de transmisión como: transmisión directa, transmisión indirecta, transmisión horizontal, trasmisión vertical.')  











</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
