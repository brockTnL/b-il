
$( '.js-filter' ).on( 'click', function() {
  
  var $color = $(this).attr('data-attribute');
  
  if ( $color == 'all' ) {
    $( '.js-filterable' ).removeClass( 'is-hidden' );    
  } else {
    $( '.js-filterable' ).addClass( 'is-hidden' );
    $( '.js-filterable[data-attribute=' + $color + ']' ).removeClass( 'is-hidden' );
  }
  
});

