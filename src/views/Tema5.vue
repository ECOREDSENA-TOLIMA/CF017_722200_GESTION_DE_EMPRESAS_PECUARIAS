<template lang="pug">
.curso-main-container.pb-3.tema5
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Cuarentena

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down-left")
      .col-md-4.mb-3
        img(src="@/assets/curso/temas/tema5/img-1.png")
      .col-md-8
        p La cuarentena se define como el conjunto de aquellas medidas preventivas, enfocadas a regular, restringir o prohibir la producción, movilización o importación de animales y sus productos, con el objetivo de evitar la propagación de una enfermedad en una región a partir de un foco notificado; o bien, para impedir la introducción de una enfermedad a una región, departamento o el territorio nacional. Todo esto se realiza en un periodo de tiempo determinado en el que se mantienen los animales aislados y las medidas mencionadas anteriormente, mientras se observan los animales, se realizan diagnósticos, se establecen tratamientos (si los hay).

    p.mb-5 De acuerdo con el tipo de enfermedad, manifestación y lugar de presentación, así como para el planteamiento y establecimiento de los aspectos técnicos y operativos, que tienen que ver con las medidas a aplicar, se debe seleccionar una de las siguientes modalidades de cuarentena: 

    .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-down-left") 
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Cuarentena Interna
            p Este tipo de cuarentena se aplica en el territorio Nacional y tiene que ver con la restricción de la movilización y observación de los animales enfermos, aparentemente sanos (expuestos a la enfermedad) y sospechosos. De igual manera, con la restricción de ingreso o salida de sus productos o subproductos. Lo anterior se realiza con el objetivo de evitar la transmisión de la enfermedad a otros animales susceptibles.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-2.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            p Para aplicar las medidas cuarentenarias se considerará el área afectada el espacio geográfico en el que se encuentra presente el agente infeccioso (área focal), y la zona de influencia (área perifocal). Está área debe estar bien definida y delimitada con el fin de aplicar las medidas restrictivas y preventivas y evitar la diseminación de la enfermedad.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-3.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Cuarentena Total
            p En este tipo de cuarentena se aplica la restricción total de la movilización de los animales durante el triple del periodo de incubación de la enfermedad. Este periodo de tiempo se toma a partir de la aparición del último caso clínico de la enfermedad.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-4.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0 
            h2 Cuarentena Externa
            p Es el conjunto de medidas restrictivas que se aplican en los puertos marítimos, aeropuertos, y fronteras terrestres de los límites territoriales del municipio, departamento o país y se aplican para prevenir la introducción de una enfermedad al territorio nacional, departamental o municipal.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-5.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0 
            h2 Cuarentena Condicionada
            p Radica en la restricción de movilización de animales. Únicamente se podrán movilizar cuando se confirme que dichos animales cumplen con los requisitos zoosanitarios específicos por especie, enfermedad, motivo de la movilización, origen y destino se aplicará en ocasiones especiales, teniendo en cuenta las diferencias de susceptibilidad, manifestaciones y presencia enzoótica de la enfermedad, así como razones económicas justificadas, dentro de este tipo se pueden encontrar las enfermedades que están bajo esquema de campañas para su prevención, control o erradicación a nivel nacional, entre otras que el ICA considere pertinentes.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-6.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0 
            h2 Cuarentena Preventiva
            p Este tipo de cuarentena se utiliza cuando exista sospecha, basada en el diagnóstico clínico, de la presencia de una enfermedad de notificación obligatoria, y que aún no se haya confirmado por pruebas de laboratorio. Se mantiene desde el periodo de la sospecha hasta la obtención de los resultados de laboratorio. Si el resultado es negativo, se levanta la cuarentena, en caso contrario, se debe aplicar el tipo de cuarentena correspondiente al caso.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema5/img-7.png', alt='')


</template>

<script>
export default {
  name: 'Tema5',
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
