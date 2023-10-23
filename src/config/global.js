export default {
  global: {
    componenteFormativo:
      'Sanidad animal, fundamentos, componentes y aplicabilidad',
    descripcionCurso:
      'La sanidad animal refiere a la prevención y control de las enfermedades infecto contagiosas que se presentan a nivel de producción, junto con el conocimiento de los animales, su comportamiento, bienestar, manejo, entorno, alimentación y todos los requerimientos que tienen, lo cual conlleva a que puedan realmente aportar y sean provechosos en la producción de forma eficiente. ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comportamiento animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Principios',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Interpretación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Bienestar animal',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Enfermedad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Manifestación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Enfermedades endémicas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Zoonosis',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos de transmisión',
            hash: 't_4_1',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cuarentena',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Conducción',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Características',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Tipos y uso de instrumentos inductores de movimiento',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Sujeción e inmovilización',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Características',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Métodos',
            hash: 't_7_1',
          },
          {
            numero: '7.3',
            titulo: 'Herramientas y Equipos',
            hash: 't_7_3',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Primeros Auxilios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Manejo y Aplicación',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Signos vitales en especie pecuaria',
            hash: 't_8_1',
          },
          {
            numero: '8.3',
            titulo: 'Heridas',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Tratamientos',
            hash: 't_8_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_17_722200.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '1. Comportamiento animal',
      referencia:
        'Subgerencia de Protección y Regulación Pecuaria, ICA. (s.f.). Buenas prácticas en el uso de medicamentos veterinarios',
      tipo: 'Presentación',
      link:
        'https://www.ica.gov.co/getattachment/125bc7ab-1082-441e-be65-ef5445ccbf4f/Publicacion-19.aspx',
    },
    {
      tema: '1. Comportamiento animal',
      referencia:
        'Subgerencia de Protección y Regulación Pecuaria, ICA (2007). Buenas prácticas en el uso de medicamentos veterinarios y la inocuidad de los alimentos.',
      tipo: 'Documento',
      link:
        'https://www.ica.gov.co/getattachment/cf8d4834-dd11-40f2-944e-b1ae436ef513/Publicacion3.aspx#:~:text=BUENAS%20PR%C3%81CTICAS%20EN%20EL%20USO%20DE%20MEDICAMENTOS%20VETERINARIOS%20(BPMV)%3A,rios%20administrados%20en%20condiciones%20pr%C3%A1ctica',
    },
    {
      tema: '1. Comportamiento animal',
      referencia:
        'Agrotendencia TV. (2021). Etología | Estudio del comportamiento de los animales en sus medios naturales. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=rCB2EIknPrs',
    },
    {
      tema: '1. Comportamiento animal',
      referencia:
        'Ricardo Espín Montesdeoca. (2020). Etología y su impacto en la producción anima. [Video] YouTube',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=EufaxzmMhds',
    },
    {
      tema: '2. Bienestar Animal',
      referencia:
        'Daniel Salamone. (2020). Bienestar Animal en Producción Animal. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WquVDFVf298',
    },
    {
      tema: '2. Bienestar Animal',
      referencia:
        'Daniel Salamone. (2020). Bienestar Animal 2. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=A_eu7ZozXUc',
    },
    {
      tema: '3. Enfermedades',
      referencia:
        'Susana V. (2020). Enfermedades de notificación oficial. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=w33FJGpkXmY',
    },
    {
      tema: '3. Enfermedades',
      referencia:
        'Clint May, CFSPH. (s.f.). Vías de transmisión de enfermedades zoonóticas. The Center for Food Security & Public Health, Iowa State University',
      tipo: 'Folleto',
      link:
        'https://www.cfsph.iastate.edu/Zoonoses/assets/Spanish/S_transmission_routes_of_zoonotic_diseases.pdf',
    },
    {
      tema: '3. Enfermedades',
      referencia:
        'Organización Panamericana de la Salud. (2003). Zoonosis y enfermedades Transmisibles comunes al hombre y a los animales. Volumen 2.',
      tipo: 'Documento',
      link: 'https://iris.paho.org/bitstream/handle/10665.2/710/9275319928.pdf',
    },
    {
      tema: '4. Zoonosis',
      referencia:
        'Ministerio de Salud y Protección Social (2015). ABECÉ de Zoonosis.',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/abc-zoonosis.pdf',
    },
    {
      tema: '4. Zoonosis',
      referencia:
        'Servicio social UAS media (2020). Enfermedades zoonóticas. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=y-k5cH7C96c',
    },
    {
      tema: '4. Zoonosis',
      referencia:
        'CMP Lima. (2021). Enfermedades Zoonóticas y Metaxénicas. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=MQcw1aazEcs',
    },
    {
      tema: '7. Sujeción e inmovilización',
      referencia:
        'TvAgro. (2016). Nudos utlizados en ganadería y equinos - TvAgro por Juan Gonzalo Angel. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=4m2on15o3S8',
    },
    {
      tema: '7. Sujeción e inmovilización',
      referencia:
        'Círculo digital Veterinario. (2021). 1 parte “Taller sobre Sujeción Física y Química de los Bovinos” Impartida MVZ Eduardo Posadas M. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=HT8XAWhxhC4',
    },
    {
      tema: '7. Sujeción e inmovilización',
      referencia:
        'Círculo digital Veterinario. (2021). 2 parte “Taller sobre Sujeción Física y Química Raza Holstein”  MVZ Eduardo Posadas M. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SB_4aYPSBrc',
    },
    {
      tema: '7. Sujeción e inmovilización',
      referencia:
        'Círculo digital Veterinario. (2021). 3 parte “Taller sobre Sujeción Física y Química en Bovinos” Impartida MVZ Eduardo Posadas M. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=ek_c0Ypku6I',
    },
    {
      tema: '7. Sujeción e inmovilización',
      referencia:
        'Círculo digital Veterinario. (2021). 4 parte “Taller sobre Sujeción Química y la Importancia” Impartida MVZ Eduardo Posadas M. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=eYYlkRWhspk',
    },
    {
      tema: '7. Sujeción e inmovilización',
      referencia:
        'Círculo digital Veterinario. (2021). 5 parte “Taller sobre Sujeción Química y Auscultación, Cesárea en Bovinos” MVZ Eduardo Posadas M. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5fK98dMCam4',
    },
    {
      tema: '7. Sujeción e inmovilización',
      referencia:
        'Círculo digital Veterinario. (2021). 6 parte “Taller sobre Sujeción Física y Química de los Bovinos” Impartida MVZ Eduardo Posadas M. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=5jbIvh4SOYw',
    },
    {
      tema: '7. Sujeción e inmovilización',
      referencia:
        'Rimbaud E, Pineda N. otros, (s.f), Metódos de sujeción y aplicación de inyectables.',
      tipo: 'Documento',
      link: 'http://www.bio-nica.info/biblioteca/Rimbaud2005f.pdf',
    },
    {
      tema: '10. Primeros auxilios',
      referencia:
        'GCI FAO (2020). Administración de medicamentos veterinarios. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Mc0vK3qOXXM',
    },
    {
      tema: '8. Primeros auxilios',
      referencia:
        'Proyecto Ganadería Climáticamente Inteligente (2020). Administración de medicamentos veterinarios vía intraperitoneal. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=iYwe0Z_YVuI',
    },
    {
      tema: '8. Primeros auxilios',
      referencia:
        'Proyecto Ganadería Climáticamente Inteligente (2020). Administración de medicamentos veterinarios vía intravenosa. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dcZ0MPh9wZQ',
    },
    {
      tema: '8. Primeros auxilios',
      referencia:
        'Proyecto Ganadería Climáticamente Inteligente (2020). Administración de medicamentos veterinarios vía intramamaria. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=TAI_D_OdZpE',
    },
    {
      tema: '8. Primeros auxilios',
      referencia:
        'OCV España. (2021). Uso correcto de medicamentos veterinarios. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gr4jjH31Vcc',
    },
    {
      tema: '8. Primeros auxilios',
      referencia:
        'AvigdorG_Channel. (2021). Vías de Administración de Medicamentos Grandes Animales. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gvw6dWKZfT8',
    },
  ],
  glosario: [
    {
      termino: 'Autoinmune',
      significado:
        'Afección por la que el sistema inmunitario del cuerpo ataca los tejidos sanos propios porque los confunde con tejidos ajenos. La mayoría de las enfermedades auto inmunitarias producen inflamación que afecta muchas partes del cuerpo (Instituto Nacional del Cáncer, 2021).',
    },
    {
      termino: 'Contaminación',
      significado:
        'Presencia de microorganismos patógenos o sustancias nocivas para la salud en la materia inanimada, es decir no viva (Universidad la Salle, 2010).',
    },
    {
      termino: 'Endémico',
      significado:
        'Enfermedad que se presenta con una frecuencia constante en una población siendo además predecible ese nivel de presentación (Universidad la Salle 2010).',
    },
    {
      termino: 'Enfermedad',
      significado:
        'Proceso en el que se produce una alteración de las funciones corporales del animal. Puede acompañarse de síntomas y lesiones o no (Universidad la Salle 2010).',
    },
    {
      termino: 'Estereotipia',
      significado:
        'Las estereotipias son movimientos involuntarios, coordinados, no propositivos y rítmicos que se realizan de una forma idéntica en cada repetición (Estereotipias primarias en pediatría, Elsevier, 2010).',
    },
    {
      termino: 'Etiología',
      significado:
        'La etiología es la ciencia centrada en el estudio de la causalidad de la enfermedad. En medicina, patogénesis se refiere al origen de la enfermedad (Wikipedia, 2021).',
    },
    {
      termino: 'Gregario',
      significado:
        'Un individuo gregario (del latín gregarĭus, 1 grey del rebaño) es aquel que tiende a vivir agrupado con otros congéneres formando manadas, cardúmenes, colonias o, en el caso del ser humano, grupos sociales (Wikipedia, 2021).',
    },
    {
      termino: 'Impronta',
      significado:
        'Proceso de aprendizaje que tiene lugar en los animales jóvenes durante un corto período de receptividad, del que resulta una forma estereotipada de reacción frente a un modelo, que puede ser otro ser vivo o un juguete mecánico (Real Academia de la lengua Española, 2021).',
    },
    {
      termino: 'Jerarquía',
      significado:
        'Es una estructura que se establece en orden a su criterio de subordinación entre personas, animales y valores. Tal criterio puede ser superioridad, inferioridad, anterioridad, posterioridad, etc. es decir, cualquier cualidad categórica de gradación agente que caracterice su interdependencia (Wikipedia, 2021).',
    },
    {
      termino: 'Propagable',
      significado:
        'Es la posibilidad o la susceptibilidad de ser propagado, que se puede o es posible, extender, transmitir, reproducir, proliferar, dispersar, vulgarizar, expresar, divulgar, difundir, anunciar, enseñar, publicar, informar, irradiar o comunicar por una vía reproductiva o incrementar alguna cosa (Definición y etimología, 2021).',
    },
    {
      termino: 'Vector',
      significado:
        'Vehículo animado, generalmente se considera como tales a los artrópodos (Universidad la Salle 2010).',
    },
    {
      termino: 'Zoonosis',
      significado:
        'Se considera zoonosis a cualquier enfermedad y/o infección que es naturalmente transmisible desde animales vertebrados al hombre (Ministerio de la Salud y Protección Social, 2021).',
    },
  ],
  referencias: [
    {
      referencia:
        'Álvarez Alfaro, C. (2018). Evaluación de mensuración de temperatura comparando cuatro tipos de termómetros en canes en el Distrito de Yanahuara, Arequipa – Perú 2018. [Trabajo para optar al título de Profesional, Universidad Católica de Santa María].',
      link: 'https://core.ac.uk/download/pdf/198128916.pdf',
    },
    {
      referencia:
        'Brunori, J.; Juarez, M. (s.f.). Un plan sanitario adecuado. Agritotal.com',
      link: 'https://www.agritotal.com/nota/un-plan-sanitario-adecuado/',
    },
    {
      referencia:
        'Cruz-Amaya, J. (2008). Principios básicos del manejo de las heridas. Departamento de Salud Animal, Universidad de Caldas.',
      link: 'http://vip.ucaldas.edu.co/vetzootec/downloads/v2n1a08.pdf',
    },
    {
      referencia: 'Dabanch P. J. (2003). Zoonosis. Rev Chil Infect.',
      link: 'https://scielo.conicyt.cl/pdf/rci/v20s1/art08.pdf',
    },
    {
      referencia:
        'Martín, G. (2016). Etología y comportamiento animal: principios de bienestar animal. Universidad Nacional de Tucumán. Facultad de Agronomía y Zootecnia.',
      link:
        'https://www.produccion-animal.com.ar/etologia_y_bienestar/etologia_en_general/10-Etologia_y_comportamiento.pdf',
    },
    {
      referencia:
        'Ortega Miranda, G. (2019). Clasificación de las Enfermedades.',
      link:
        'https://www.abc.com.py/edicion-impresa/suplementos/escolar/clasificacion-de-las-enfermedades-1796652.html',
    },
    {
      referencia:
        'Ponce del Valle, M.; Vicari, C.; Faravelli, M.; Glauber, C.; Winter, N. (2015). Manual de bienestar animal, un enfoque práctico para el buen manejo de especies domésticas durante su tenencia, producción, Concentración, Transporte Y Faena Versión. 1.',
      link:
        'https://www.senasa.gob.ar/sites/default/files/ARBOL_SENASA/ANIMAL/BOVINOS_BUBALINOS/INDUSTRIA/ESTABL_IND/BIENESTAR/manual_de_bienestar_animal_especies_domesticas_-_senasa_-_version_1-2015.pdf',
    },
    {
      referencia:
        'R. Brühl-Day. (s.f.). Manejo de heridas. Agrovet market animal health, Área de Investigación y Desarrollo Investigación en Salud Animal, St. George’s University-School of Veterinary Medicine.',
      link:
        'https://www.agrovetmarket.com/investigacion-salud-animal/pdf-download/manejo-de-heridas',
    },
    {
      referencia:
        'Rimbaud, E.; Pineda Nohemy, L.; Chavarrí, L. (2005). Métodos de sujeción y aplicación de inyectables. Facultad de Ciencias Agrarias Universidad de Ciencias Comerciales. Escuela de Veterinaria.',
      link: 'http://www.bio-nica.info/biblioteca/Rimbaud2005f.pdf',
    },
    {
      referencia:
        'Servicio Nacional De Sanidad Y Calidad Agroalimentarias - SENASA. (s/f). Bienestar animal.',
      link:
        'https://www.senasa.gob.ar/cadena-animal/bovinos-y-bubalinos/produccion-primaria/establecimiento-productivo/bienestar-animal#:~:text=Desde%20un%20sentido%20pr%C3%A1ctico%2C%20el,de%20obtener%20el%20producto%20carne%3B',
    },
    {
      referencia:
        'Zarate, G.; Piña, S.; Zárate, A. (2020). Clasificación de las heridas. Manual de heridas y suturas. Escuela de Medicina. Universidad Finis Terrae.',
      link:
        'https://www.medfinis.cl/img/manuales/Clasificacion%20heridasv2020.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Andrés Felipe Avilan Lozano',
          cargo: 'Experto temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Diana Marcela Luis Vásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñadora y Evaluador Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Humberto Arias Díaz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Inés Machado López',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador web',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyborad e Ilustración',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelsón Iván Vera Briceño',
          cargo: 'Producción Audiovisual',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Livtin',
          cargo: 'Animador',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Francisco José Vásquez Suárez',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jorge Bustos Gómez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Distrito Capital - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
