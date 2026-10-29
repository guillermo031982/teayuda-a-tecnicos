/* TeAyuda · guías de campo. El texto sale de protocolos-texto/; las fotos, de fotos/. */
const FOTO = 'fotos/cucaracha-alemana/';
const ph = (file, alt, cap) => ({src: FOTO + file, alt, cap: cap || alt});

const GUIAS = [
  {
    id: 'alemana',
    group: 'plaga',
    status: 'fotos',
    title: 'Cucaracha alemana',
    latin: 'Blattella germanica',
    summary: 'Vivienda: hablar, contrastar el grado con la reseña, gel y trampas, y cerrar.',
    source: 'protocolos-texto/cucaracha-alemana.txt',
    products: [
      {name: 'Gel Max Force Prime, Optimus o Advion', dose: 'Listo al uso', note: 'Tratamiento principal en vivienda'},
      {name: 'Trampas Trap-A-Roach', dose: 'Feromona', note: 'Nevera, horno, latiguillos, muebles, baño'},
      {name: 'Actibiol', dose: '50 ml / garrafa', note: 'Si la reseña pide líquido en infestación baja'},
      {name: 'Granulado', dose: '30 g / garrafa o 1 monodosis', note: 'Media y alta, cuando toque líquido'},
      {name: 'Adylac o Stop rastreros', dose: 'Listo al uso', note: 'Locales. En vivienda, solo si encaja el plazo'}
    ],
    warnings: [
      {
        title: 'Local comercial: no eches gel por tu cuenta',
        text: 'En locales, gel solo si la reseña lo indica. Si no lo pone, Actibiol o granulado, trampas, Adylac o Stop rastreros.'
      },
      {
        title: 'Alta y la cita era gel',
        items: [
          'De 9:00 a 17:00 consulta a oficina.',
          'Sin respuesta: grupo de WhatsApp de dudas de tratamientos.',
          'Si no pueden salir: cobra la alta, aplica gel ahora y oficina cita la fumigación.'
        ]
      }
    ],
    steps: [
      {
        short: 'Hablar',
        title: 'Presentarse y hablar a fondo',
        summary: 'Preséntate y pregunta dónde está el foco.',
        blocks: [
          {t: 'p', text: 'Preséntate como técnico de Teneplagas. Habla con el cliente el tiempo que haga falta: dónde ve más cucarachas, desde cuándo, si salen de día y si hay crías.'},
          {t: 'ul', items: [
            'Cocina, baños, salón y habitaciones.',
            'Debajo de electrodomésticos, cajones y zócalos.',
            'Si el problema viene de un vecino o de una zona concreta.'
          ]},
          {t: 'p', text: 'Confirma que es cucaracha alemana (dos bandas oscuras en el pronoto). La foto es el ciclo, de ninfa a adulto.'},
          {t: 'photos', items: [ph('img_01.jpg', 'Ciclo de la cucaracha alemana, de ninfa a adulto', 'Ciclo: ninfa → adulto')]}
        ]
      },
      {
        short: 'Inspección',
        title: 'Inspeccionar y contrastar con la reseña',
        summary: 'Confirma si es baja, media o alta.',
        blocks: [
          {t: 'p', text: 'Inspecciona y compara con la reseña del calendario. El importe orienta el grado, pero manda lo que ves en la casa.'},
          {t: 'ul', items: [
            'Baja: solo las ve en la cocina.',
            'Media: cocina, sala y baño.',
            'Alta: toda la casa.'
          ]},
          {t: 'p', text: 'Mira cajones, bajo el fregadero, nevera, horno, zócalos y baños. No te quedes solo con lo que contó el cliente.'},
          {t: 'callout', title: 'Si no coincide con la cita', text: 'Si el grado real es alto y la cita estaba como cebo en gel, no trates la casa como una baja. Sigue el paso 3 antes de aplicar.'},
          {t: 'photos', multi: true, items: [
            ph('img_02.jpg', 'Inspección de cajones en una habitación', 'Inspección en cajones / habitación'),
            ph('img_08.jpg', 'Ejemplo de reseña del calendario antes del tratamiento', 'Ejemplo de reseña en el calendario (antes)')
          ]}
        ]
      },
      {
        short: 'Alta',
        title: 'Si es alta y la cita era gel',
        summary: 'Oficina, WhatsApp o cobrar la alta y dejar el gel.',
        blocks: [
          {t: 'p', text: 'Este paso es solo cuando la infestación es alta y la cita era cebo en gel. Si el grado coincide con la reseña, pasa al paso 4.'},
          {t: 'callout', title: 'Qué hacer, en este orden', items: [
            'De 9:00 a 17:00 consulta a oficina antes de cambiar el trabajo.',
            'Si no contestan, escribe al grupo de WhatsApp de dudas de tratamientos.',
            'Si no pueden salir de la vivienda: cobra el importe de infestación alta, aplica gel ahora y deja que oficina cite la fumigación.',
            'Escríbelo en la reseña para que oficina lo vea.'
          ]},
          {t: 'p', text: 'La fumigación con líquido lleva plazo de seguridad (12 horas). No la hagas si la vivienda no se puede abandonar. El gel de hoy no sustituye esa cita.'},
          {t: 'note', text: 'Fuera de horario de oficina, la guía Fuera de horario manda: grupo de fumigar y, si en 15 minutos no hay respuesta, el criterio del técnico.'}
        ]
      },
      {
        short: 'Aplicar',
        title: 'Aplicar según el grado',
        summary: 'Gel y trampas como marca el protocolo.',
        blocks: [
          {t: 'p', text: 'Coloca el tratamiento según el grado que confirmaste. En vivienda el eje es gel más trampas de feromona. El líquido de la reseña, solo cuando toca y se puede cumplir el plazo.'},
          {t: 'callout', title: 'Local comercial', text: 'No apliques gel si la reseña no lo dice. En local: Actibiol (baja) o granulado (media y alta), trampas, y Adylac o Stop rastreros.'},
          {t: 'h', text: 'Dónde va el gel'},
          {t: 'photos', items: [ph('img_03.jpg', 'Aplicación de gel en tuberías', 'Aplicación de gel en tuberías')]},
          {t: 'p', text: 'Elige el grado y sigue esa lista. Las trampas de cocina y baño se repiten; cambia el alcance del gel y las trampas de salón y habitaciones.'}
        ],
        degrees: {
          baja: [
            {t: 'h', text: 'Infestación baja'},
            {t: 'p', text: 'Gel concentrado en la cocina. En habitaciones y sala, menos cantidad que en la cocina.'},
            {t: 'ul', items: [
              'Bisagras, bajo la encimera, cajones y tuberías.',
              'Bajo los muebles altos de la cocina.',
              'Nevera: retírala, gel detrás y una trampa en el motor. Pide un cepillo y deja la zona lo más limpia posible.',
              'Zócalos de puerta y de muebles bajos, microondas, horno y parte baja de electrodomésticos.',
              'Debajo de la placa, retirando el horno. Cuidado de no estropear el mecanismo.'
            ]},
            {t: 'h', text: 'Trampas'},
            {t: 'ol', items: [
              '1 en el motor de la nevera.',
              '1 encima del horno. Quita los tornillos frontales para retirarlo.',
              '1 bajo el fregadero, en los latiguillos.',
              '1 bajo los muebles de la cocina, sacando los zócalos si se puede.',
              '1 en el baño: pedestal del lavabo o latiguillos.'
            ]}
          ],
          media: [
            {t: 'h', text: 'Infestación media'},
            {t: 'p', text: 'El mismo gel que en baja, y además baños y sala con la misma intensidad que la cocina. Habitaciones, en menor grado.'},
            {t: 'h', text: 'Trampas'},
            {t: 'ol', items: [
              '1 en el motor de la nevera.',
              '1 encima del horno (tornillos frontales fuera para retirarlo).',
              '1 bajo el fregadero, en los latiguillos.',
              '1 bajo los muebles de la cocina, zócalos fuera si se puede.',
              '1 en el baño: pedestal o latiguillos.',
              '1 en el salón.'
            ]},
            {t: 'callout', title: 'Si al inspeccionar ves que es alta', text: 'No la dejes en media. Vuelve al paso 3 si la cita era gel y no pueden salir 12 horas.'}
          ],
          alta: [
            {t: 'h', text: 'Infestación alta'},
            {t: 'p', text: 'Gel en toda la casa, sin dejar un sitio: cocina, baños, sala y habitaciones. En baños, habitaciones y sala la trampa va en menor grado que en cocina, pero el gel no se escatima.'},
            {t: 'callout', title: 'Líquido solo si pueden salir', items: [
              'Si pueden abandonar la vivienda: biocida líquido de la reseña (normalmente 1 monodosis de granulado por garrafa). Plazo de seguridad de 12 horas.',
              'Si no pueden salir: no fumigues con líquido. Cobra la alta, gel ahora, y oficina cita la fumigación (paso 3).',
              'Refléjalo en la reseña.'
            ]},
            {t: 'h', text: 'Trampas'},
            {t: 'ol', items: [
              '1 en el motor de la nevera.',
              '1 encima del horno.',
              '1 bajo el fregadero, en los latiguillos.',
              '1 bajo los muebles de la cocina, zócalos fuera si se puede.',
              '1 en el baño: pedestal o latiguillos.',
              '1 o 2 en el salón.',
              '1 por habitación.'
            ]}
          ]
        },
        after: [
          {t: 'h', text: 'Cómo quedan las trampas'},
          {t: 'photos', multi: true, items: [
            ph('img_04.jpg', 'Trampa de feromona en el motor de la nevera', 'Trampa detrás de la nevera (motor)'),
            ph('img_05.jpg', 'Trampa bajo el fregadero, en los latiguillos', 'Trampa bajo fregadero / latiguillos'),
            ph('img_10.jpg', 'Captura en una trampa de feromona', 'Ejemplo de captura en trampa'),
            ph('img_11.jpg', 'Trampa con varias cucarachas capturadas', 'Otra captura en trampa'),
            ph('img_12.jpg', 'Dos trampas con infestación alta', 'Infestación alta visible en trampas'),
            ph('img_13.jpg', 'Trampa llena de cucarachas', 'Trampa llena: infestación alta'),
            ph('img_14.jpg', 'Trampa saturada de cucarachas', 'Trampa saturada: infestación alta')
          ]},
          {t: 'note', text: 'Repasos: aplica según lo que te diga el cliente y, sobre todo, donde las está viendo. No hace falta gel o líquido en toda la casa en todos los repasos.'}
        ]
      },
      {
        short: 'Cierre',
        title: 'Cerrar la visita',
        summary: 'Contrato, cobro, pegatina, Google y reseña.',
        blocks: [
          {t: 'p', text: 'No salgas de la vivienda sin cerrar el papeleo. La reseña del calendario se hace antes de seguir la ruta.'},
          {t: 'checks', items: [
            {id: 'al-contrato', label: 'Contrato rellenado. Si la reseña trae una condición especial, va en el contrato.'},
            {id: 'al-cobro', label: 'Contrato cobrado.'},
            {id: 'al-pegatina', label: 'Pegatina de garantía en el cuadro de la luz.'},
            {id: 'al-google', label: 'Tarjeta de Google entregada, para la reseña.'},
            {id: 'al-resena', label: 'Reseña del calendario duplicada y escrita, antes de seguir la ruta.'}
          ]},
          {t: 'h', text: 'Qué anotar en la reseña'},
          {t: 'ul', items: [
            'Tratamiento realizado.',
            'Número de trampas colocadas.',
            'Mililitros de biocida usado.',
            'Contrato cobrado.',
            'Pegatina puesta.',
            'Tarjeta Google entregada.',
            'Otro: lo que hayas visto o hablado con el cliente.'
          ]},
          {t: 'photos', multi: true, items: [
            ph('img_06.jpg', 'Pegatina de garantía de Teneplagas en el cuadro de la luz', 'Pegatina de garantía en el cuadro'),
            ph('img_07.jpg', 'Contrato, tarjeta de Google y hoja de recomendaciones', 'Contrato, tarjeta Google y recomendaciones'),
            ph('img_09.jpg', 'Ejemplo de reseña escrita en el calendario después del tratamiento', 'Ejemplo de reseña hecha en el calendario')
          ]}
        ]
      }
    ]
  },
  {
    id: 'americana',
    group: 'plaga',
    status: 'texto',
    title: 'Cucaracha americana',
    latin: 'Periplaneta americana',
    summary: 'Fontanería, laca en tuberías, trampas, gel y fumigación si pueden salir.',
    source: 'protocolos-texto/cucaracha-americana.txt',
    products: [
      {name: 'Nupilac DC Green', dose: 'Listo al uso', note: 'Tuberías y arquetas'},
      {name: 'Ecorex Action Plus', dose: '75 ml / garrafa', note: 'Arquetas, césped o terraza'},
      {name: 'Massoside polvo', dose: 'Listo al uso', note: 'Tuberías o arquetas'},
      {name: 'Gel Max Force Prime', dose: 'Listo al uso', note: 'Interior, sitios calientes'},
      {name: 'Trampas Trap-A-Roach', dose: '3 a 5 hasta 100 m²', note: 'Feromonas'},
      {name: 'Adylac o Stop rastreros', dose: 'Listo al uso', note: 'Fumigación si abandonan la vivienda'}
    ],
    warnings: [
      {title: 'La laca lleva disolvente', text: 'Nupilac puede dañar pintura y madera. No fumigues tuberías a ciegas sobre acabados.'},
      {title: 'Fotos próximamente', text: 'El paso a paso ya está. Las fotos de este protocolo todavía no están en la app.'}
    ],
    steps: [
      {
        short: 'Hablar',
        title: 'Hablar con el cliente',
        summary: 'Que te oriente de dónde puede venir.',
        blocks: [
          {t: 'p', text: 'Habla con el cliente. Te dará pistas de por dónde entra o dónde se concentra la americana.'}
        ]
      },
      {
        short: 'Inspección',
        title: 'Inspeccionar y contrastar el grado',
        summary: 'Baja, media o alta, frente a la reseña.',
        blocks: [
          {t: 'p', text: 'Inspección visual. El importe de la reseña dice el grado previsto; confírmalo en la casa.'},
          {t: 'ul', items: [
            'Baja: solo en la cocina.',
            'Media: cocina, sala y baño.',
            'Alta: toda la casa.'
          ]}
        ]
      },
      {
        short: 'Fontanería',
        title: 'Revisar fontanería y sellar',
        summary: 'Huecos, tubos y grietas a tu alcance.',
        blocks: [
          {t: 'p', text: 'Revisa la fontanería de cocina, baños, solanas y patios interiores: tubos abiertos, tuberías mal selladas, grietas, hueco de la lavadora.'},
          {t: 'p', text: 'Sella con silicona lo que esté a tu alcance, para que no vuelvan a salir por ahí.'}
        ]
      },
      {
        short: 'Tuberías',
        title: 'Fumigar tuberías con laca',
        summary: 'Nupilac, con cuidado del disolvente.',
        blocks: [
          {t: 'p', text: 'Fumiga todas las tuberías de la vivienda con laca líquida. Lo habitual es Nupilac.'},
          {t: 'callout', title: 'Cuidado', text: 'La laca lleva disolvente y puede dañar pinturas o maderas. No manchees acabados.'}
        ]
      },
      {
        short: 'Trampas',
        title: 'Colocar trampas de feromona',
        summary: 'Entre 3 y 5 hasta 100 m².',
        blocks: [
          {t: 'p', text: 'En viviendas de hasta 100 m² suelen bastar de 3 a 5 trampas. Estos sitios no se saltan:'},
          {t: 'ul', items: [
            'Latiguillos del grifo del fregadero.',
            'Latiguillo del grifo del baño.',
            'Detrás de la nevera.',
            'Bajos de cocina, sacando el zócalo si se puede.',
            'Otro punto si la vivienda lo pide.'
          ]}
        ]
      },
      {
        short: 'Gel',
        title: 'Aplicar gel en sitios calientes',
        summary: 'Toda la casa, donde se refugian.',
        blocks: [
          {t: 'p', text: 'Gel en toda la casa, en los sitios más calientes: bisagras de cocina, debajo de la encimera, muebles, horno, marcos de puertas, nevera, baños, habitaciones, sala, comedor, muebles y cajones.'}
        ]
      },
      {
        short: 'Fumigar',
        title: 'Fumigar si pueden abandonar la vivienda',
        summary: 'Adylac o, si no hay, Stop rastreros.',
        blocks: [
          {t: 'p', text: 'Lo recomendable en este tratamiento es que el cliente salga. Si sale, fumiga toda la vivienda con Adylac Spray o, en última opción, Stop rastreros.'},
          {t: 'p', text: 'Así salen las que están escondidas. Huevos que eclosionen después quedan para el gel y las trampas.'},
          {t: 'callout', title: 'Si no pueden salir', text: 'No fuerces una fumigación con plazo de seguridad. Déjalo escrito y usa el tratamiento que sí se pueda hacer con gente dentro.'}
        ]
      },
      {
        short: 'Especiales',
        title: 'Terraza, jardín y arquetas',
        summary: 'Dos casos que se miran siempre.',
        blocks: [
          {t: 'callout', title: 'Terraza de picón, césped o jardín', text: 'Fumiga la zona con emulsión. Lo habitual: Ecorex, 75 ml por garrafa.'},
          {t: 'callout', title: 'Arquetas o sumideros', text: 'Revisa frente y laterales. Si hay arqueta por donde puedan pasar, fumígala con Nupilac o, si no, con Ecorex.'}
        ]
      },
      {
        short: 'Cierre',
        title: 'Contrato, cobro y reseña',
        summary: 'Pegatina, Google y calendario antes de la ruta.',
        blocks: [
          {t: 'ul', items: [
            'Contrato según modelo. Lo especial de la reseña se copia al contrato.',
            'Cobrar.',
            'Pegatina de garantía en el cuadro de la luz, con número de contrato y fecha.',
            'Tarjeta de Google.'
          ]},
          {t: 'p', text: 'Duplica la reseña del calendario y escribe la tuya antes de seguir la ruta: tratamiento, trampas, mililitros, contrato cobrado, pegatina con número y fecha, tarjeta Google, y cualquier otra cosa hablada o vista.'}
        ]
      }
    ]
  },
  {
    id: 'hormigas',
    group: 'plaga',
    status: 'texto',
    title: 'Hormigas',
    latin: 'Común y faraón',
    summary: 'Localizar el rastro, gel en interior y Ecorex si hay jardín.',
    source: 'protocolos-texto/hormigas.txt',
    products: [
      {name: 'Defens gel hormigas faraón', dose: 'Listo al uso', note: 'Faraón, más de interior o piso'},
      {name: 'Biogel u Optimus', dose: 'Listo al uso', note: 'Común, más de exterior o casa terrera'},
      {name: 'Advion', dose: 'Listo al uso', note: 'Sirve para las dos'},
      {name: 'Granulado hormigas', dose: 'Listo al uso', note: 'Según reseña'},
      {name: 'Ecorex Action Plus', dose: '75 ml / garrafa', note: 'Jardín o perímetro. 50 ml si la dosis lo indica así'}
    ],
    warnings: [
      {title: 'Máximo 3 visitas al año', text: '1 inicial y 2 refuerzos. El cliente pide el refuerzo a la empresa. No está incluido un cuarto servicio.'},
      {title: 'Fotos próximamente', text: 'Guía con el texto del protocolo. Sin fotos todavía.'}
    ],
    steps: [
      {
        short: 'Hablar',
        title: 'Hablar con el cliente',
        summary: 'Dónde está el foco y por dónde entran.',
        blocks: [
          {t: 'p', text: 'Pregunta dónde es más grave y por dónde cree que entran.'},
          {t: 'ul', items: [
            'Hormiga común: más habitual en exteriores o casas terreras.',
            'Hormiga faraón: más habitual en interiores o pisos.'
          ]}
        ]
      },
      {
        short: 'Inspección',
        title: 'Inspeccionar y buscar el nido',
        summary: 'Sigue el rastro si hace falta.',
        blocks: [
          {t: 'p', text: 'Inspecciona para localizar el nido o los nidos. Si no se ve, una dosis pequeña de biocida hace que coman y delaten el camino hacia el nido.'}
        ]
      },
      {
        short: 'Gel',
        title: 'Aplicar gel',
        summary: 'En el rastro y en los puntos de paso.',
        blocks: [
          {t: 'p', text: 'Gel en las zonas donde las viste y, además, en apliques de luz (enchufes e interruptores; mejor si quitas el embellecedor), marcos de puertas, zócalos, plantas y cocina en general.'},
          {t: 'ul', items: [
            'Faraón: en general Defens gel hormigas.',
            'Común: en general Optimus.',
            'Advion vale para las dos.'
          ]}
        ]
      },
      {
        short: 'Jardín',
        title: 'Jardín o perímetro, si toca',
        summary: 'Ecorex cuando el problema viene de fuera.',
        blocks: [
          {t: 'p', text: 'Solo si hay jardín y el problema es hormiga común: Ecorex, 75 ml por garrafa, en jardines, plantas y perímetro. Ecorex no afecta a las plantas.'},
          {t: 'note', text: 'En la ficha de dosis, el perímetro de hormigas figura a 50 ml por garrafa. Si la reseña marca una dosis, manda la reseña.'}
        ]
      },
      {
        short: 'Cierre',
        title: 'Contrato, cobro y reseña',
        summary: 'Tres visitas como máximo en el año.',
        blocks: [
          {t: 'callout', title: 'Límite del contrato', text: 'Las hormigas tienen un máximo de 3 visitas en el año: 1 inicial y 2 refuerzos. El cliente tiene que pedir el refuerzo a la empresa.'},
          {t: 'ul', items: [
            'Contrato, con lo especial de la reseña.',
            'Cobrar.',
            'Pegatina en el cuadro, con número de contrato y que es la primera aplicación.',
            'Tarjeta de Google.'
          ]},
          {t: 'p', text: 'Reseña antes de seguir la ruta: tratamiento, mililitros, contrato cobrado, pegatina, tarjeta Google y lo que hayas visto o hablado.'}
        ]
      }
    ]
  },
  {
    id: 'roedores',
    group: 'plaga',
    status: 'texto',
    title: 'Roedores',
    latin: 'Rata o ratón',
    summary: 'Portacebos. La puntual no lleva garantía; el mantenimiento se repone cada 3 meses.',
    source: 'protocolos-texto/roedores.txt',
    products: [
      {name: 'Rodenticida en bolsas de cereal', dose: 'Listo al uso', note: 'Arquetas, viviendas y edificios'},
      {name: 'Cebo en bloque', dose: 'Listo al uso', note: '2 bloques por portacebo en puntual'},
      {name: 'Cebo líquido', dose: 'Listo al uso', note: 'Solo si no comen el bloque'}
    ],
    warnings: [
      {title: 'La puntual no incluye reposición', text: 'Si hay que reponer cebo, se cobra aparte y se escribe en el contrato. El roedor muere a los 3 o 4 días de comer.'},
      {title: 'Fotos próximamente', text: 'Guía con el texto del protocolo. Sin fotos todavía.'}
    ],
    steps: [
      {
        short: 'Hablar',
        title: 'Hablar con el cliente',
        summary: 'Por dónde pasan y dónde los ve.',
        blocks: [
          {t: 'p', text: 'Que te diga por dónde entran y qué zona frecuentan.'}
        ]
      },
      {
        short: 'Inspección',
        title: 'Inspeccionar',
        summary: '¿Es un caso puntual o un problema habitual?',
        blocks: [
          {t: 'p', text: 'Mira si es algo puntual o un problema habitual. Lo habitual es más frecuente en viviendas de campo o rodeadas de solares y barrancos.'}
        ]
      },
      {
        short: 'Si la cazas',
        title: 'Si localizas y eliminas el ejemplar',
        summary: 'Dos portacebos de prevención. No hagas la desratización completa.',
        blocks: [
          {t: 'callout', title: 'No sigas al paso de desratización', text: 'Si localizas la rata o el ratón y lo eliminas, no hagas el tratamiento completo. Coloca 2 portacebos de prevención y pasa al cierre.'}
        ]
      },
      {
        short: 'Cebo',
        title: 'Desratización puntual o con mantenimiento',
        summary: 'Máximo 8 portacebos, o reposición cada 3 meses.',
        blocks: [
          {t: 'h', text: 'Puntual'},
          {t: 'ul', items: [
            'Máximo 8 portacebos.',
            'Dentro de cada uno: 2 cebos en bloque y 1 de cereal.',
            'En las zonas que dijo el cliente o donde tú hayas visto actividad.',
            'Mueren a los 3 o 4 días de comer.',
            'La reposición no entra en el contrato: se abona aparte y se escribe.'
          ]},
          {t: 'h', text: 'Con contrato de mantenimiento'},
          {t: 'p', text: 'Igual que la puntual, con reposición de los portacebos cada 3 meses.'}
        ]
      },
      {
        short: 'Cierre',
        title: 'Contrato, cobro y reseña',
        summary: 'La puntual dura lo que dure el cebo.',
        blocks: [
          {t: 'p', text: 'Contrato con lo especial de la reseña. En una puntual no hay garantía: dura hasta que se acabe el cebo, según la población.'},
          {t: 'ul', items: [
            'Cobrar.',
            'Pegatina en el cuadro, con número de contrato.',
            'Tarjeta de Google.'
          ]},
          {t: 'p', text: 'Reseña antes de seguir la ruta: tratamiento, cebos en bloque usados, contrato cobrado, pegatina, tarjeta Google y lo demás que quieras dejar anotado.'}
        ]
      }
    ]
  },
  {
    id: 'dosis',
    group: 'consulta',
    status: 'texto',
    title: 'Dosis y productos',
    latin: 'Ficha rápida',
    summary: 'Qué producto y qué dosis según la plaga.',
    source: 'protocolos-texto/dosis-productos.txt',
    page: [
      {t: 'p', text: 'Dosis de la ficha. Si la reseña marca otra cosa, manda la reseña.'},
      {t: 'h', text: 'Cucaracha americana'},
      {t: 'ul', items: [
        'Tuberías o arquetas: Nupilac DC Green, listo al uso.',
        'Ecorex Action Plus: 75 ml en 1 garrafa.',
        'Massoside polvo, listo al uso.',
        'Pintura insecticida: 50 % para pulverizar o 10 % para brocha.',
        'Adylac Spray y Stop rastreros, listos al uso.',
        'Césped o suelo de terraza: Ecorex 75 ml en 1 garrafa.',
        'Interior: gel Max Force Prime, trampas Trap-A-Roach, Adylac o Stop rastreros.'
      ]},
      {t: 'h', text: 'Cucaracha alemana · vivienda'},
      {t: 'ul', items: [
        'Gel: Max Force Prime o Advion, listo al uso.',
        'Trampas Trap-A-Roach.',
        'Actibiol: 50 ml en 1 garrafa, infestación baja.',
        'Granulado: 30 g en 1 garrafa, o 1 monodosis, en media y alta.'
      ]},
      {t: 'h', text: 'Cucaracha alemana · local'},
      {t: 'callout', title: 'Gel solo si lo dice la reseña', text: 'En local no se aplica gel por defecto.'},
      {t: 'ul', items: [
        'Actibiol: 50 ml en 1 garrafa, infestación baja.',
        'Granulado: 30 g en 1 garrafa, o 1 monodosis, en media y alta.',
        'Trampas Trap-A-Roach.',
        'Adylac Spray y Stop rastreros, listos al uso.'
      ]},
      {t: 'h', text: 'Hormigas'},
      {t: 'ul', items: [
        'Gel: Defens (faraón) o Biogel (común), listo al uso.',
        'Granulado hormigas, listo al uso.',
        'Ecorex: 50 ml en 1 garrafa en jardines o perímetro.'
      ]},
      {t: 'h', text: 'Rata o ratón'},
      {t: 'ul', items: [
        'Arquetas: rodenticida en bolsas de cereal.',
        'Vivienda o edificio: cereal, cebo en bloque y, si no comen el bloque, cebo líquido.'
      ]},
      {t: 'h', text: 'Chinches'},
      {t: 'ul', items: [
        'Nupilac DC Green, listo al uso.',
        'Ecorex: 150 ml en 1 garrafa.',
        'Adylac, Stop rastreros y bote de humo (mecha encendida, recinto cerrado).'
      ]},
      {t: 'h', text: 'Piojillos de paloma, ácaros y arañas'},
      {t: 'ul', items: [
        'Ecorex: 75 ml en 1 garrafa.',
        'Adylac y Stop rastreros, listos al uso.'
      ]},
      {t: 'h', text: 'Para qué es cada familia'},
      {t: 'ul', items: [
        'Cebo en bloque y cereales: roedores.',
        'Gel de hormiga faraón y gel de cucarachas: cada uno el suyo.',
        'Ecorex diluido en agua: americana, chinches, arañas, piojillos de paloma y ácaros. Apto sobre plantas.',
        'Trampas de feromona: americana y alemana.',
        'Líquido con disolvente, listo al uso: cucaracha americana.'
      ]}
    ]
  },
  {
    id: 'horario',
    group: 'consulta',
    status: 'texto',
    title: 'Fuera de horario',
    latin: 'Después de las 17:30',
    summary: 'Cuando ya no queda nadie en oficina.',
    source: 'protocolos-texto/fuera-horario.txt',
    page: [
      {t: 'p', text: 'A partir de las 17:30, si surge una duda de ruta, documentación, teléfono, tratamiento o producto:'},
      {t: 'ol', items: [
        'Audio o texto al grupo de fumigar de WhatsApp, para que puedan responder Oliver o Guillermo.',
        'Si a los 15 minutos no hay respuesta, sigue con el criterio que creas más conveniente. Abajo van los casos habituales.'
      ]},
      {t: 'h', text: 'No quieren firmar y el encargado no está'},
      {t: 'p', text: 'Se cobra la factura y se hace un parte diciendo que no han querido firmar el contrato. Se anota en la reseña. Si hay que cobrar y no cobran, no se hace el trabajo pactado, salvo que la reseña diga lo contrario.'},
      {t: 'h', text: 'El local no está preparado'},
      {t: 'p', text: 'Si hay personal de cocina o camareros, diles qué estorba para fumigar y que lo retiren, o que al día siguiente tendrán que limpiar. Fumiga como si los objetos ya estuvieran retirados.'},
      {t: 'h', text: 'No hay nadie'},
      {t: 'p', text: 'Llama y escribe por WhatsApp al contacto de la reseña. Espera 15 minutos. Si no contestan, avisa en el grupo de fumigar por si Oliver o Guillermo pueden localizarlos. Si nadie responde, sigue la ruta y déjalo escrito en el grupo.'},
      {t: 'h', text: 'No estoy seguro del producto'},
      {t: 'ul', items: [
        'Inspecciona y saca la plaga real.',
        'Sigue el primer paso del protocolo de esa plaga.',
        'Si no hay respuesta, busca tratamientos anteriores en el calendario.',
        'Si aun así no se resuelve, aplica el mejor tratamiento según tu criterio y anótalo.',
        'Puedes mirar Dosis y productos en esta app.'
      ]},
      {t: 'h', text: 'No llevo el producto de siempre'},
      {t: 'p', text: 'No debería pasar: el técnico sale con los biocidas y las herramientas. Si pasa, termina el trabajo con lo que tengas.'},
      {t: 'h', text: 'No pueden abandonar la vivienda'},
      {t: 'p', text: 'Tratamiento con productos sin plazo de seguridad. En el contrato, que si hace falta otro servicio tendrán que salir las horas necesarias.'},
      {t: 'h', text: 'El coche se ha quedado tirado'},
      {t: 'p', text: 'Lleva la documentación del seguro y el teléfono de la grúa. El coche va al Taller Híbrid, en Guargacho, calle Hipotenusa. Avisa en el grupo de fumigar.'},
      {t: 'h', text: 'Hace falta dinero para millo u otro material'},
      {t: 'p', text: 'Pide el dinero a quien esté en oficina, con la solicitud de dinero para material. Trae el cambio y la factura a nombre de Teneplagas SL, CIF B76725753.'}
    ]
  }
];

