<template lang="pug">
.curso-main-container.pb-3.tema8
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Primeros Auxilios     

    .row(data-aos="fade-down-left")
      .col-md-3.mb-3
        img(src="@/assets/curso/temas/tema8/img-1.png")
      .col-md-9
        p Los primeros auxilios son la atención inmediata de un animal en condiciones que no son normales y que representan una emergencia o urgencia. Los propósitos son que se preserve la vida del animal, se evite el sufrimiento, que la salud del animal se deteriore, lo cual hace de vital importancia enseñar a los operadores o trabajadores de las unidades productivas, procedimientos prácticos de primeros auxilios, con el fin de aplicarlos de manera y evitar situaciones riesgosas.

    Separador

    #t_8_1.titulo-segundo.color-primario(data-aos="fade-right")
      h2 8.1 Manejo y Aplicación
    
    p.mb-5 Las personas que los aplican pueden examinar al animal y dar un tratamiento de urgencia antes de la llegada del médico veterinario, sin embargo, para poder prestarlos es necesario saber distinguir entre un animal enfermo y uno sano en buenas condiciones, es por eso que hay algunas pautas que permiten identificar algunas alteraciones en el estado de salud de los animales, tales como:

    LineaTiempoB.mb-5(:datos="datosLineaTiempoB")(data-aos="fade-right")

    p.mb-5 Por otra parte, se describirán a continuación algunas de las acciones que se pueden llevar a cabo para atender una urgencia antes de la llegada del médico veterinario y ayudar a mitigar el sufrimiento de los animales.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 6.] <em>Acciones para atender urgencias</em>
        figure
          img(src='@/assets/curso/temas/tema8/img-13-1.svg', alt='Figura 6 Acciones para atender urgencias de animales En la figura se representan las acciones para atender urgencias de animales como: identificar estado de salud y riesgos de vida, comunicarse con el médico veterinario, no poner en riesgo el animal si está alterado, pedir ayuda a otros operarios, tratar lesiones graves o hemorroides, no administrar medicamentos o tratamientos, tratar el animal depués de recibir los primeros auxilios.')  
    
    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 6.] <em>Acciones para atender urgencias</em>
        figure
          img(src='@/assets/curso/temas/tema8/img-13-2.svg', alt='Figura 6 Acciones para atender urgencias de animales En la figura se representan las acciones para atender urgencias de animales como: identificar estado de salud y riesgos de vida, comunicarse con el médico veterinario, no poner en riesgo el animal si está alterado, pedir ayuda a otros operarios, tratar lesiones graves o hemorroides, no administrar medicamentos o tratamientos, tratar el animal depués de recibir los primeros auxilios.') 

    Separador 

    #t_8_2.titulo-segundo.color-primario(data-aos="fade-right")
      h2 8.2 Signos vitales en especie pecuaria

    .row.mb-3.mb-5(data-aos="fade-right")
      .col-md-2.mb-3
        img(src='@/assets/curso/temas/tema8/img-14.svg' alt='')
      .col-md-10
        p Los signos vitales son mediciones de las funciones básicas del animal, se utilizan para detectar o monitorizar problemas de salud y reflejan el funcionamiento del organismo. Estos signos cambian con la especie animal, edad, el sexo y el peso del animal y es muy importante que en el momento de la medición el animal esté tranquilo, en reposo y en un lugar bajo sombra. 
        .col-md-12
          .color-primario.p-4.mb-4(style="background-color:#DBF9BD")
            p.mb-0 Los signos que normalmente se miden en los animales son: temperatura, frecuencia cardiaca, frecuencia respiratoria, pulso y en los rumiantes se miden los movimientos ruminales.

    .row
      .col-lg-8
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-10
              h2(data-aos="fade-left")(style="color:#fff !important")  Técnicas de medición y registro temperatura

    p Los animales tienen la ventaja de poder autorregular su temperatura corporal. Es así que en, condiciones donde la temperatura corporal se encuentra elevada, utilizan los siguientes mecanismos para bajar la temperatura corporal: respirar rápidamente, sudar, jadear, revolcarse en el fango y descansar a la sombra. Por el contrario, si la necesidad es mantener caliente el cuerpo, pueden hacerlo a través de mecanismos como: el pelo y la lana, temblar, caminar, correr, sustraer energía de los alimentos para quemarla y convertirla en calor.
    p La temperatura del animal puede variar con los siguientes factores: exceso de trabajo, sobre alimentación, temperatura del ambiente (en días calurosos, la temperatura corporal del animal puede elevarse), cuando la hembra está en celo, preñada y en el momento del parto.
    p.mb-5 El instrumento utilizado para la medición de la temperatura es el termómetro veterinario, el cual tiene su unidad de medida en Grados Celsius - oC. En la actualidad existen cuatro tipos de termómetros, siendo el termómetro de mercurio el más utilizado en las granjas.

    .col-xl-10.mx-auto.mb-5.desktop
      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema8/img-15-1.png', alt='Texto que describa la imagen')
            figcaption Termómetro de mercurio

        .tarjeta.color-secundario.p-3(x="17%" y="23%" numero="1")
          p(style="color:#000") Cuando el termómetro se pone en contacto con una temperatura, el mercurio se dilata aumentando su volumen. 

        .tarjeta.color-secundario.p-3(x="47%" y="29%" numero="2")
          p(style="color:#000") Los termómetros poseen una escala numérica, la cual se usa para ver hasta qué nivel ha llegado el mercurio dilatado. Observando este nivel se puede saber la temperatura del animal.

        .tarjeta.color-secundario.p-3(x="61%" y="21%" numero="3")
          p(style="color:#000") Es uno de los más utilizados en la actualidad. Está compuesto por un tubo de vidrio y en su interior hay una ampolla llena de mercurio.

    .col-xl-10.mx-auto.mb-5.movil
      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema8/img-15-2.png', alt='Texto que describa la imagen')
            figcaption Termómetro de mercurio

        .tarjeta.color-secundario.p-3(x="17%" y="20%" numero="1")
          p(style="color:#000") Cuando el termómetro se pone en contacto con una temperatura, el mercurio se dilata aumentando su volumen. 

        .tarjeta.color-secundario.p-3(x="47%" y="27%" numero="2")
          p(style="color:#000") Los termómetros poseen una escala numérica, la cual se usa para ver hasta qué nivel ha llegado el mercurio dilatado. Observando este nivel se puede saber la temperatura del animal.

        .tarjeta.color-secundario.p-3(x="61%" y="19%" numero="3")
          p(style="color:#000") Es uno de los más utilizados en la actualidad. Está compuesto por un tubo de vidrio y en su interior hay una ampolla llena de mercurio.

    .col-xl-10.mx-auto.mb-5.desktop
      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema8/img-16-1.png', alt='Texto que describa la imagen')
            figcaption Termómetro digital

        .tarjeta.color-secundario.p-3(x="17%" y="23%" numero="1")
          p(style="color:#000") Utilizan dispositivos transductores en los que se presentan variaciones de tensión cuando cambia la temperatura. 

        .tarjeta.color-secundario.p-3(x="50%" y="32%" numero="2")
          p(style="color:#000") El rango de temperatura habitual, aunque varía según el fabricante, es entre 32 ºC a 43 ºC con una precisión de 0.1 ºC. (García, 2012).

        .tarjeta.color-secundario.p-3(x="71%" y="15%" numero="3")
          p(style="color:#000") Estas variaciones de tensión son convertidas en números por circuitos electrónicos y expresadas en una pantalla. (QUIMINET. 2011). 

    .col-xl-10.mx-auto.mb-5.movil
      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema8/img-16-2.png', alt='Texto que describa la imagen')
            figcaption Termómetro digital

        .tarjeta.color-secundario.p-3(x="17%" y="28%" numero="1")
          p(style="color:#000") Utilizan dispositivos transductores en los que se presentan variaciones de tensión cuando cambia la temperatura. 

        .tarjeta.color-secundario.p-3(x="55%" y="14%" numero="2")
          p(style="color:#000") El rango de temperatura habitual, aunque varía según el fabricante, es entre 32 ºC a 43 ºC con una precisión de 0.1 ºC. (García, 2012).

        .tarjeta.color-secundario.p-3(x="73%" y="32%" numero="3")
          p(style="color:#000") Estas variaciones de tensión son convertidas en números por circuitos electrónicos y expresadas en una pantalla. (QUIMINET. 2011). 

    .col-xl-10.mx-auto.mb-5.desktop
      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema8/img-17-1.png', alt='Texto que describa la imagen')
            figcaption Termómetro infrarrojo

        .tarjeta.color-secundario.p-3(x="23%" y="13%" numero="1")
          p(style="color:#000") El diseño más básico consiste en un lente para enfocar la energía infrarroja (IR) en un detector, que convierte la energía en una señal eléctrica que se puede exhibir en unidades de temperatura después de que se compensa la variación en la temperatura ambiente

        .tarjeta.color-secundario.p-3(x="33%" y="48%" numero="2")
          p(style="color:#000") Como tal, el termómetro infrarrojo es útil para medir la temperatura en circunstancias en las que los termopares u otros sensores de tipo de sonda no se pueden usar o no producen datos precisos por diversas razones. (OMEGA Sensing Incredible Things 2003 - 2017). 

        .tarjeta.color-secundario.p-3(x="47.5%" y="38%" numero="3")
          p(style="color:#000") Esta configuración facilita la medición de temperatura a distancia sin contacto con el objeto a medir.

    .col-xl-10.mx-auto.mb-5.movil
      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema8/img-17-2.png', alt='Texto que describa la imagen')
            figcaption Termómetro infrarrojo

        .tarjeta.color-secundario.p-3(x="23%" y="12%" numero="1")
          p(style="color:#000") El diseño más básico consiste en un lente para enfocar la energía infrarroja (IR) en un detector, que convierte la energía en una señal eléctrica que se puede exhibir en unidades de temperatura después de que se compensa la variación en la temperatura ambiente

        .tarjeta.color-secundario.p-3(x="30%" y="48%" numero="2")
          p(style="color:#000") Como tal, el termómetro infrarrojo es útil para medir la temperatura en circunstancias en las que los termopares u otros sensores de tipo de sonda no se pueden usar o no producen datos precisos por diversas razones. (OMEGA Sensing Incredible Things 2003 - 2017). 

        .tarjeta.color-secundario.p-3(x="50%" y="35%" numero="3")
          p(style="color:#000") Esta configuración facilita la medición de temperatura a distancia sin contacto con el objeto a medir.

    p.mb-5 A continuación, se explica la técnica de medición de temperatura con el termómetro de mercurio:

    PasosA.color-acento-botones.mb-5(tipo="n")
      div
        p(data-aos="fade-right") Realizar la sujeción e inmovilización del animal.

      div
        p(data-aos="fade-left") Amarrar una cuerda en la argolla que se encuentra ubicada en el extremo opuesto a la base donde se encuentra el mercurio

      div
        p(data-aos="fade-right") Limpiar y desinfectar el termómetro. Esto se hace con un alcohol antiséptico o cualquier desinfectante que no sea irritante.

      div
        p(data-aos="fade-left") Visualice la línea de mercurio (plateada) en el termómetro.

      div
        p(data-aos="fade-right") Agitar fuertemente el termómetro para asegurarse que el nivel de mercurio en el termómetro quede por debajo de los 35 oC. Esta operación se hace de manera cuidadosa ya que se puede romper el termómetro.

      div
        p(data-aos="fade-left") Aplicar un lubricante al termómetro para facilitar la entrada del mismo al recto del animal.

      div
        p(data-aos="fade-right") Desplazar la cola del animal hacia un lado.

      div
        p(data-aos="fade-left") Introducir suavemente el termómetro por el ano del animal, cuidando que la cuerda quede por fuera del animal
      
      div
        p(data-aos="fade-right") Mantener el termómetro en ángulo para que entre en contacto con la pared del recto.

      div
        p(data-aos="fade-left") Sujetar el termómetro firmemente, ya que si el animal defeca o tose podría salirse o introducirse por completo en el recto. No olvidar asegurar la pinza que trae el termómetro a la base de la cola

      div
        p(data-aos="fade-right") Esperar un minuto.

      div
        p(data-aos="fade-left") Retirar el termómetro, de ser necesario limpiarlo y posteriormente realizar la lectura correspondiente. Es necesario aclarar que no debe tocarse el extremo donde se encuentra el mercurio ya que esto puede alterar los resultados y cambiar la lectura.

    .row.mb-5(data-aos="fade-down-left")
      .col-md-4
        img(src="@/assets/curso/temas/tema8/img-18.png")
      .col-md-8
        p Por otra parte, ya se encuentran establecidos rangos por especie animal, en los que las temperaturas pueden considerarse normales y los cuales son de ayuda en el momento de evaluar este parámetro; dichos rangos son los siguientes: 

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-3.col-12.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema8/img-19.png', alt='') 
      .col-md-6.col-lg-8.col-12.px-md-5(data-aos="fade-left", alt="Tabla 1 Valores normales de temperatura. En la tabla se observa las especies con la temperatura normal: bovina adultos con temperatura normal entre 38.5 - 39.5 °C, terneros 39.5 - 40.0 °C, bufalinos 38.2 °C, ovinos y caprinos 38.5 - 40.0 °C, borregos y cabritos 39.5 - 40.5 °C, equinos adultos 37.5 - 38.5 °C, potros 38.5 - 40.0 °C, porcinos adultos 38.0 - 40.0 °C, lechones 39.0 - 40.5 °C.")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 1.] <em>Valores normales de temperatura</em>
        .tabla-a.color-primario 
          table
            thead
              tr
                th Especie
                th Temperatura normal °C
            tbody
              tr
                td(style="background-color:#F6F6F6") <strong>Bovinos adultos</strong>
                td(style="background-color:#F6F6F6") 38.5 - 39.5
              tr
                td <strong>Terneros</strong> 
                td 39.5 - 40.0
              tr
                td(style="background-color:#F6F6F6") <strong>Bufalinos</strong>
                td(style="background-color:#F6F6F6") 38.2
              tr
                td <strong>Ovinos y caprinos</strong>
                td 38.5 - 40.0
              tr
                td(style="background-color:#F6F6F6") <strong>Borregos y cabritos</strong>
                td(style="background-color:#F6F6F6") 39.5 - 40.5
              tr
                td <strong>Equinos adultos</strong>
                td 37.5 - 38.5
              tr
                td(style="background-color:#F6F6F6") <strong>Potros</strong>
                td(style="background-color:#F6F6F6") 38.5 - 40.0
              tr
                td <strong>Porcinos adultos</strong>
                td 38.0 - 40.0
              tr
                td(style="background-color:#F6F6F6") <strong>Lechones</strong>
                td(style="background-color:#F6F6F6") 39.0 - 40.5
              
    .row
      .col-lg-5
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-9
              h2(data-aos="fade-left")(style="color:#fff !important") Frecuencia Cardiaca

    .row.mb-5(data-aos="fade-down-left")
      .col-md-2
        img(src="@/assets/curso/temas/tema8/img-20.svg")
      .col-md-10
        p La frecuencia cardiaca es el número de veces que se contrae el corazón durante un minuto (latidos por minuto). Para el correcto funcionamiento del organismo es necesario que el corazón actúe bombeando la sangre hacia todos los órganos, pero además lo debe hacer a una determinada presión (presión arterial) y a una determinada frecuencia. Dada la importancia de este proceso, es normal que el corazón necesite en cada latido un alto consumo de energía.
        p Se toma con el fonendoscopio en su pecho, luego se cuentan el número de pulsaciones en 15 segundo y dicho número se multiplica por 4 para obtener el número de latidos por minuto. 

    p.mb-5 Existen rangos establecidos por especie los cuales nos ayudan a establecer la normalidad o anormalidad durante la revisión

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-3.col-12.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema8/img-21.png', alt='') 
      .col-md-6.col-lg-8.col-12.px-md-5(data-aos="fade-left", alt="Tabla 2 Valores normales de Frecuencia Cardiaca. En la tabla se observa las especies con la frecuencia cardiaca normal: bovina adultos con frecuencia cardiaca normal entre 60-90 pulsos por minuto, terneros 90-100, burros y mulas 46-50, ovinos y caprinos 70-90, potros 40-60, equinos adultos 28-42, gallinas 120-160, porcinos adultos 60-90, lechones 110.")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 2.] <em>Valores normales de Frecuencia Cardiaca</em>
        .tabla-a.color-primario 
          table
            thead
              tr
                th Especie
                th Frecuencia cardiaca normal FC
            tbody
              tr
                td(style="background-color:#F6F6F6") <strong>Bovinos adultos</strong>
                td(style="background-color:#F6F6F6") 60-90
              tr
                td <strong>Terneros</strong> 
                td 90-100
              tr
                td(style="background-color:#F6F6F6") <strong>Bufalinos</strong>
                td(style="background-color:#F6F6F6") 46-50
              tr
                td <strong>Ovinos y caprinos</strong>
                td 70-90
              tr
                td(style="background-color:#F6F6F6") <strong>Borregos y cabritos</strong>
                td(style="background-color:#F6F6F6") 40-60
              tr
                td <strong>Equinos adultos</strong>
                td 28-42
              tr
                td(style="background-color:#F6F6F6") <strong>Potros</strong>
                td(style="background-color:#F6F6F6") 120-160
              tr
                td <strong>Porcinos adultos</strong>
                td 60-90
              tr
                td(style="background-color:#F6F6F6") <strong>Lechones</strong>
                td(style="background-color:#F6F6F6") 110

    .row
      .col-lg-6
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-10
              h2(data-aos="fade-left")(style="color:#fff !important") Frecuencia Respiratoria
    
    .row.mb-5(data-aos="fade-down-left")
      .col-md-3.mb-3
        img(src="@/assets/curso/temas/tema8/img-22.png")
      .col-md-9
        p Es la constante que representa el número de respiraciones por minuto de un animal en estado de descanso. Es el proceso fisiológico por el cual los organismos vivos toman oxígeno del medio circundante y desprenden dióxido de carbono.
        p Se puede tomar por simple observación mirando el número de veces que se expande el pecho en el proceso de inhalación y exhalación, sin embargo, para ser más preciso se recomienda el uso del fonendoscopio, se cuenta el número de movimientos respiratorios durante 10 segundos y luego se multiplica por 6, para obtener el número de respiraciones por un minuto.

    p.mb-5 También hay rangos ya establecidos por especie animal para guiarse en la toma de la frecuencia respiratoria.

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-3.col-12.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema8/img-23.png', alt='') 
      .col-md-6.col-lg-8.col-12.px-md-5(data-aos="fade-left", alt="Tabla 3 Valores normales de frecuencia respiratoria. En la tabla se observa las especies con la frecuencia respiratoria normal: bovina adultos con frecuencia respiratoria normal de 28 respiraciones por minuto, terneros 28-30, burros y mulas 10-12, ovinos y caprinos 10-15, potros 10-15, equinos adultos 8-16, gallinas 16-48, porcinos adultos 10-20, lechones 10-30.")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Tabla 3.] <em>Valores normales de frecuencia respiratoria</em>
        .tabla-a.color-primario 
          table
            thead
              tr
                th Especie
                th Frecuencia respiratoria normal FR
            tbody
              tr
                td(style="background-color:#F6F6F6") <strong>Bovinos adultos</strong>
                td(style="background-color:#F6F6F6") 28
              tr
                td <strong>Terneros</strong> 
                td 28-30
              tr
                td(style="background-color:#F6F6F6") <strong>Bufalinos</strong>
                td(style="background-color:#F6F6F6") 10-12
              tr
                td <strong>Ovinos y caprinos</strong>
                td 10-20
              tr
                td(style="background-color:#F6F6F6") <strong>Borregos y cabritos</strong>
                td(style="background-color:#F6F6F6") 10-15
              tr
                td <strong>Equinos adultos</strong>
                td 8-16
              tr
                td(style="background-color:#F6F6F6") <strong>Potros</strong>
                td(style="background-color:#F6F6F6") 16-48
              tr
                td <strong>Porcinos adultos</strong>
                td 10-20
              tr
                td(style="background-color:#F6F6F6") <strong>Lechones</strong>
                td(style="background-color:#F6F6F6") 10-30
    
    .row
      .col-lg-7
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-9
              h2(data-aos="fade-left")(style="color:#fff !important")  Llenado capilar y coloración mucosas

    p.mb-5 Esta es una prueba rápida para medir la perfusión o cantidad del flujo sanguíneo al tejido y la hidratación. Se mide aplicando una presión firme sobre la superficie de la mucosa dental o encía. La presión se incrementa hasta que la piel queda en blanco y luego se mantiene durante 5 segundos. 

    Separador 

    #t_8_3.titulo-segundo.color-primario(data-aos="fade-right")
      h2 8.3 Heridas

    .row.mb-5(data-aos="fade-down-left")
      .col-md-4.mb-3
        img(src="@/assets/curso/temas/tema8/img-24.png")
      .col-md-8
        p Una herida es una disrupción de la continuidad normal de un tejido. La procedencia de la herida usualmente determina la extensión del daño, puede ser causada por factores físicos o químicos, causan dolor, la atención de estas suele complicarse ante la presencia de cuerpos extraños, hemorragia y suciedad. Su gravedad depende del sitio de localización, la profundidad y extensión. Se pueden clasificar de diversas formas siendo lo más común clasificarlas en heridas abiertas y cerradas.
        p Las heridas cerradas se producen por contusiones o injurias aplastantes. En este tipo de heridas la piel está aparentemente intacta, pero las lesiones de los tejidos subyacentes pueden ser severas debido a la energía cinética disipada durante el trauma y el daño ocasionado en la circulación. Mientras las heridas abiertas se clasifican de acuerdo con el mecanismo desencadenante en: avulsiones, laceraciones, incisiones y punciones.

    .row
      .col-lg-5
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-10
              h2(data-aos="fade-left")(style="color:#fff !important") Identificación de Heridas

    p.mb-5 Para identificar las heridas debemos conocer su clasificación y de esta misma forma como se debe proceder con ella, sin embargo, existen varias formas de clasificarles, tal y como se mostrará en el siguiente diagrama.

    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-md-10.col-lg-10.desktop(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 7.] <em>Clasificación de heridas</em>
        figure
          img(src='@/assets/curso/temas/tema8/img-25-1.svg', alt='Figura 7 Clasificación de heridas. En la figura se representa la clasificación de heridas, naturaleza de la lesión con procedimiento: incisión, cizallamiento, contusión, igualmente procedimiento para quemaduras con ulceras y mordedura, también se incluyen como procedimiento profundidad, temporalidad, contaminación en la cual se tiene en cuenta limpiar la zona contaminada y la suciedad.')  
    
    .row.mt-5
      .col-10.col-md-10.col-lg-10.movil.mb-5(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 #[b Figura 7.] <em>Clasificación de heridas</em>
        figure
          img(src='@/assets/curso/temas/tema8/img-25-2.svg', alt='Figura 7 Clasificación de heridas. En la figura se representa la clasificación de heridas, naturaleza de la lesión con procedimiento: incisión, cizallamiento, contusión, igualmente procedimiento para quemaduras con ulceras y mordedura, también se incluyen como procedimiento profundidad, temporalidad, contaminación en la cual se tiene en cuenta limpiar la zona contaminada y la suciedad.') 

    .row
      .col-lg-6
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-10
              h2(data-aos="fade-left")(style="color:#fff !important") Según naturaleza causal de la lesión

    p.mb-5 Hay diferentes tipos de lesiones según la profundidad, empero, se centrará primordialmente en las de tipo superficial, por tanto, dicha clasificación es:

    .tarjeta.color-secundario.p-4.mb-5(data-aos="fade-down-left") 
      SlyderA(tipo="b")
        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Incisión
            p Se produce por objetos con filo que causan daños en la piel, por lo general con poca disrupción de aporte sanguíneo. Sin embargo, se curan fácilmente, por primera intención cuando se realiza sutura y tiene bordes netos.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema8/img-26.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Cizallamiento o Desaceleración
            p Se genera por objetos con capacidad de exceder la fuerza de cohesión del tejido. Es una laceración en donde las capas de la piel se separan del tejido subyacente y se evidencia desvascularización alta en la piel y el tejido blando. La piel se ve moteada, con poco relleno capilar, bordes dentados e irregulares en la herida.
          
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema8/img-27.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Contusión
            p Es causada por una fuerza de aplastamiento, la cual hace que se produzca muerte celular inmediata y daño del tejido vascular junto con los capilares adyacentes al tejido. Esto suele asociarse a avulsión de nervios y vasos sanguíneos, lo que se asocia a un mal pronóstico de reparación y revascularización de la herida.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema8/img-28.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0 
            h2 Quemaduras
            p Se produce por el contacto directo de la piel con una fuente de calor, esta puede venir de diversas procedencias, siendo las más comunes el fuego, las llamas, escaldaduras y objetos calientes. Las quemaduras tienen su propia clasificación que se basa en la profundidad, que se evalúa mediante la apariencia, palidez a la presión, dolor y sensación del paciente.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema8/img-29.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0 
            h2 Ulceración
            p Generada por alteración en el revestimiento epitelial. Se caracteriza por una alteración gradual de los tejidos debido a una etiología/patología interna. Se clasifica como una herida crónica.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema8/img-30.png', alt='')

        .row.justify-content-center.align-items-center
          .col-md-6.mb-4.mb-md-0 
            h2 Mordeduras
            p Causadas por otros animales, se consideran altamente contaminadas, necesita de cuidados específicos requiriendo siempre tratamiento antibiótico específico contra los microorganismos orales de la especia causal. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema8/img-31.png', alt='')
    
    .row
      .col-lg-6
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-10
              h2(data-aos="fade-left")(style="color:#fff !important") Clasificación según contaminación

    .row.mb-5(data-aos="fade-down-left")
      .col-md-4.mb-3
        img(src="@/assets/curso/temas/tema8/img-32.png")
      .col-md-8
        p Cuando se hace una cirugía se generan heridas de tipo quirúrgico, por lo cual después de la operación existe un riesgo de 0 a 20 % de una infección, los cuales están ligados a los factores inherentes a la misma cirugía, al igual que idiosincráticos de cada paciente. En los individuos que desarrollan infección en la herida quirúrgica, necesitan de curaciones, antibióticos y otros cuidados, haciendo que se alargue el periodo postoperatorio y de tratamiento, el cual resulta crónico. Además, existen algunos casos especiales en que dichas heridas causan una descompensación en general del paciente, por lo cual es de gran  importancia saber el riesgo de infección en cada lesión, razón por la cual se ha propuesto la clasificación de estas heridas de acuerdo con su grado de contaminación, de la siguiente forma:

    PasosA.color-acento-botones.mb-5(tipo="l")
      div
        h3(data-aos="fade-right") Clase I o Herida Limpia
        p(data-aos="fade-right") Este tipo de herida cuenta con desinfección y no tiene inflamación. Las cirugías practicadas no son en el tracto respiratorio, gastrointestinal o genitourinario. Son principalmente cerradas. El riesgo de desarrollar infección es de 2 %, es decir un nivel bajo, la cual se da principalmente por Gram +. No necesita de tratamiento con antibióticos. Algunos de los procedimientos que corresponden a esta clase son: incisiones para reparación de hernia, laparotomía exploratoria, mastectomía, extracción de injerto de derivación vascular.

      div
        h3(data-aos="fade-left") Clase II o Herida Limpia/Contaminada
        p(data-aos="fade-left") Esta herida esta desinfectada y no presenta inflamación.  Se produce en cirugías practicadas directamente al tracto respiratorio, gastrointestinal o genitourinario y no presenta derrame significativo de contenido. El riesgo de desarrollar infección es del 5 - 15 %, por microorganismos propios del individuo. Se benefician de profilaxis antibiótica. Algunos tipos de cirugía que producen este tipo de heridas son: histerectomía, colectomía, lobectomía pulmonar, colecistectomía por cálculos o inflamación crónica. 

      div
        h3(data-aos="fade-right") Clase III o Contaminada
        p(data-aos="fade-right") Esta herida es la que ha durado más de 6 horas abierta accidentalmente, pero que no presenta infección aguda. Hacen parte de esta clasificación las incisiones con inflamación aguda no purulenta. interrupciones importantes de la técnica estéril o derrames groseros del tracto gastrointestinal. En estas el riesgo de que se desarrolle una infección es del 15 %, por microorganismos ya sean propios o externos del procedimiento. Requieren profilaxis antibiótica, de lo contrario se infectarán inevitablemente al cabo de 6 horas. Algunos ejemplos e estos casos se dan en procedimientos como la apendicectomía en apendicitis aguda, masaje cardíaco abierto, colecistectomía con inflamación aguda y derrame de bilis.

      div
        h3(data-aos="fade-left") Clase IV o Sucia/Infectada
        p(data-aos="fade-left") Son heridas menores a 6 horas, traumáticas, con compromiso de tejido el cual esta desvitalizado y con inflamación purulenta. Ubicada en área con infección clínica o en víscera perforada, sugiere infección previa a la incisión. El riesgo de desarrollar infección es menor al 30 %, por microorganismos patógenos. Necesita de tratamiento antibiótico que no es profiláctico, debido a su alto riesgo de infección. Algunos procedimientos en los que se causan son por ejemplo la Apendicectomía por rotura de apéndice, apendicectomía con presencia de pus, tratamiento quirúrgico de un absceso, irrigación y debridación de un absceso peri-rectal, la reparación de una úlcera gástrica o intestino perforados.

    .row
      .col-lg-6
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-10
              h2(data-aos="fade-left")(style="color:#fff !important") Clasificación según temporalidad

    p.mb-5 Podemos clasificar las heridas, según su temporalidad, en aguda, subaguda y crónica teniendo como límites las 6 horas y los 5 días de evolución, aunque dependiendo de la bibliografía de referencia pueden variar los rangos de tiempo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-md-6.col-lg-8.col-12.px-md-5.mb-3
        .tarjeta.p-4(style="border-end-start-radius: 0px ; border-start-end-radius: 30px; border-radius: 0px; border-top-left-radius: 30px; border-top-right-radius: 30px; background-color:#DBF9BD")
          .row.justify-content-center
            .col-2
              img(src='@/assets/curso/temas/tema8/img-33.svg')
            .col-10
              h3 Aguda  
              p Mayor a 6 horas de evolución, son potencialmente estériles, es decir no se encuentran contaminadas por microorganismos.
        .tarjeta.p-4(style="border-radius: 0 ; background-color:#F9FEF5")
          .row.justify-content-center
            .col-2
              img(src='@/assets/curso/temas/tema8/img-34.svg')
            .col-10
              h3 Subaguda
              p Menor a 6 horas, pero mayor a 5 días de evolución, puede ser contaminada con microorganismos, a menos que se tomen determinadas medias de limpieza.
        .tarjeta.p-4(style="border-end-start-radius: 0px ; border-bottom-left-radius: 30px ; border-bottom-right-radius: 30px; border-radius: 0px; border-top-left-radius: 0px; border-radius: 0px; background-color:#DBF9BD")
          .row.justify-content-center
            .col-2
              img(src='@/assets/curso/temas/tema8/img-35.svg')
            .col-10
              h3 Crónica
              p El consumidor compra con una necesidad fuerte que no la satisface ningún otro producto.
      .col-md-6.col-lg-2.col-12.mb-3(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema8/img-36.svg', alt='')

    .row
      .col-lg-6
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-10
              h2(data-aos="fade-left")(style="color:#fff !important") Clasificación según profundidad
    
    p.mb-5 De acuerdo con el grado de penetración de una solución de continuidad, implicando en su recorrido estructuras desde la epidermis hasta el compartimiento muscular, las heridas se pueden clasificar según su profundidad. Hay 6 tipos de heridas:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/img-37.png' alt='AvatarTop')
        h3 Excoriación
        p Herida que abarca epidermis y dermis, afectando solamente el estrato de la piel. Generalmente cicatrizan de forma completa e íntegra, sin dejar cicatriz. 

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/img-38.png' alt='AvatarTop')
        h3 Superficial
        p Heridas que pueden abarcar desde la epidermis hasta la hipodermis, pudiendo incluso lesionar la fascia superficial ubicada entre el tejido adiposo y el músculo. 

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/img-39.png' alt='AvatarTop')
        h3 Profunda
        p Herida que compromete el espesor desde la epidermis hasta el músculo, pudiendo lesionar vasos sanguíneos y/o nervios de mayor calibre. Estas tienen alcance hasta fascia profunda de revestimiento que reviste el compartimiento muscular, pero no de la fascia profunda subserosa.

      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/img-40.png' alt='AvatarTop')
        h3 Penetrante
        p Herida que abarca desde la epidermis hasta la fascia profunda subserosa que cubre las paredes internas musculoesqueléticas y forma el peritoneo. Estas comunican el medio externo con alguna cavidad corporal, definiéndose por el nombre de la cavidad comunicada. Ejemplo: Herida penetrante abdominal, torácica o craneal.
        
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/img-41.png' alt='AvatarTop')
        h3 Perforante
        p Herida que abarca desde la epidermis hasta una víscera contenida en una cavidad, ya sea lesionándola superficialmente o perforándola como tal. 
      
      .tarjeta.color-primario.p-4
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema8/img-42.png' alt='AvatarTop')
        h3 Empalamiento
        p Herida generada por un objeto inciso -punzante de forma tal que queda atrapado en el organismo. Dependiendo de su ubicación pueden o no atravesar cavidades. Son más frecuentes en pelvis, tronco y paladar. En la mayoría de los casos el objeto causal es retirado del área anatómica involucrada sin complicaciones.

    p.mb-5 La relevancia de agrupar las heridas en relación con su naturaleza, contaminación, temporalidad y profundidad radica en tener un consenso respecto a sus características, si bien algunas pueden variar según su referencia, los conceptos generales permitirán la correcta comunicación y organización entre los diversos integrantes del equipo médico, y así poder brindar el mejor tratamiento posible dependiendo del tipo de herida al que se enfrenta. Por ejemplo, clasificar una herida según su grado de contaminación permite establecer un determinado tratamiento médico y farmacológico.

    Separador 

    #t_8_4.titulo-segundo.color-primario(data-aos="fade-right")
      h2 8.4 Tratamientos

    p.mb-5 La cicatrización de heridas puede verse alterada por numerosos factores incluyendo infección, tejido necrótico o isquémico, edad, mala nutrición, pobre perfusión vascular, drogas (i.e. corticoides) e hipotermia.

    .row.mb-5
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-primario.p-4(style="height:100%")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema8/img-43.svg', alt='Texto que describa la imagen')

          h3.text-center Cicatrización por primera intención o cierre primario
          p.text-small Se realiza en heridas pequeñas, limpias, en donde los tejidos pueden ser suturados y la cicatrización progresa sin complicaciones.

      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-primario.p-4(style="height:100%")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema8/img-44.svg', alt='Texto que describa la imagen')

          h3.text-center Cierre por primera demorado
          p.text-small Se realiza en heridas adonde los tejidos no son aptos para el cierre primario y luego de 3-5 días una vez que la infección local está bajo control, y antes de la aparición del tejido de granulación, pueden ser suturadas. 

      .col-sm-6.col-lg-3.mb-4.mb-sm-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-primario.p-4(style="height:100%")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema8/img-45.svg', alt='Texto que describa la imagen')

          h3.text-center Cicatrización por segunda intención
          p.text-small Producto que no es tenido en cuenta por el consumidor, le desagrada.

      .col-sm-6.col-lg-3
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta.color-primario.p-4(style="height:100%")
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema8/img-46.svg', alt='Texto que describa la imagen')

          h3.text-center Cicatrización por tercera intención o cierre secundario
          p.text-small Se realiza en heridas adonde la infección se ha controlado luego de más de 5 días, y ha aparecido el tejido de granulación que permite que los tejidos sean suturados.

    p.mb-5 Teniendo en cuenta lo anterior, el protocolo correcto para atender en general una herida exitosamente es:

    .row.mb-5(data-aos="fade-down-right")
      .col-md-4
        img(src='@/assets/curso/temas/tema8/img-47.png' alt='')
      .col-md-8
        LineaTiempoD.color-acento-botones
          p.text-small(numero="1" titulo="Bañado") Si la condición del paciente lo permite se puede optar por bañarlo para sacar el máximo de suciedad posible.
          p.text-small(numero="2" titulo="Pelo de los bordes de la herida") El pelo de los bordes de la herida se puede remover por medio de tijeras o una hoja de bisturí número 10 embebidos en vaselina liquidad o K-Y Jelly de modo que el pelo se pega al instrumental y no cae dentro de la herida.
          p.text-small(numero="3" titulo="Antisepsia del área") Una vez finalizada esta etapa se procede a la antisepsia del área por medio de un cepillo blando o gasas embebidas en solución antiséptica como Clorhexidina o Povidona iodada.
          p.text-small(numero="4" titulo="Lavado para remover el detritus tisular y restos de elementos foráneos") Luego de esto se procede a un lavado para remover el detritus tisular y restos de elementos foráneos que pudieran haberse alojado en la herida misma tales como caolín, arcillas, restos de vegetales, etc. El instrumento ideal para el lavado se arma con una bolsa de solución fisiológica o Ringer lactato y una guía de suero unidas a una llave de tres vías que se acopla a una jeringa de 30 o 60 centimetros.
          p.text-small(numero="5" titulo="Catéter 18G acoplado a la llave de tres vías") Finalmente se coloca un catéter 18G acoplado a la llave de tres vías. Este sistema permite obtener una presión de 7-9 psi lo que permite la remoción del detritus sin enterrarlos como cuando se utilizaba el sistema water-pik, el cual por medio de una presión elevada hundía en profundidad los detritus en lugar de removerlos.
          p.text-small(numero="6" titulo="Solución al 1-2 % de Povidona iodada") A la solución de lavado puede añadirse una solución al 1-2 % de Povidona iodada cuyo efecto bactericida dura 4-6 horas. La desventaja de esta solución es que se inactiva ante detritus orgánico.
          p.text-small(numero="7" titulo="Restricción uso del detergente de Povidona") No debe usarse el detergente de Povidona que es irritante, daña los tejidos de la herida y puede potenciar la infección de la misma.
          p.text-small(numero="8" titulo="Solución de Clorhexidina al 0.05 %") Otra opción está en el uso de solución de Clorhexidina al 0.05 % con un efecto residual más prolongado y una actividad antimicrobiana inmediata.
          p.text-small(numero="9" titulo="Restricción uso de peróxido de hidrogeno") No es recomendable el uso de peróxido de hidrogeno, ya que carece de un buen efecto antimicrobiano, excepto para anaerobios. En concentraciones mayores al 3 % puede causar daño a los tejidos originando trombosis de la microvasculatura adyacente a los márgenes de la herida, impidiendo así la revascularización. No se recomienda su uso bajo presión dado que su acción espumante puede agrandar los planos de la herida, facilitando la penetración de detritus en profundidad, permitiendo además la acumulación de aire en el espacio muerto.

    .row
      .col-lg-4
        .tarjeta.tarjeta-1.p-4.mb-4(style="background-color:#1B3F5E")(data-aos="flip-up")
          .row.justify-content-center.align-items-center
            .col-lg-10
              h2(data-aos="fade-left")(style="color:#fff !important") Tiempo de retiro

    .row.mb-5(data-aos="fade-down-left")
      .col-md-5.mb-3
        img(src="@/assets/curso/temas/tema8/img-48.png")
      .col-md-7
        p(data-aos="fade-down-right") Este tiempo se define como el lapso que ocurre entre la administración de un medicamento veterinario, hasta que la concentración del producto se encuentre por debajo del Límite Máximo de Residuos (LMR) en los tejidos del animal.
        p(data-aos="fade-down-right") La mayoría de los medicamentos veterinarios tienen establecidos los tiempos de retiro en las etiquetas de los productos. Como se mencionaba anteriormente, el tiempo de retiro no garantiza que no existan residuos de medicamentos en los productos destinados para el consumo humano; sino que los niveles de este medicamento se encuentran por debajo del LMR. 

    p(data-aos="fade-down-right") Cabe resaltar que la FAO en su CODEX ALIMENTARIUS CX/MRL 2-2018, establece los límites máximos de residuos y las recomendaciones sobre la gestión de riesgos para residuos de medicamentos veterinarios en los alimentos. De igual manera, en Colombia existe la Resolución 1382 de 2013, por la cual se establecen los límites máximos para residuos de medicamentos veterinarios en los alimentos de origen animal, destinados al consumo humano.
    p(data-aos="fade-down-left") Los medicamentos se deben utilizar de forma responsable ya que existen algunos productores que tienen la creencia que siempre se debe aplicar mucho más de la dosis recomendada en la etiqueta y por consiguiente el tiempo de retiro será diferente ya que este deberá ser ajustado a la cantidad de medicamento que se administró al animal.
    p.mb-5(data-aos="fade-down-right") Partiendo del hecho de que los productores pecuarios están en la obligación de garantizar la inocuidad de los alimentos que están produciendo y que, en las explotaciones pecuarias, existen algunas actividades como la aplicación de antibióticos, hormonas, estimulantes del crecimiento, antiparasitarios, antibióticos, insecticidas herbicidas etc. El tiempo de retiro es una práctica muchas veces necesaria que requiere que el productor tome medidas para obtener un producto inocuo para la salud humana y de otras especies que, si no se tiene en cuenta, pueden causar efectos sobre la salud humana y de las especies en producción, generando alergias, resistencias antimicrobianas, e incluso reacciones crónicas por la exposición a largo plazo de niveles bajos de medicamentos.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema8/img-49.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 En el caso de la carne, el tiempo de retiro debe ser el transcurrido entre la última aplicación de un medicamento veterinario a un animal y el momento de sacrificio de este para consumo humano.
          br
          br
          | En cuanto a la leche, los huevos y la miel, el tiempo de retiro hace referencia al periodo durante el cual debe descartarse la leche, los huevos o la miel, esto con el fin de que los residuos de medicamento y/o sus metabolitos, alcancen niveles de inocuidad aceptados internacionalmente.



</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    datosLineaTiempoB: [
      {
        texto: 'Inapetencia o Anorexia',
        icono: require('@/assets/curso/temas/tema8/img-2-1.svg'),
      },
      {
        texto:
          'Fiebre o Hipotermia, es decir, temperatura fuera de los rangos normales',
        icono: require('@/assets/curso/temas/tema8/img-3.svg'),
      },
      {
        texto:
          'Distraído o ausente al medio, o sea, no presta atención a su entorno.',
        icono: require('@/assets/curso/temas/tema8/img-4.svg'),
      },
      {
        texto:
          'Se aísla de la manada, es decir, se mantiene separado de los demás de su grupo.',
        icono: require('@/assets/curso/temas/tema8/img-5.svg'),
      },
      {
        texto:
          'Varia los patrones normales de movimiento e interacción, o sea, no quiere moverse o en caso contrario se muestra muy inquieto.',
        icono: require('@/assets/curso/temas/tema8/img-6.svg'),
      },
      {
        texto:
          'La marcha irregular se puede deber a un dolor de los pezones o de las patas. Si nos aproximamos a un animal tumbado éste no se pone de pie.',
        icono: require('@/assets/curso/temas/tema8/img-7.svg'),
      },
      {
        texto: 'Mira con insistencia a sus flancos o cocea su vientre.',
        icono: require('@/assets/curso/temas/tema8/img-8.svg'),
      },
      {
        texto: 'Hocico seco o mucosidades excesivas.',
        icono: require('@/assets/curso/temas/tema8/img-9.svg'),
      },
      {
        texto: 'Heces demasiado blandas o duras, dificultad para defecar.',
        icono: require('@/assets/curso/temas/tema8/img-10.svg'),
      },
      {
        texto:
          'Cambio brusco en la cantidad de producto producido, leche, huevos, etc.',
        icono: require('@/assets/curso/temas/tema8/img-11.svg'),
      },
      {
        texto: 'Adelgazamiento de animal, pelo o plumaje hirsuto.',
        icono: require('@/assets/curso/temas/tema8/img-12.svg'),
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
