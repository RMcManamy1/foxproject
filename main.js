(function( window ){
    window.watchResize = function( callback ){
        var resizing;
        callback.size = 0;
        function done()
        {
            var curr_size = window.innerWidth;
            clearTimeout( resizing );
            resizing = null;
            // only run on a true resize
            if ( callback.size != curr_size )
            {
                callback();
                callback.size = curr_size;
            }
        }
        window.addEventListener('resize', function(){
            if ( resizing )
            {
                clearTimeout( resizing );
                resizing = null;
            }
            resizing = setTimeout( done, 50 );
        });
        // init
        callback();
    };
}(window));

if ( ! 'classList' in document.body) { return; }

var $html = document.getElementsbyTagName('html')[0]
    page_classes = $html.classList,
    $menu_opener = document.getElementByID( 'nav-jump' ),
    $menu_closer = document.getElementByID( 'menu-close' );

var toggleDrawerNav_running = false;
function toggleDrawerNav( event ) {
   event.preventDefault();
  
  // check to make sure it's not already running
  if ( toggleDrawerNav_running ) {return; }
 
  // block any secondary request until we're done
  toggleDrawerNav_running = true;
  
  page_classes.toggle( 'drawer-nav-open' );
}

var toggleDrawerNav_running = false;
function toggleDrawerNav( event ) {

// the code yo usaw before
  
//toggle the "running indicator off once the animation is complete. Duration: .5 seconds
  setTimeout(function(){
    toggleDrawerNav_running = false;
  }, 500);
}

$menu_opener
  .addEventListener( 'click', toggleDrawerNav, false );
$menu_opener
  .addEventListener( 'touchdown', toggleDrawerNav, false );
$menu_closer
  .addEventListener( 'click', toggleDrawerNav, false );
$menu_closer
  .addEventListener( 'touchdown', toggleDrawerNav, false );

function toggleDrawerNav( event ) {
   event.preventDefault();
  
//Toggle the "open" class on the html element page_classes.toggle( 'drawer-nav-open' );
}
