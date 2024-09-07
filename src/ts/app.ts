import axios from "axios";
import { MainScene } from "./scenes/MainScene";

/**
 * Clase App - Controla la aplicación
 */
export class App {
  mainScene: MainScene;

  /**
   * Constructor de la clase
   * @constructor
   * @returns {void}
   */
  constructor() {
    // Instancia de la escena principal
    this.mainScene = new MainScene();
  }

  /**
   * Inicializa la aplicación
   * @returns {void}
   * @public
   */
  public init(): App {
    document.addEventListener("DOMContentLoaded", () => {
      this.onDomContentLoaded();
    });

    return this;
  }

  /**
   * Método que se ejecuta cuando el DOM está cargado
   * @returns {void}
   * @private
   */
  private onDomContentLoaded(): void {
    this.bindEvents();
  }

  /**
   * Enlaza los eventos de la aplicación
   * @returns {void}
   * @private
   */
  private bindEvents(): void {
    // Bind events from MainScene class
    this.mainScene.bindEvents();
  }
}

// Instancia de la aplicación y la inicializa
const app = new App().init();
