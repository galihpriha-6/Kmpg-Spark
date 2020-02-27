var a = 0;
$(window).scroll(function() {
  var oTop = $("#transaction-number").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $(".number").each(function() {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text()
      }).animate(
        {
          countNum: countTo
        },

        {
          duration: 2000,
          easing: "swing",
          step: function() {
            $this.text(
              parseFloat(this.countNum)
                .toFixed(0)
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            );
          },
          complete: function() {
            $this.text(
              this.countNum
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            );
            //alert('finished');
          }
        }
      );
    });
    a = 1;
  }
});