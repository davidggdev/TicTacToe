import axios from "axios";

/**
 * Clase principal de la aplicación
 */
export class App {
  /**
   * Constructor de la clase
   * @constructor
   * @returns {void}
   */
  constructor() {}

  /**
   * Inicializa la aplicación
   * @returns {void}
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
   */
  private onDomContentLoaded(): void {
    this.bindEvents();

    // resolve makeRequest promise
    this.makeRequest();
  }

  /**
   * Enlaza los eventos de la aplicación
   * @returns {void}
   */
  private bindEvents(): void {
    const button = document.getElementById("myButton");
    if (button) {
      button.addEventListener("click", this.handleButtonClick);
    }
  }

  /**
   * Manejador del evento clic del botón
   * @returns {void}
   * @private
   */
  private handleButtonClick(): void {
    alert("¡Botón clicado!");
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
