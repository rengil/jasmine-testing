describe('testando arrays', function () {
  var a;

  beforeAll(function () {
    a = [1, 2, 3];
  }),

  it('deve retornar o tamanho da array', function () {
    expect(a.length).toEqual(3);
    expect(a.length).not.toEqual(4);
  });

  it('Posso inserir coisas na minha array', function () {
    expect(a).not.toContain(5);
    a.push(5);
    expect(a).toContain(5);
  });
});
