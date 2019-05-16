// Jquery Dependency

$("input[data-type='currency']").on({
    keyup: function() {
      //formatCurrency($(this));
          formatNumber($(this));
    },
    blur: function() {
      //formatCurrency($(this), "blur");
          //input.val(formatNumber($(this)));
          formatNumber($(this));
    }
});


function formatNumber(input) {
  // format number 1000000 to 1,234,567
  // get input value
  var input_val = input.val();

  // don't validate empty input
  if (input_val === "") { return; }

  // original length
  var original_len = input_val.length;

  // initial caret position
  var caret_pos = input.prop("selectionStart");
  input_val = input_val.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  input.val(input_val);

  // put caret back in the right position
  var updated_len = input_val.length;
  caret_pos = updated_len - original_len + caret_pos;
  input[0].setSelectionRange(caret_pos, caret_pos);
  //return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
