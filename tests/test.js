describe('when index page loads', function(){
  it('the copy text is rendered exactly', function(){
    ($('#sublime_text').text()
      .replace(/\t/g, '')
      .replace(/\n/g, '')
      .replace(/\s/g, '')).length.toString()
      .should.containEql ( body_text.length.toString() );
  })

});
