describe('index', function(){

  it('renders the copy text exactly', function(){
    // ($('#sublime_text').contents().text().gsub("\n","")).should
    //   .containEql( '787' );
($('#sublime_text').text()
    .replace(/\t/g, '')
    .replace(/\n/g, '')
    .replace(/\s/g, '')).should
    .be.exactly( homepage_text );

  })

});
