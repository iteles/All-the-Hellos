if (typeof MochaWeb != 'undefined') {
  MochaWeb.testOnly(function () {

    describe('Friends are added successfully', function () {

      it('Should add a new person to the Friend collection', function(done) {
        var friendId = Friends.insert(
        { firstName: 'New',
        lastName: 'Friend'});

        var friend = Friends.findOne({'firstName':'New'});
        console.log(friend);
        chai.assert.equal(friend.length === 1);
        done();
      });

    });
  });
}
