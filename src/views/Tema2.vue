<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Bienestar animal

    .row.align-items-center.my-3.col-lg-12.m-0        
      .col-auto
        figure
          img(src='@/assets/curso/temas/2/1.svg').m-auto(data-aos="fade-right")
      .col
        p.mb-2.py-1(style="overflow-x: hidden !important") Con el progreso en cuanto el conocimiento sobre el comportamiento animal y su directa correlación en el desarrollo de los procesos productivos, se han realizado investigaciones y experimentos en donde se ha demostrado con claridad que así se lleven las técnicas más apropiadas de manejo y alimentación, los resultados productivos pueden no ser los mejores, sino se aplica algún grado de comodidad con el que debe gozar el animal en todo su periodo de crianza, en cuanto al sistema productivo bajo que es manejado. También se ha demostrado que existe una incidencia directa en el nivel de confort y la intensidad con que se lleva el sistema productivo, indicando que mientras hay mayor comodidad el animal expresa más su potencial de producción.

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-10
        LineaTiempoB.color-secundario.my-5(:datos="datosLineaTiempoB")
    
    p.mb-2.py-1(style="overflow-x: hidden !important") Entonces, el bienestar animal en un sistema productivo, es una condición ideal resultante de la aplicación de normas específicas, adecuadas y posibles, sobre los procesos involucrados a lo largo de toda una cadena productiva, de manera tal que permitan a los animales vivir en las mejores condiciones posibles sin padecer sufrimientos innecesarios, ya sea a nivel físico o psíquico. Esto involucra a todos los animales, pero fundamentalmente aquellos cuyo destino será servir de alimento o abrigo al hombre, intensificando el compromiso ético de brindarles durante toda su vida productiva, las mejores condiciones posibles de hábitat, sanidad, manejo, alimentación y protección.

    .row.align-items-center.mt-5.col-lg-12.m-0        
      .col-auto
        figure
          img(src='@/assets/curso/temas/2/6.svg').m-auto(data-aos="fade-right")
      .col
        p.y-3(style="overflow-x: hidden !important") Por último, se considera con frecuencia que el bienestar animal es un pretexto para imponer barreras arancelarias o incrementar los costos productivos. Pero lejos de constituir un costo o traba, realizar la implementación animal en las unidades productivas constituye una gran ventaja para la competitividad y disminución de costos productivos de los diversos productos generados en el campo pecuario.
    
    Separador.mt-0

    .cont_2_1(style="position:relative;")
        .titulo-segundo.color-primario(style="position:relative")
          h2#t_2_1 2.1 Principios  

    .row.align-items-center.mt-5.col-lg-12.m-0        
      .col-auto
        figure
          img(src='@/assets/curso/temas/2/7.svg').m-auto(data-aos="fade-right")
      .col
        p.y-3(style="overflow-x: hidden !important") El bienestar animal se refiere al estado de los animales y cómo afrontan las condiciones de su entorno. Es una ciencia cuyo propósito de investigación es estudiar objetivamente y comprender las necesidades de los animales además es multidisciplinaria en donde se involucran y se interrelacionan aspectos políticos, etológicos, religiosos, productivos, culturales y éticos, entre otros. 

    p.mb-2.py-1(style="overflow-x: hidden !important") Comprende la calidad de vida de un animal y las necesidades que definen las condiciones que deben ser provistas a los mismos, igualmente, debe evaluarse desde las siguientes perspectivas y condiciones, que son tomadas como las bases del bienestar y son ampliamente reconocidas como las cinco libertades:



</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    datosLineaTiempoB: [
      {
        texto:
          '“Mahatma Gandhi”, quien decía que “la grandeza de una nación y su progreso moral, pueden juzgarse a través del trato que reciben sus animales. (1948)',
        icono: require('@/assets/curso/temas/2/2.svg'),
      },
      {
        texto:
          'Como resultado de lo anterior, surge a partir del año de 1965 en Europa el concepto de Bienestar Animal, que no debe ser confundido con la posición en donde se plantea la carencia total de trastornos del comportamentales o estrés.',
        icono: require('@/assets/curso/temas/2/3.svg'),
      },
      {
        texto:
          'El bienestar animal es “un estado en el cual el animal, como individuo, está capacitado para intentar enfrentarse con su ambiente de crianza o producción” (“Broom”, 1996). ',
        icono: require('@/assets/curso/temas/2/4.svg'),
      },
      {
        texto:
          'Recientemente Giménez Zapiola (2007) define al bienestar animal como “aquel estado en que los animales se vean libres del maltrato innecesario”.',
        icono: require('@/assets/curso/temas/2/5.svg'),
      },
    ],
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
