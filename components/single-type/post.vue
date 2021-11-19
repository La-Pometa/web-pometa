<template>
  <section id="single-post" class="post-container margins msm:mt-14 space-y-10">
    <a
      class="flex items-center no-highlight cursor-pointer"
      @click="$router.go(-1) ? $router.go(-1) : localePath('/blog')"
      ><fa class="mr-5 max-h-3" icon="arrow-left" /> {{ $t('goBack') }}</a
    >
    <div class="single-post">
      <div class="header">
        <parallax :section-height="'100%'">
          <responsive-image
            :image-data="post.featured_source"
            :lazy="false"
            class="featured"
          ></responsive-image>
        </parallax>
      </div>

      <div>
        <the-content
          class="post-content"
          :render="post.title.rendered"
          tag="h1"
        />
        <div
          class="
            text-opacity-70
            dark:text-opacity-70
            text-main-dark
            dark:text-white
          "
        >
          <span v-for="(tax, index) in post.tax_info" :key="tax.term_id"
            ><span v-if="index != 0">, </span>{{ tax.name }}</span
          >
          <span v-if="post.tax_info.length > 0"> - </span>
          <span>{{ post.date | formatDate }}</span>
        </div>
      </div>
      <div class="vc_row wpb_row vc_row-fluid">
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <p>
                    En el mundo actual en el que vivimos es imprescindible
                    disponer de una página web que sirva como escaparate del
                    producto o servicio que ofrece tu empresa, ya que, como bien
                    dice nuestro claim,
                    <strong>“Si no estás, no te ven”.</strong>
                  </p>
                  <p>
                    Este hecho implica que haya una gran cantidad de páginas web
                    que ofrecen un producto similar y si tu página web no está
                    bien optimizada, es decir, no va rápido, implicará que sufra
                    un gran abandono por parte de los clientes.
                  </p>
                  <p>
                    <strong>Los internautas actuales no tienen paciencia</strong
                    >, y si tú no lo puedes
                    <strong>ofrecer contenido rápidamente</strong>, abandonaran
                    tu página web y visitaran otra.
                  </p>
                  <p>
                    Desde Pometa tenemos muy claro la necesidad de disponer de
                    una web optimizada y hoy os traemos
                    <strong
                      >seis pequeños trucos que utilizamos en Pometa para
                      disponer de una web con una gran velocidad.</strong
                    >
                  </p>
                </div>
              </div>

              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <ol start="1">
                    <li>
                      <h3>Optimización imágenes</h3>
                    </li>
                  </ol>
                </div>
              </div>

              <div class="wpb_single_image wpb_content_element vc_align_left">
                <figure class="wpb_wrapper vc_figure">
                  <div class="vc_single_image-wrapper vc_box_border_grey">
                    <responsive-image
                      class=""
                      size="full"
                      :lazy="true"
                      :image-data="{
                        alt_text:
                          'Matriuskas diferentes tama\u00f1os Imagen Optimizaci\u00f3n Web Pometa Gr\u00e0fica',
                        title:
                          'Matriuskas diferentes tama\u00f1os Imagen Optimizaci\u00f3n Web Pometa Gr\u00e0fica',
                        srcset_img:
                          'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/.\/.webp 0w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/.\/ 0w',
                        srcset: {
                          full_webp: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/.\/.webp',
                            media: '',
                            mime_type: 'image\/webp',
                            width: 0,
                            height: 0,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/.\/.webp 0w',
                          },
                          full: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/.\/',
                            media: '',
                            mime_type: 'image\/\/',
                            width: 0,
                            height: 0,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/.\/ 0w',
                          },
                        },
                        pometaImages: 1637313411,
                      }"
                    ></responsive-image>
                  </div>
                </figure>
              </div>

              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <p>
                    Es necesario optimizar las imágenes porque como más pese,
                    más lenta se cargará la página web. Por lo tanto,
                    <strong
                      >como más imágenes sin optimizar, más tardará nuestra web
                      en cargarse.</strong
                    >
                    La solución pasa por optimizar la imagen, tanto en tamaño
                    como en calidad. La primera consiste en dotar a la imagen
                    del tamaño necesario, ya que si le damos un
                    <strong
                      >tamaño muy grande pero innecesario se nos ralentizará la
                      página web.</strong
                    >
                    La segunda es tan sencilla como utilizar<strong>
                      formatos</strong
                    >
                    que, directamente, están más <strong>optimizados</strong>,
                    como son JPG o PNG. Otro pequeño truco para optimizar las
                    imágenes es mediante la opción de<strong>
                      “Guardar para Web” que ofrece Photoshop</strong
                    >. Esta opción elimina los metadatos y los comentarios que
                    pueda tener la imagen para bajar su peso, además de
                    optimizar la compresión.
                  </p>
                </div>
              </div>

              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <ol start="2">
                    <li>
                      <h3>Minificar CSS y JavaScript</h3>
                    </li>
                  </ol>
                </div>
              </div>

              <div class="wpb_single_image wpb_content_element vc_align_left">
                <figure class="wpb_wrapper vc_figure">
                  <div class="vc_single_image-wrapper vc_box_border_grey">
                    <responsive-image
                      class=""
                      size="full"
                      :lazy="true"
                      :image-data="{
                        width: 700,
                        height: 358,
                        file: '2021\/11\/programacion-web-optimizacion-web-pometa-grafica.jpg',
                        alt_text:
                          'Programaci\u00f3n Web Ooptimizaci\u00f3n Web Pometa Gr\u00e0fica',
                        title:
                          'Programaci\u00f3n Web Ooptimizaci\u00f3n Web Pometa Gr\u00e0fica',
                        srcset_img:
                          'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica.jpg.webp 700w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica.jpg 700w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica-300x153.jpg.webp 300w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica-300x153.jpg 300w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica-140x72.jpg.webp 140w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica-140x72.jpg 140w',
                        srcset: {
                          full_webp: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica.jpg.webp',
                            media: '(min-width:300px)',
                            mime_type: 'image\/webp',
                            width: 700,
                            height: 358,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica.jpg.webp 700w',
                          },
                          full: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica.jpg',
                            media: '(min-width:300px)',
                            mime_type: 'image\/jpg',
                            width: 700,
                            height: 358,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica.jpg 700w',
                          },
                          medium_webp: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica-300x153.jpg.webp',
                            media: '(min-width:150px) and (max-width:300px)',
                            mime_type: 'image\/webp',
                            width: 300,
                            height: 153,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica-300x153.jpg.webp 300w',
                          },
                          medium: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica-300x153.jpg',
                            media: '(min-width:150px) and (max-width:300px)',
                            mime_type: 'image\/jpeg',
                            width: 300,
                            height: 153,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica-300x153.jpg 300w',
                          },
                          mini_webp: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica-140x72.jpg.webp',
                            media: '(max-width:140px)',
                            mime_type: 'image\/webp',
                            width: 140,
                            height: 72,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica-140x72.jpg.webp 140w',
                          },
                          mini: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica-140x72.jpg',
                            media: '(max-width:140px)',
                            mime_type: 'image\/jpeg',
                            width: 140,
                            height: 72,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/programacion-web-optimizacion-web-pometa-grafica-140x72.jpg 140w',
                          },
                        },
                        pometaImages: 1637313411,
                      }"
                    ></responsive-image>
                  </div>
                </figure>
              </div>

              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <p>
                    Minificar quiere decir
                    <strong
                      >compactar un archivo y eliminar todos aquellos caracteres
                      innecesarios</strong
                    >
                    pero sin perder la funcionalidad. Así pues, y mediante la
                    eliminación de todos los espacios, saltos de línea,
                    comentarios… consigues una
                    <strong
                      >reducción importante de tamaño de archivos o peso</strong
                    >. En este sentido, se puede minificar tanto el CSS
                    (archivos de estilo) como el JavaScript (archivos de
                    funcionalidad).
                  </p>
                </div>
              </div>

              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <ol start="3">
                    <li>
                      <h3>Especificar caché</h3>
                    </li>
                  </ol>
                </div>
              </div>

              <div class="wpb_single_image wpb_content_element vc_align_left">
                <figure class="wpb_wrapper vc_figure">
                  <div class="vc_single_image-wrapper vc_box_border_grey">
                    <responsive-image
                      class=""
                      size="full"
                      :lazy="true"
                      :image-data="{
                        width: 700,
                        height: 358,
                        file: '2021\/11\/reloj-arena-optimizacion-web-pometa-grafica.jpg',
                        alt_text:
                          'Reloj de Arena Optimizaci\u00f3n Web Pometa Gr\u00e0fica',
                        title:
                          'Reloj de Arena Optimizaci\u00f3n Web Pometa Gr\u00e0fica',
                        srcset_img:
                          'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica.jpg.webp 700w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica.jpg 700w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica-300x153.jpg.webp 300w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica-300x153.jpg 300w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica-140x72.jpg.webp 140w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica-140x72.jpg 140w',
                        srcset: {
                          full_webp: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica.jpg.webp',
                            media: '(min-width:300px)',
                            mime_type: 'image\/webp',
                            width: 700,
                            height: 358,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica.jpg.webp 700w',
                          },
                          full: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica.jpg',
                            media: '(min-width:300px)',
                            mime_type: 'image\/jpg',
                            width: 700,
                            height: 358,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica.jpg 700w',
                          },
                          medium_webp: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica-300x153.jpg.webp',
                            media: '(min-width:150px) and (max-width:300px)',
                            mime_type: 'image\/webp',
                            width: 300,
                            height: 153,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica-300x153.jpg.webp 300w',
                          },
                          medium: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica-300x153.jpg',
                            media: '(min-width:150px) and (max-width:300px)',
                            mime_type: 'image\/jpeg',
                            width: 300,
                            height: 153,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica-300x153.jpg 300w',
                          },
                          mini_webp: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica-140x72.jpg.webp',
                            media: '(max-width:140px)',
                            mime_type: 'image\/webp',
                            width: 140,
                            height: 72,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica-140x72.jpg.webp 140w',
                          },
                          mini: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica-140x72.jpg',
                            media: '(max-width:140px)',
                            mime_type: 'image\/jpeg',
                            width: 140,
                            height: 72,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/reloj-arena-optimizacion-web-pometa-grafica-140x72.jpg 140w',
                          },
                        },
                        pometaImages: 1637313411,
                      }"
                    ></responsive-image>
                  </div>
                </figure>
              </div>

              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <p>
                    <strong
                      >El caché puede ahorrar al usuario el tiempo de
                      carga</strong
                    >
                    si visita en más de una ocasión la página web, ya que la
                    información ha sido almacenada. Puedes determinar cada
                    cuanto se tiene que actualizar el caché para que las
                    personas que visitan la página no tengan que estar
                    constantemente descargándose nuevo contenido de la web y
                    actualizándola. De esta forma, cuando una persona visita la
                    página web en diversas ocasiones accederán a esta
                    rápidamente gracias a tener el
                    <strong>contenido almacenado.</strong>
                  </p>
                </div>
              </div>

              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <ol start="4">
                    <li>
                      <h3>Habilitar la compresión</h3>
                    </li>
                  </ol>
                </div>
              </div>

              <div class="wpb_single_image wpb_content_element vc_align_left">
                <figure class="wpb_wrapper vc_figure">
                  <div class="vc_single_image-wrapper vc_box_border_grey">
                    <responsive-image
                      class=""
                      size="full"
                      :lazy="true"
                      :image-data="{
                        width: 700,
                        height: 358,
                        file: '2021\/11\/actualizar-recargar-optimizacion-web-pometa-grafica.gif',
                        alt_text:
                          'Actualizar y Recargar Optimizaci\u00f3n Web Pometa Gr\u00e0fica',
                        title:
                          'Actualizar y Recargar Optimizaci\u00f3n Web Pometa Gr\u00e0fica',
                        srcset_img:
                          'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/actualizar-recargar-optimizacion-web-pometa-grafica.gif.webp 700w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/actualizar-recargar-optimizacion-web-pometa-grafica.gif 700w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/actualizar-recargar-optimizacion-web-pometa-grafica-300x153.gif 300w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/actualizar-recargar-optimizacion-web-pometa-grafica-140x72.gif 140w',
                        srcset: {
                          full_webp: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/actualizar-recargar-optimizacion-web-pometa-grafica.gif.webp',
                            media: '(min-width:300px)',
                            mime_type: 'image\/webp',
                            width: 700,
                            height: 358,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/actualizar-recargar-optimizacion-web-pometa-grafica.gif.webp 700w',
                          },
                          full: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/actualizar-recargar-optimizacion-web-pometa-grafica.gif',
                            media: '(min-width:300px)',
                            mime_type: 'image\/gif',
                            width: 700,
                            height: 358,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/actualizar-recargar-optimizacion-web-pometa-grafica.gif 700w',
                          },
                          medium: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/actualizar-recargar-optimizacion-web-pometa-grafica-300x153.gif',
                            media: '(min-width:150px) and (max-width:300px)',
                            mime_type: 'image\/gif',
                            width: 300,
                            height: 153,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/actualizar-recargar-optimizacion-web-pometa-grafica-300x153.gif 300w',
                          },
                          mini: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/actualizar-recargar-optimizacion-web-pometa-grafica-140x72.gif',
                            media: '(max-width:140px)',
                            mime_type: 'image\/gif',
                            width: 140,
                            height: 72,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/actualizar-recargar-optimizacion-web-pometa-grafica-140x72.gif 140w',
                          },
                        },
                        pometaImages: 1637313411,
                      }"
                    ></responsive-image>
                  </div>
                </figure>
              </div>

              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <p>
                    GZIP es un formato de compresión de archivos que implica que
                    los contenidos puedan ser
                    <strong>comprimidos antes de ser enviados</strong>
                    <strong>al navegador</strong> del visitante y, por lo tanto,
                    que la web cargue más rápido. Cabe decir que la compresión
                    GZIP nos permite la compresión de archivos con texto de base
                    como HTML, JavaScript y CSS. Esta compresión es muy efectiva
                    y, además, es
                    <strong
                      >compatible con la mayoría de navegadores actuales.
                    </strong>
                  </p>
                </div>
              </div>

              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <ol start="5">
                    <li>
                      <h3>Reducir el tiempo de respuesta del servidor</h3>
                    </li>
                  </ol>
                </div>
              </div>

              <div class="wpb_single_image wpb_content_element vc_align_left">
                <figure class="wpb_wrapper vc_figure">
                  <div class="vc_single_image-wrapper vc_box_border_grey">
                    <responsive-image
                      class=""
                      size="full"
                      :lazy="true"
                      :image-data="{
                        width: 700,
                        height: 358,
                        file: '2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica.jpg',
                        alt_text:
                          'Persona Corriendo R\u00e1pido Otimizaci\u00f3n Web Pometa Gr\u00e0fica',
                        title:
                          'Persona Corriendo R\u00e1pido Otimizaci\u00f3n Web Pometa Gr\u00e0fica',
                        srcset_img:
                          'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica.jpg.webp 700w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica.jpg 700w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica-300x153.jpg.webp 300w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica-300x153.jpg 300w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica-140x72.jpg.webp 140w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica-140x72.jpg 140w',
                        srcset: {
                          full_webp: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica.jpg.webp',
                            media: '(min-width:300px)',
                            mime_type: 'image\/webp',
                            width: 700,
                            height: 358,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica.jpg.webp 700w',
                          },
                          full: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica.jpg',
                            media: '(min-width:300px)',
                            mime_type: 'image\/jpg',
                            width: 700,
                            height: 358,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica.jpg 700w',
                          },
                          medium_webp: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica-300x153.jpg.webp',
                            media: '(min-width:150px) and (max-width:300px)',
                            mime_type: 'image\/webp',
                            width: 300,
                            height: 153,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica-300x153.jpg.webp 300w',
                          },
                          medium: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica-300x153.jpg',
                            media: '(min-width:150px) and (max-width:300px)',
                            mime_type: 'image\/jpeg',
                            width: 300,
                            height: 153,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica-300x153.jpg 300w',
                          },
                          mini_webp: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica-140x72.jpg.webp',
                            media: '(max-width:140px)',
                            mime_type: 'image\/webp',
                            width: 140,
                            height: 72,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica-140x72.jpg.webp 140w',
                          },
                          mini: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica-140x72.jpg',
                            media: '(max-width:140px)',
                            mime_type: 'image\/jpeg',
                            width: 140,
                            height: 72,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/persona-corriendo-rapido-optimizacion-web-pometa-grafica-140x72.jpg 140w',
                          },
                        },
                        pometaImages: 1637313411,
                      }"
                    ></responsive-image>
                  </div>
                </figure>
              </div>

              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <p>
                    El tiempo de respuesta del servidor es el tiempo que tarda
                    un servidor en responder la solicitud de un navegador. Según
                    Google, un
                    <strong>buen tiempo de respuesta del servidor</strong> tiene
                    que estar por
                    <strong>debajo de los 200 milisegundos</strong>, y si
                    superas los 2’5 segundos ya te expones a una aborigen de
                    abandonos de la web. Para poder comprobar cuál es el tiempo
                    de respuesta del servidor, existen
                    <strong
                      >diversas herramientas que nos ofrecen este
                      análisis</strong
                    >. Como por ejemplo, Pagespeed Insights de Google.
                  </p>
                </div>
              </div>

              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <ol start="6">
                    <li>
                      <h3>Optimización de la parte visible de la página</h3>
                    </li>
                  </ol>
                </div>
              </div>

              <div class="wpb_single_image wpb_content_element vc_align_left">
                <figure class="wpb_wrapper vc_figure">
                  <div class="vc_single_image-wrapper vc_box_border_grey">
                    <responsive-image
                      class=""
                      size="full"
                      :lazy="true"
                      :image-data="{
                        width: 700,
                        height: 358,
                        file: '2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica.jpg',
                        alt_text:
                          'Carpintero cortando Optimizaci\u00f3n Web Pometa Gr\u00e0fica',
                        title:
                          'Carpintero cortando Optimizaci\u00f3n Web Pometa Gr\u00e0fica',
                        srcset_img:
                          'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica.jpg.webp 700w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica.jpg 700w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica-300x153.jpg.webp 300w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica-300x153.jpg 300w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica-140x72.jpg.webp 140w, https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica-140x72.jpg 140w',
                        srcset: {
                          full_webp: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica.jpg.webp',
                            media: '(min-width:300px)',
                            mime_type: 'image\/webp',
                            width: 700,
                            height: 358,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica.jpg.webp 700w',
                          },
                          full: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica.jpg',
                            media: '(min-width:300px)',
                            mime_type: 'image\/jpg',
                            width: 700,
                            height: 358,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica.jpg 700w',
                          },
                          medium_webp: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica-300x153.jpg.webp',
                            media: '(min-width:150px) and (max-width:300px)',
                            mime_type: 'image\/webp',
                            width: 300,
                            height: 153,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica-300x153.jpg.webp 300w',
                          },
                          medium: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica-300x153.jpg',
                            media: '(min-width:150px) and (max-width:300px)',
                            mime_type: 'image\/jpeg',
                            width: 300,
                            height: 153,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica-300x153.jpg 300w',
                          },
                          mini_webp: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica-140x72.jpg.webp',
                            media: '(max-width:140px)',
                            mime_type: 'image\/webp',
                            width: 140,
                            height: 72,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica-140x72.jpg.webp 140w',
                          },
                          mini: {
                            source_url:
                              'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica-140x72.jpg',
                            media: '(max-width:140px)',
                            mime_type: 'image\/jpeg',
                            width: 140,
                            height: 72,
                            img: 'https:\/\/www.lapometa.com\/headless\/wp-content\/uploads\/2021\/11\/carpintero-cortando-optimizacion-web-pometa-grafica-140x72.jpg 140w',
                          },
                        },
                        pometaImages: 1637313411,
                      }"
                    ></responsive-image>
                  </div>
                </figure>
              </div>

              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <p>
                    Una forma de optimizar el contenido que aparece en la web
                    <strong
                      >es cargar primero el contenido de CSS y JavaScript del
                      inicio de la página web</strong
                    >. De esta forma, el contenido que se encuentra debajo y que
                    en un principio al cargar la web no se ve, se puede ir
                    cargando posteriormente. Así pues, el hecho de poder
                    cargarse posteriormente implica que en un inicio el
                    navegador no tenga que cargar más, si no que solo se carga
                    la parte superior del contenido, la porción que es visible
                    por el usuario nada más entrar en la página, o lo que se
                    llama <strong>contenido above the fold.</strong>
                  </p>
                </div>
              </div>

              <div class="wpb_text_column wpb_content_element">
                <div class="wpb_wrapper">
                  <p>
                    <strong>Ahora te toca a ti</strong>. Si quieres una página
                    web rápida, <strong>contactanos</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
      default: null,
    },
  },
}
</script>
<style lang="scss" scoped>
.post-container {
  width: 100%;
}
@media (min-width: 640px) {
  .post-container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .post-container {
    max-width: 768px;
  }
}
</style>
<style lang="scss">
.post-content {
  h3 {
    @apply text-xl my-5 font-sset;
  }
  p {
    @apply my-4;
  }
}
.single-post {
  @apply space-y-10 msm:space-y-5;

  .header {
    @apply aspect-w-4 aspect-h-3;
    .responsive-image {
      @apply w-full h-full object-cover;
    }
  }

  .post-content .responsive-image {
    @apply w-full my-5;
  }

  video,
  iframe {
    @apply w-full;
  }
}
</style>
