Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/stock/show/:symbol', {
  action: function () {
    console.log(this.params.symbol);
    this.render('showStock', {
      data: function() {
        return Stocks.findOne({Symbol: this.params.symbol});
      }
    });
  },
  onAfterAction: function () {
    symbol = this.params.symbol;
    console.log(symbol);
    sym = $.url().param('symbol') || symbol;
    dur = $.url().param('duration') || 3650;

    new Markit.InteractiveChartApi(sym, dur);
  }
});