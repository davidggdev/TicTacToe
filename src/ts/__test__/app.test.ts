import { App } from "../app";

describe("App", () => {
  // Instancia de la aplicación
  let app: App;

  // Antes de cada prueba, inicializa la aplicación
  beforeEach(() => {
    app = new App();
    app.init();
  });

  /**
   * Prueba que la aplicación se inicialice correctamente
   */
  test("should initialize the app correctly", () => {
    // Verifica que app sea una instancia de App
    expect(app).toBeInstanceOf(App);
  });

  /**
   * Prueba que los eventos se enlacen cuando el DOM está cargado
   */
  it("should bind events when the DOM is loaded", () => {
    // Espía el método bindEvents
    const spy = jest.spyOn(app as any, "bindEvents");

    // Dispara el evento DOMContentLoaded
    document.dispatchEvent(new Event("DOMContentLoaded"));

    // Verifica que bindEvents fue llamado
    expect(spy).toHaveBeenCalled();
  });
 

});
