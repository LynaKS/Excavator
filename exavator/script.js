$.validate({
  form: '#form',
  onElementValidate: function (valid, $el, $form, errorMess) {
    //  console.log('Input ' +$el.attr('name')+ ' is ' + ( valid ? 'VALID':'NOT VALID') );
  }
});



$('[type="button"]').click(function () {
  errors = [];
  if (!$('#form').isValid()) {
    //displayErrors( errors );
  } else {
    $.post(

      "mail.php", //url

      { //������ �� �����
        email: $('[name="email"]').val(),
        name: $('[name="name"]').val(),
        phone: $('[name="phone"]').val(),
        message: $('[name="message"]').val()
      },

      function (data) { //����� �������� ������
        $(".result").html(data);
      }

    );
  }

});