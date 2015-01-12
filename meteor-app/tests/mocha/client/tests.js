if (typeof MochaWeb != 'undefined') {
  MochaWeb.testOnly(function () {

    describe('counter tests', function () {

      // function getReportedCount () {
      //   var counter = $('#counter')
      //   return parseInt(counter.text(), 10)
      // }
      //
      // it('should increment counter when button is clicked', function () {
      //   chai.expect(getReportedCount()).to.equal(0)
      //
      //   //trigger a click
      //   $("#button").trigger( "click" );
      //
      //   //wait a little for the DOM to update, then check you button click is equal to 1
      //   setTimeout(function(done){
      //     chai.expect(getReportedCount()).to.equal(1);
      //     //use done() because as we're waiting a little, it's an async function,
      //     //things don't all happen at the same time
      //     done()
      //   },200)
      // })
    });
  });
}
