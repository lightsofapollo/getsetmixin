suite('getsetmixin', function() {
  var assert = require('assert');
  var mixin = require('./getsetmixin');

  var subject;
  setup(function() {
    subject = {};
    mixin(subject);
  });

  test('get', function() {
    assert.equal(subject.get('...'), undefined);
  });

  test('set', function() {
    var result = subject.set('xfoo', 'bar');
    assert.equal(subject.get('xfoo'), 'bar');
    assert.equal(result, subject, 'is chainable');
  });
});

