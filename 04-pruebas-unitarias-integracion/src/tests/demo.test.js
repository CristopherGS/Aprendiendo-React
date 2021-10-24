describe("Prueba en el archivo demo.test.js", () => {
  test("los string debe ser iguales ", () => {
    // 1. Inicializacion
    const activo = "saludo";
    //2. estimulo
    const mensaje2 = `saludo`;
    //3. objersar el comportamiento
    expect(activo).toBe(mensaje2);
  });
});
//! me quede en el video 6 de las pruebas unitarias