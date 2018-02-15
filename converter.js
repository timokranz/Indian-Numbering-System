// Code is written by Timothy O. Ouano on February 15, 2018

$(document).ready(function(){

    // Separator of Indian Numbering System and the normal numbering system
    var separator = '<hr style="border-top:1px solid #fff;margin: 4px 0;" />';

    // Toggle tooltip
    $('[data-toggle="tooltip"]').tooltip({'container': 'body'});
    $('[data-toggle="tooltip"]').tooltip();

    // On input textboxes with "ins" as class
    $('.ins').on('input',function(){
    var currency = Number($(this).val());

      // If not a number then ask the user to input numbers only
      if(isNaN(currency)){
        $(this).attr('data-original-title', 'Please input numbers only').tooltip('show');
      }
      else{
        var thousand = currency / 1000;
        var hundred = currency / 100000;
        var million = currency / 1000000;
        var billion = currency / 1000000000;

        if(billion >= 100){
          $(this).attr('data-original-title', 'Price is too large please enter a smaller number').tooltip('show');
        }
        else if(billion > 1){
          var million = Math.floor(thousand % 1000);
          var thousandnorm = Math.floor(thousand % 100);
          var lakh = Math.floor(hundred % 100);
          var crore = Math.floor(million % 100);
          var thousandind = Math.floor(thousand % 1000);

          million = flag1!=0?flag1 + ' Million':'';
          thousandnorm = flag!=0?flag2 + ' Thousand':'';
          lakh = flag!=0?flag3 + ' Lakh ':'';
          crore = flag4!=0?flag4 + ' Crore ':'';
          thousandind = flag5!=0?flag5 + ' Thousand':'';

          var data = Math.floor(billion) + ' Billion ' + flag1 + flag5 + separator + Math.floor(million / 1000) + ' Arab ' + flag4 + flag3 + flag2;
          $(this).attr('data-original-title', data).tooltip('show').tooltip('show');
        }
        else if(million > 1){
          var thousandnorm = Math.floor(thousand % 100);
          var lakh = Math.floor(hundred % 100);
          var thousandind = Math.floor(thousand % 1000);

          thousandnorm = flag1!=0?flag1 + ' Thousand':'';
          lakh = flag2!=0?flag2 + ' Lakh ':'';
          thousandind = flag!=0?flag3 + ' Thousand':'';
          var data = Math.floor(million) + ' Million ' + flag3 + '<br/>' + separator + Math.floor(hundred / 100) + ' Crore ' + flag2 + flag1;

          if(hundred * 100 >= 10000){
              $(this).attr('data-original-title', data).tooltip('show');
          }
          else{
              $(this).attr('data-original-title', Math.floor(million) + ' Million ' + flag3 + '<br/>' + separator + Math.floor(hundred) + ' Lakh ' + flag1).tooltip('show');
          }
        }
        else if(hundred > 1){
          var flag = Math.floor(thousand % 100);

          if(flag != 0){
            var data = Math.floor(hundred) + ' Hundred ' + Math.floor(thousand % 100) + ' Thousand' + '<br/>' + separator + Math.floor(hundred) + ' Lakh ' + Math.floor(thousand % 100) + ' Thousand';
          }
          else{
            var data = Math.floor(hundred) + ' Hundred ' + ' Thousand' + '<br/>' + separator + Math.floor(hundred) + ' Lakh ';
          }
          $(this).attr('data-original-title', data).tooltip('show');
        }
        else if(thousand > 1){
          $(this).attr('data-original-title', Math.floor(thousand) + ' Thousand').tooltip('show');
        }
        else if(currency == 0){
          $(this).attr('data-original-title', 'Input must be greater than zero').tooltip('show');
        }
        else{
          $(this).attr('data-original-title', $(this).val()).tooltip('show');
        }

      }
    });
});
