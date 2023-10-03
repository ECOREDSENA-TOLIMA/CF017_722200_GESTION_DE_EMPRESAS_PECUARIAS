<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 La sanidad animal es uno de los pilares de la producción animal, a continuación, se encuentra la introducción al componente, así como los elementos relevantes que se van a trabajar.

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/bKrh7jbCR9s" title="Sanidad animal, fundamentos, componentes y aplicabilidad" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
