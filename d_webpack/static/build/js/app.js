var toggleform = {
  init: function(){
    var self = this;
    $('[data-toggleform').on("click", function(){
      self.toggle($(this).data('toggleform'));
    });
    self.load();
  },
  load: function(){
    $('[data-toggleform]').each(function(){
      var group_id = $(this).data('toggleform');
      var group = $('[data-group="' + group_id + '"]');
      var detail = $('[data-' + group_id + '="detail"]', group);
      var form = $('[data-' + group_id + '="form"]', group);
      if($(".has-error", form).length){
        detail.hide();
        form.show();
      } else {
        detail.show();
        form.hide();
      }
    })
  },
  toggle: function(group_id){
    var group = $('[data-group="' + group_id + '"]');
    var detail = $('[data-' + group_id + '="detail"]', group);
    var form = $('[data-' + group_id + '="form"]', group);
    if (form.is(':visible')){
      form.hide();
      detail.show();
    } else {
      form.show();
      detail.last().hide();
    }
  }
}