const byId = id => GUIAS.find(g => g.id === id);
let degree = sessionStorage.getItem('ta-grado') || 'baja';
let gradoBlocks = null;

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[c]));
}

function renderBlocks(blocks) {
  if (!blocks) return '';
  return blocks.map(b => {
    if (b.t === 'p') return `<p>${esc(b.text)}</p>`;
    if (b.t === 'h') return `<h2>${esc(b.text)}</h2>`;
    if (b.t === 'note') return `<p class="note">${esc(b.text)}</p>`;
    if (b.t === 'ul') return `<ul>${b.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>`;
    if (b.t === 'ol') return `<ol>${b.items.map(i => `<li>${esc(i)}</li>`).join('')}</ol>`;
    if (b.t === 'callout') {
      const list = b.items ? `<ul>${b.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : '';
      const text = b.text ? `<p>${esc(b.text)}</p>` : '';
      return `<div class="callout"><strong>${esc(b.title || 'Importante')}</strong>${text}${list}</div>`;
    }
    if (b.t === 'photos') return renderPhotos(b.items, b.multi);
    if (b.t === 'checks') {
      return `<div class="card">${b.items.map(i =>
        `<label class="chk"><input type="checkbox" data-check="${esc(i.id)}"> <span>${esc(i.label)}</span></label>`
      ).join('')}</div>`;
    }
    return '';
  }).join('');
}

function renderPhotos(items, multi) {
  const cls = multi || items.length > 1 ? 'shots multi' : 'shots';
  return `<div class="${cls}">${items.map(p =>
    `<figure><img src="${esc(p.src)}" alt="${esc(p.alt)}" loading="lazy"><figcaption>${esc(p.cap)}</figcaption></figure>`
  ).join('')}</div>`;
}

function renderProducts(list) {
  if (!list || !list.length) return '';
  return `<div class="card"><h3>Productos</h3>${list.map(p =>
    `<div class="prod"><div><b>${esc(p.name)}</b><small>${esc(p.note || '')}</small></div><div class="dose">${esc(p.dose)}</div></div>`
  ).join('')}</div>`;
}

function renderWarnings(list) {
  if (!list) return '';
  return list.map(w => {
    const items = w.items ? `<ul>${w.items.map(i => `<li>${esc(i)}</li>`).join('')}</ul>` : '';
    const text = w.text ? `<p>${esc(w.text)}</p>` : '';
    return `<div class="callout"><strong>${esc(w.title)}</strong>${text}${items}</div>`;
  }).join('');
}

function card(g) {
  const pill = g.status === 'fotos'
    ? '<span class="pill on">Con fotos</span>'
    : '<span class="pill">Texto</span>';
  return `<button type="button" class="card" data-go="#/plaga/${g.id}">
    <div class="cardtop">${pill}<span class="chev">›</span></div>
    <h2>${esc(g.title)}</h2>
    <p>${esc(g.latin)} · ${esc(g.summary)}</p>
  </button>`;
}

function route() {
  const parts = (location.hash.replace(/^#/, '') || '/').split('/').filter(Boolean);
  if (!parts.length) return {name: 'home'};
  if (parts[0] === 'guias') return {name: 'guias'};
  if (parts[0] === 'info') return {name: 'info'};
  if (parts[0] === 'plaga' && parts[1]) {
    const step = parts[2] ? parseInt(parts[2], 10) : 0;
    return {name: 'plaga', id: parts[1], step: Number.isFinite(step) ? step : 0};
  }
  return {name: 'home'};
}

function fileBanner() {
  if (location.protocol !== 'file:') return '';
  return '<div class="filewarn"><b>Ábrela con un servidor.</b> Como archivo suelto no se instala ni carga el modo app. En la carpeta del proyecto: <b>python3 -m http.server 8080</b></div>';
}

function renderHome() {
  const plagas = GUIAS.filter(g => g.group === 'plaga');
  return `${fileBanner()}
    <section class="hero">
      <img src="logo.png" alt="">
      <h1>TEAYUDA</h1>
      <p>Guías de campo para técnicos</p>
    </section>
    <p class="kicker">Plagas</p>
    ${plagas.map(card).join('')}
    <p class="note">Dosis y fuera de horario están en Guías. La cucaracha alemana es la guía con fotos.</p>`;
}

function renderGuias() {
  const plagas = GUIAS.filter(g => g.group === 'plaga');
  const otras = GUIAS.filter(g => g.group === 'consulta');
  return `<h1>Guías</h1>
    <p class="muted">Protocolos de vivienda y dos consultas rápidas.</p>
    <h2>Plagas</h2>
    ${plagas.map(card).join('')}
    <h2>Consulta</h2>
    ${otras.map(card).join('')}`;
}

function renderInfo() {
  const upd = window.updCard ? window.updCard() : '';
  return `<h1>Info</h1>
    <div class="card">
      <h3>Cómo se usa en ruta</h3>
      <p>Abre la plaga, entra en el paso y sigue el texto. En alemana, las fotos son las del protocolo.</p>
      <p>Oficina, de 9:00 a 17:00. A partir de las 17:30 usa Fuera de horario.</p>
    </div>
    <div class="card">
      <h3>De dónde sale</h3>
      <p>Los protocolos viven en <b>protocolos-texto/</b>. Esta app los presenta para consultarlos en el móvil. Cucaracha alemana validada en octubre de 2026.</p>
      <p class="note">Americana, hormigas y roedores están en texto. Las fotos de esas guías van después.</p>
    </div>
    <div class="card">
      <h3>Instalar en el móvil</h3>
      <p>Hace falta abrirla por HTTPS o desde un servidor, no como archivo.</p>
      <ul>
        <li>Android (Chrome): menú → Añadir a pantalla de inicio, o Instalar aplicación.</li>
        <li>iPhone (Safari): Compartir → Añadir a pantalla de inicio.</li>
      </ul>
      <p class="note">Queda con el icono de Teneplagas y se abre a pantalla completa.</p>
    </div>
    ${upd}`;
}

function renderDetail(g) {
  if (g.page) {
    return `<p class="kicker">${esc(g.latin)}</p><h1>${esc(g.title)}</h1>
      ${renderWarnings(g.warnings)}
      <div class="card">${renderBlocks(g.page)}</div>
      <p class="note">Fuente: ${esc(g.source)}</p>`;
  }
  const steps = g.steps.map((s, i) =>
    `<button type="button" class="step" data-go="#/plaga/${g.id}/${i + 1}"><span class="num">${i + 1}</span><span><b>${esc(s.title)}</b><span>${esc(s.summary)}</span></span></button>`
  ).join('');
  const portada = g.id === 'alemana'
    ? renderPhotos([ph('img_01.jpg', 'Ciclo de la cucaracha alemana, de ninfa a adulto', 'Identificar: ninfa y adulto')])
    : '';
  return `${portada}
    <p class="kicker">${esc(g.latin)}</p>
    <h1>${esc(g.title)}</h1>
    <p>${esc(g.summary)}</p>
    <button type="button" class="go" data-go="#/plaga/${g.id}/1">Empezar por el paso 1</button>
    ${renderWarnings(g.warnings)}
    ${renderProducts(g.products)}
    <h2>Pasos</h2>
    ${steps}
    <p class="note">Fuente: ${esc(g.source)}</p>`;
}

function renderStep(g, n) {
  const s = g.steps[n - 1];
  if (!s) return renderDetail(g);
  gradoBlocks = s.degrees || null;
  const chips = g.steps.map((st, i) =>
    `<button type="button" class="${i + 1 === n ? 'on' : ''}" data-go="#/plaga/${g.id}/${i + 1}">${i + 1} ${esc(st.short)}</button>`
  ).join('');
  const grados = s.degrees ? `<div class="seg" role="group" aria-label="Grado de infestación">
      ${[['baja', 'Baja'], ['media', 'Media'], ['alta', 'Alta']].map(([k, lab]) =>
        `<button type="button" data-grado="${k}" class="${degree === k ? 'on' : ''}">${lab}</button>`
      ).join('')}
    </div><div id="grado">${renderBlocks(s.degrees[degree] || s.degrees.baja)}</div>` : '';
  return `<nav class="crumbs">${chips}</nav>
    <p class="kicker">Paso ${n} de ${g.steps.length}</p>
    <h1>${esc(s.title)}</h1>
    ${renderBlocks(s.blocks)}
    ${grados}
    ${renderBlocks(s.after)}`;
}

function pagerHtml(g, n) {
  const prev = n > 1
    ? `<button type="button" class="prev" data-go="#/plaga/${g.id}/${n - 1}">◀ Anterior</button>`
    : '<button type="button" class="prev" disabled>◀ Anterior</button>';
  const next = n < g.steps.length
    ? `<button type="button" class="next" data-go="#/plaga/${g.id}/${n + 1}">Siguiente ▶</button>`
    : `<button type="button" class="next" data-go="#/plaga/${g.id}">Volver a la guía</button>`;
  return prev + next;
}

function render() {
  const r = route();
  const view = document.getElementById('view');
  const back = document.getElementById('back');
  const sub = document.getElementById('sub');
  let tab = 'home';
  let subtitle = 'TeAyuda · técnicos';
  let showBack = false;
  let html = '';

  if (r.name === 'guias') {
    tab = 'guias';
    subtitle = 'Guías de campo';
    html = renderGuias();
    document.title = 'Guías · TeAyuda';
  } else if (r.name === 'info') {
    tab = 'info';
    subtitle = 'Información';
    html = renderInfo();
    document.title = 'Info · TeAyuda';
  } else if (r.name === 'plaga') {
    const g = byId(r.id);
    tab = sessionStorage.getItem('ta-from') === 'guias' ? 'guias' : 'home';
    showBack = true;
    if (!g) {
      subtitle = 'Guía';
      html = `<div class="card"><h1>Esa guía no está</h1><button type="button" class="go" data-go="#/">Ir al inicio</button></div>`;
    } else if (r.step > 0 && g.steps && r.step <= g.steps.length) {
      subtitle = `${g.title} · ${r.step}/${g.steps.length}`;
      html = renderStep(g, r.step);
      document.title = `${g.title} · paso ${r.step}`;
    } else {
      subtitle = g.title;
      html = renderDetail(g);
      document.title = `${g.title} · TeAyuda`;
    }
  } else {
    html = renderHome();
    document.title = 'TeAyuda · Teneplagas';
  }

  const onStep = r.name === 'plaga' && byId(r.id) && byId(r.id).steps && r.step > 0 && r.step <= byId(r.id).steps.length;
  const pager = document.getElementById('pager');
  if (onStep) {
    pager.hidden = false;
    pager.innerHTML = pagerHtml(byId(r.id), r.step);
    document.body.classList.add('stepping');
  } else {
    pager.hidden = true;
    pager.innerHTML = '';
    document.body.classList.remove('stepping');
  }

  view.innerHTML = html;
  sub.textContent = subtitle;
  back.hidden = !showBack;
  document.querySelectorAll('#tabs button').forEach(b => {
    const on = b.dataset.tab === tab;
    b.classList.toggle('on', on);
    if (on) b.setAttribute('aria-current', 'page');
    else b.removeAttribute('aria-current');
  });
  bind(view);
  window.scrollTo(0, 0);
}

function bind(view) {
  view.querySelectorAll('[data-check]').forEach(el => {
    const k = 'ta-check-' + el.dataset.check;
    el.checked = sessionStorage.getItem(k) === '1';
    el.addEventListener('change', () => sessionStorage.setItem(k, el.checked ? '1' : '0'));
  });
  view.querySelectorAll('[data-grado]').forEach(btn => {
    btn.addEventListener('click', () => {
      degree = btn.dataset.grado;
      sessionStorage.setItem('ta-grado', degree);
      view.querySelectorAll('[data-grado]').forEach(b => b.classList.toggle('on', b === btn));
      const box = view.querySelector('#grado');
      if (box && gradoBlocks) box.innerHTML = renderBlocks(gradoBlocks[degree] || gradoBlocks.baja);
    });
  });
}

function openLightbox(src, alt) {
  const d = document.createElement('div');
  d.className = 'lightbox';
  d.innerHTML = `<button type="button" class="lbx" aria-label="Cerrar">✕</button><img src="${esc(src)}" alt="${esc(alt)}">`;
  d.addEventListener('click', () => d.remove());
  document.body.appendChild(d);
}

document.addEventListener('click', e => {
  const go = e.target.closest('[data-go]');
  if (go) {
    const r = route();
    if (r.name === 'home' || r.name === 'guias') sessionStorage.setItem('ta-from', r.name === 'home' ? 'home' : 'guias');
    location.hash = go.dataset.go;
    return;
  }
  const fig = e.target.closest('#view .shots figure');
  if (fig) {
    const img = fig.querySelector('img');
    if (img) openLightbox(img.getAttribute('src'), img.alt);
  }
});

document.getElementById('tabs').addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;
  const tab = b.dataset.tab;
  sessionStorage.setItem('ta-from', tab === 'guias' ? 'guias' : 'home');
  location.hash = tab === 'home' ? '#/' : '#/' + tab;
});

document.getElementById('back').addEventListener('click', () => {
  const r = route();
  if (r.name === 'plaga' && r.step > 0) location.hash = '#/plaga/' + r.id;
  else if (sessionStorage.getItem('ta-from') === 'guias') location.hash = '#/guias';
  else location.hash = '#/';
});

addEventListener('hashchange', render);
addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const lb = document.querySelector('.lightbox');
    if (lb) lb.remove();
  }
});

window.toast = function (m) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = m;
  t.hidden = false;
  clearTimeout(t._t);
  t._t = setTimeout(() => { t.hidden = true; }, 2400);
};

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
  addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  });
}

render();
