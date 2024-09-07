import axios from "axios";
import { MainScene } from "./scenes/MainScene";
import { HomeScene } from "./scenes/HomeScene";

/**
 * Clase App - Controla la aplicación
 */
export class App {
  mainScene: MainScene;
  /**
   * Escena de la escena Home
   */
  homeScene: HomeScene;

  /**
   * Constructor de la clase
   * @constructor
   * @returns {void}
   */
  constructor() {
    this.mainScene = new MainScene();
    this.homeScene = new HomeScene();
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

    // Bind events from Scene class
    this.homeScene.bindEvents();
  }

  /**
   * Realiza una petición AJAX
   * @returns {Promise<void>}
   * @private
   */
  private async makeRequest(): Promise<void> {
    axios
      .post("/api/ajax-handler.php", {
        action: "index/get",
        data: {},
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

// Instancia de la aplicación y la inicializa
const app = new App().init();
