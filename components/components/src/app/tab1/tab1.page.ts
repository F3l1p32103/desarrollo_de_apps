import { Component } from '@angular/core';

interface IonicComponentItem {
  id: string;
  name: string;
  description: string;
  icon: string;
}

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {
  components: IonicComponentItem[] = [
    { id: 'button', name: 'ion-button', description: 'Botón interactivo con varios estilos y tamaños.', icon: 'assets/icons/button.svg' },
    { id: 'badge', name: 'ion-badge', description: 'Pequeña etiqueta para mostrar contadores o estados.', icon: 'assets/icons/badge.svg' },
    { id: 'card', name: 'ion-card', description: 'Contenedor tipo tarjeta para agrupar contenido relacionado.', icon: 'assets/icons/card.svg' },
    { id: 'checkbox', name: 'ion-checkbox', description: 'Casilla de verificación para selecciones booleanas.', icon: 'assets/icons/checkbox.svg' },
    { id: 'chip', name: 'ion-chip', description: 'Elemento compacto para representar una entrada, atributo o acción.', icon: 'assets/icons/chip.svg' },
    { id: 'datetime', name: 'ion-datetime', description: 'Selector de fecha y hora.', icon: 'assets/icons/datetime.svg' },
    { id: 'fab', name: 'ion-fab', description: 'Botón de acción flotante con acciones secundarias.', icon: 'assets/icons/fab.svg' },
    { id: 'icon', name: 'ion-icon', description: 'Muestra íconos vectoriales del set de Ionicons.', icon: 'assets/icons/icon.svg' },
    { id: 'img', name: 'ion-img', description: 'Carga de imágenes de forma perezosa (lazy loading).', icon: 'assets/icons/img.svg' },
    { id: 'infinite-scroll', name: 'ion-infinite-scroll', description: 'Carga más contenido al llegar al final del scroll.', icon: 'assets/icons/infinite-scroll.svg' },
    { id: 'input', name: 'ion-input', description: 'Campo de texto para entrada de datos.', icon: 'assets/icons/input.svg' },
    { id: 'item-sliding', name: 'ion-item-sliding', description: 'Ítem de lista que se desliza para revelar opciones.', icon: 'assets/icons/item-sliding.svg' },
    { id: 'loading', name: 'ion-loading', description: 'Indicador de carga superpuesto mientras se procesa algo.', icon: 'assets/icons/loading.svg' },
    { id: 'menu', name: 'ion-menu', description: 'Panel lateral deslizable de navegación.', icon: 'assets/icons/menu.svg' },
    { id: 'modal', name: 'ion-modal', description: 'Ventana superpuesta para mostrar contenido adicional.', icon: 'assets/icons/modal.svg' },
    { id: 'progress-bar', name: 'ion-progress-bar', description: 'Barra que indica el progreso de una tarea.', icon: 'assets/icons/progress-bar.svg' },
    { id: 'radio', name: 'ion-radio', description: 'Botón de selección única dentro de un grupo.', icon: 'assets/icons/radio.svg' },
    { id: 'range', name: 'ion-range', description: 'Control deslizante para seleccionar un valor numérico.', icon: 'assets/icons/range.svg' },
    { id: 'refresher', name: 'ion-refresher', description: 'Permite refrescar contenido con gesto de deslizar hacia abajo.', icon: 'assets/icons/refresher.svg' },
    { id: 'searchbar', name: 'ion-searchbar', description: 'Campo de búsqueda con ícono y botón de cancelar.', icon: 'assets/icons/searchbar.svg' },
    { id: 'segment', name: 'ion-segment', description: 'Grupo de botones para alternar entre vistas.', icon: 'assets/icons/segment.svg' },
    { id: 'select', name: 'ion-select', description: 'Lista desplegable para elegir una o varias opciones.', icon: 'assets/icons/select.svg' },
    { id: 'skeleton-text', name: 'ion-skeleton-text', description: 'Marcador de posición animado mientras carga el contenido real.', icon: 'assets/icons/skeleton-text.svg' },
    { id: 'toggle', name: 'ion-toggle', description: 'Interruptor para activar o desactivar una opción.', icon: 'assets/icons/toggle.svg' },
    { id: 'toast', name: 'ion-toast', description: 'Mensaje emergente breve que desaparece solo.', icon: 'assets/icons/toast.svg' },
    { id: 'alert', name: 'ion-alert', description: 'Cuadro de diálogo para alertas o confirmaciones.', icon: 'assets/icons/alert.svg' },
    { id: 'action-sheet', name: 'ion-action-sheet', description: 'Menú de opciones que aparece desde abajo.', icon: 'assets/icons/action-sheet.svg' },
    { id: 'popover', name: 'ion-popover', description: 'Ventana contextual pequeña anclada a un elemento.', icon: 'assets/icons/popover.svg' },
    { id: 'reorder', name: 'ion-reorder', description: 'Permite reordenar ítems de una lista arrastrándolos.', icon: 'assets/icons/reorder.svg' },
    { id: 'accordion', name: 'ion-accordion', description: 'Panel expandible/colapsable para mostrar u ocultar contenido.', icon: 'assets/icons/accordion.svg' },
  ];
}