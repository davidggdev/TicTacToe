import { Scene } from "../Scene";
export class ModelScene {
  /**
   *  Escena de la aplicación
   */
  scene: Scene | null;

  /**
   * Constructor de la clase
   */
  constructor() {
    // Inicializamos la escena por defecto
    this.scene = null;
  }

  /**
   * Inicializa la escena
   * @returns {void}
   * @public
   */
  public init(): void {}

  /**
   * Enlaza los eventos de la escena
   * @returns {void}
   * @public
   */
  public bindEvents(): void {}
}
