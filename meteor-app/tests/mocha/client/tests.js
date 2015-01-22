if (typeof MochaWeb != 'undefined') {
  MochaWeb.testOnly(function () {

    describe('Friends are added successfully', function () {
      var friendId = Friends.insert(
      { firstName: 'New',
      lastName: 'Friend'});

      it('New friend should exist in the Friends collection', function(done) {

        var friend = Friends.findOne({'firstName':'New'});
        //friend will be an object & not and array (so no length property)
        //using Object.keys(obj) to determine that friend actually exists
        //and has the expected 3 keys (id, firstName and lastName)
        chai.expect(Object.keys(friend)).to.have.length(3);
        done();
      });

      // it('New test', function(done){
      //   //ZZZ - code to be added
      //   done();
      // });
    }); //end describe
  });
}
