import { Controller } from '@hotwired/stimulus';

/*
 * Mobile menu display control
 *
 * Any element with a data-controller="mobile-menu" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * mobile_menu_controller.js -> "mobile-menu"
 */
export default class extends Controller {
  
  // DOM Targets elements
  static targets = ["button"]

    toggle() {
        this.element.classList.toggle("nav-open")

        // Mise à jour de aria-expanded (accessibilité)
        const isOpen = this.element.classList.contains("nav-open")
        this.buttonTarget.setAttribute("aria-expanded", isOpen)
    }
}