import { Scene } from "../Scene";

/**
 * Clase HomeScene
 */
export class HomeScene {
  /**
   *  Escena de la aplicación
   */
  scene: Scene;

  /**
   * Constructor de la clase
   */
  constructor() {
    // Inicializamos la escena Home por defecto
    this.scene = new Scene("home");
  }

  /**
   * Enlaza los eventos de la escena Home
   */
  public bindEvents(): void {}
}
