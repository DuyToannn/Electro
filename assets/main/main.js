
      $('.listing-sp-1555572254399 .product-wrapper .thumb-image img').on('click', function(e){
          var imgUrl = $(this).data("swatch-image"),
          parent = $(this).parents('.product-wrapper'),
          imgElem = parent.find('.product-image img.change-image');
      
          if(imgElem.hasClass('lazyloaded')){
            imgElem.attr('data-srcset',$(this).attr('data-srcset'));
            imgElem.attr('srcset',$(this).attr('srcset'));
          }
          else{
            imgElem.attr('src', imgUrl);
          }
      });  
