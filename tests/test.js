describe('index', function(){

  it('renders the copy text exactly', function(){
    ($('#sublime_text').text()
      .replace(/\t/g, '')
      .replace(/\n/g, '')
      .replace(/\s/g, ''))
      .should === ( body_text );
  })

});
