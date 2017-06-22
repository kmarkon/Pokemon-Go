$(function(){

  // var $pokemons=$("#pokemon");
  //   $.ajax({
  //     type:'GET',
  //     url:'https://pokeapi.co/api/v2/pokemon-form/',
  //     success:function(pokemons){
  //       $.each(pokemons, function(i, pokemon){
  //         // console.log(pokemons);
  //         })
  //       }
  //     });

      //Pagination
        var totalRows = $('#myTable').find('tbody tr:has(td)').length;
        var recordPerPage = 3;
        var totalPages = Math.ceil(totalRows / recordPerPage);
        var $pages = $('<div id="pages"></div>');

        for (i = 0; i < totalPages; i++) {
          $('<span>&nbsp;' + (i + 1) + '</span>').appendTo($pages);
        }
           $pages.appendTo('.container');

        $('table').find('tbody tr:has(td)').hide();
        var tr = $('table tbody tr:has(td)');
        for (var i = 0; i <= recordPerPage - 1; i++) {
            $(tr[i]).show();
        }
        $('span').click(function(event) {
          $('#myTable').find('tbody tr:has(td)').hide();
          var nBegin = ($(this).text() - 1) * recordPerPage;
          var nEnd = $(this).text() * recordPerPage - 1;
          for (var i = nBegin; i <= nEnd; i++)
          {
            $(tr[i]).show();
          }
        });
      });
