<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p Se recapitula del componente formativo: <strong>Sanidad animal, fundamentos, componentes y aplicabilidad,</strong> los temas sobre el comportamiento animal, que depende de la genética y el ambiente, se resaltan los principios de lo aprendido por el entorno y lo heredado del instinto, la interpretación de las características comportamentales para la domesticación, igualmente se trata el tema del bienestar animal, qué hace parte del sistema productivo, además la protección animal contemplada en la normativa. Así mismo, la enfermedad, que es la alteración del estado fisiológico, para lo cual se deben tener en cuenta las manifestaciones de los animales para identificar animales enfermos, como también las enfermedades endémicas. Adicionalmente, la zoonosis que son las enfermedades de los animales vertebrados, y los tipos de transmisión, también se incluye el tema sobre medidas preventivas con la cuarentena, la conducción de animales con los tipos y usos de instrumentos, inductores de movimiento, como también, la sujeción e inmovilización de animales con métodos, herramientas y equipos. Para finalizar el tema sobre primeros auxilios, el manejo y aplicaciones, los signos vitales de la especie pecuaria, la identificación de heridas y los tratamientos.
    p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
