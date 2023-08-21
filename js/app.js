$(document).foundation()
window.addEventListener('load',function(){
    new Glider(document.querySelector('.carousel-list'), {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: '.carousel-indicador',
        arrows: {
            prev: '.carousel-previous',
            next: '.carousel-next'
        },
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 775,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 2,
                slidesToScroll: 2,
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
              }
            }
        ]
    });
});
window.addEventListener('load',function(){
  new Glider(document.querySelector('.carousel-list-2'), {
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: '.carousel-indicador-2',
      arrows: {
          prev: '.carousel-previous-2',
          next: '.carousel-next-2'
      },
      responsive: [
          {
            // screens greater than >= 775px
            breakpoint: 775,
            settings: {
              // Set to `auto` and provide item width to adjust to viewport
              slidesToShow: 2,
              slidesToScroll: 2,
            }
          },{
            // screens greater than >= 1024px
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
            }
          }
      ]
  });
});

const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const id2 = urlParams.get('id2')
console.log(id2)
const product = urlParams.get('img')
console.log(product);

if(id2=='bad_bunny'){
  let image_product = document.createElement('img');
  image_product.src = '../image/bad_bunny/' + product;
  document.querySelector('#contenedor_producto').appendChild(image_product);

  const title_name =  urlParams.get('name');
  console.log(title_name);
  let titulo = document.createTextNode("Taza " + title_name + "-Bad Bunny");
  console.log(titulo);
  document.querySelector('#texto_titulo').appendChild(titulo);

  const nombre_taza =  urlParams.get('name');
  console.log(nombre_taza);
  let nombre = document.createTextNode("Taza " + nombre_taza + "-Bad Bunny");
  console.log(nombre);
  document.querySelector('#nombre_taza').appendChild(nombre);
  $("#bad_bunny").addClass('show')
}else if(id2=='dia_mujer'){
  let image_product2 = document.createElement('img');
  image_product2.src = '../image/dia_de_la_mujer/' + product;
  document.querySelector('#contenedor_producto').appendChild(image_product2);

  const title_name =  urlParams.get('name');
  console.log(title_name);
  let titulo = document.createTextNode("Taza " + title_name);
  console.log(titulo);
  document.querySelector('#texto_titulo').appendChild(titulo);

  const nombre_taza =  urlParams.get('name');
  console.log(nombre_taza);
  let nombre = document.createTextNode("Taza " + nombre_taza);
  console.log(nombre);
  document.querySelector('#nombre_taza').appendChild(nombre);
  $("#dia-mujer").addClass('show')
}


  
  









