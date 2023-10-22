<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Enfermedad

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-md-3.mb-3
        img(src="@/assets/curso/temas/tema3/img-1.svg")
      .col-md-9
        p Se puede hablar de enfermedad cuando el animal presenta alguna alteración del estado fisiológico en alguna parte de su cuerpo, dicho de otra manera, cuando presenta deterioro de su salud, lo que repercute en la manifestación de uno o más signos clínicos, y dependiendo de estos, de su evolución y de los resultados de exámenes clínicos y paraclínicos, se puede determinar el tipo de enfermedad y establecer su tratamiento. Las enfermedades se pueden clasificar de la siguiente manera:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-primario(style="height:100%")
          .p-4
            h2.text-center Según su duración
            p Se pueden clasificar como agudas o crónicas. Las agudas se manifiestan rápidamente y son de corta duración. Por otro lado, las enfermedades crónicas se desarrollan de manera lenta, son de larga duración, pueden durar toda la vida del animal.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-acento-botones
          .p-4
            h2.text-center Según su distribución o número de animales afectados
            p Se pueden clasificar de tres tipos: endemia, epidemia y pandemia. La endemia es una enfermedad que se mantiene en el tiempo y afecta a un determinado grupo de anímales de una determinada zona geográfica. Por su parte, en la epidemia, la enfermedad afecta a un importante número de animales en una zona geográfica determinada. Por otra parte, la pandemia, es una epidemia que alcanza distribución global en un periodo de tiempo corto.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-acento-contenido(style="height:100%")
          .p-4
            h2.text-center Según su origen
            p De acuerdo con su origen, las enfermedades se pueden clasificar en infecciosas o no infecciosas. Las infecciosas son causadas por diversos agentes patógenos como virus, bacterias, hongos; este tipo de enfermedades se transmiten por el contacto directo entre animales o por el contacto con fómites u objetos contaminados.  Ahora bien, las enfermedades no infecciosas son ocasionadas por daños biológicos propios del animal.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta.color-primario(style="height:100%")
          .p-4
            h2.text-center Según el tipo de alteración
            p Las enfermedades también se pueden clasificar según el tipo de alteración como, por ejemplo: enfermedades carenciales, traumáticas, genéticas, congénitas, metabólicas, degenerativas, mentales, parasitarias, autoinmunes, intoxicaciones, alérgicas, entre otras.

    Separador 

    .titulo-segundo.color-primario(data-aos="fade-right")
      h2 Manifestación

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-md-4.mb-3
        img(src="@/assets/curso/temas/tema3/img-2.png")
      .col-md-8
        p Un animal saludable bebe agua y se alimenta normalmente, se desplaza sin dificultad, suele permanecer cerca de su manada, erguido, alerta, con mirada vivaz, mucosas y conjuntivas húmedas y rosadas, con buenos parámetros productivos.  Dejando de un lado a las enfermedades subclínicas (aquellas que no presentan manifestaciones visibles). Un animal enfermo mostrará alguna o varias alteraciones en lo que tiene que ver con su comportamiento y aspecto físico. Un animal enfermo puede presentar movimientos lentos, movimientos torpes, cabeza agachada, lomo arqueado, ojos hundidos, se separa de su manada, el pelo puede estar hirsuto.

    Separador 

    .titulo-segundo.color-primario(data-aos="fade-right")
      h2 Enfermedades endémicas

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-md-3.mb-3
        img(src="@/assets/curso/temas/tema3/img-3.svg")
      .col-md-9
        p Las enfermedades endémicas son aquellas que se mantienen en el tiempo y suelen afectar a un número importante de animales de determinadas zonas geográficas.
        p Por ser las de mayor importancia y de acuerdo con lo establecido en las normas internacionales adoptadas en el país, el Instituto Colombiano Agropecuario -ICA-, ha determinado cuales son las enfermedades que han sido declaradas de control oficial en Colombia, y para las cuáles se debe vacunar obligatoriamente. Al ser de interés en el ámbito nacional, se disponen programas de prevención, control y erradicación. De igual manera, se establece su notificación obligatoria y registro.

    p.mb-5 De acuerdo con su intensidad de transmisión, las enfermedades endémicas se clasifican en:

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right", atl="")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em>Clasificación de las enfermedades endémicas</em>
        figure
          img(src='@/assets/curso/temas/tema3/img-4-1.svg', alt='Figura 3 Clasificación de las enfermedades endémicas. En la figura se representan las enfermedades endémicas como hipoendémica, mesoendémica, hiperendémica, holoendémica.')  
    
    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right", alt="")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 3.] <em>Clasificación de las enfermedades endémicas</em>
        figure
          img(src='@/assets/curso/temas/tema3/img-4-2.svg', alt='Figura 3 Clasificación de las enfermedades endémicas. En la figura se representan las enfermedades endémicas como hipoendémica, mesoendémica, hiperendémica, holoendémica.')  




</template>

<script>
export default {
  name: 'Tema3',
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
