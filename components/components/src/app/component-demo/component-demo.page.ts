import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  AlertController,
  ToastController,
  ActionSheetController,
  LoadingController,
} from '@ionic/angular';

interface DemoInfo {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-component-demo',
  templateUrl: './component-demo.page.html',
  styleUrls: ['./component-demo.page.scss'],
  standalone: false,
})
export class ComponentDemoPage implements OnInit {
  id = '';

  demos: Record<string, DemoInfo> = {
    button: { id: 'button', name: 'ion-button', description: 'Botón interactivo con varios estilos y tamaños. Al presionarlo ejecuta cualquier acción que definas.' },
    badge: { id: 'badge', name: 'ion-badge', description: 'Etiqueta pequeña usada para mostrar contadores, notificaciones o estados.' },
    card: { id: 'card', name: 'ion-card', description: 'Contenedor visual tipo tarjeta que agrupa contenido relacionado (título, texto, imagen, acciones).' },
    checkbox: { id: 'checkbox', name: 'ion-checkbox', description: 'Casilla de verificación para valores booleanos (marcado/desmarcado).' },
    chip: { id: 'chip', name: 'ion-chip', description: 'Elemento compacto para representar una entrada, atributo o acción, como un filtro o etiqueta.' },
    datetime: { id: 'datetime', name: 'ion-datetime', description: 'Selector de fecha y/o hora con calendario integrado.' },
    fab: { id: 'fab', name: 'ion-fab', description: 'Botón de acción flotante (FAB) que puede desplegar acciones secundarias.' },
    icon: { id: 'icon', name: 'ion-icon', description: 'Renderiza íconos vectoriales del set oficial de Ionicons.' },
    img: { id: 'img', name: 'ion-img', description: 'Muestra imágenes con carga perezosa (lazy loading) para mejorar el rendimiento.' },
    'infinite-scroll': { id: 'infinite-scroll', name: 'ion-infinite-scroll', description: 'Dispara un evento para cargar más contenido cuando el usuario llega al final del scroll.' },
    input: { id: 'input', name: 'ion-input', description: 'Campo de texto para captura de datos del usuario.' },
    'item-sliding': { id: 'item-sliding', name: 'ion-item-sliding', description: 'Ítem de una lista que se desliza horizontalmente para revelar opciones (como borrar o archivar).' },
    loading: { id: 'loading', name: 'ion-loading', description: 'Indicador superpuesto que bloquea la interacción mientras se procesa una tarea.' },
    menu: { id: 'menu', name: 'ion-menu', description: 'Panel de navegación lateral que se desliza desde el borde de la pantalla.' },
    modal: { id: 'modal', name: 'ion-modal', description: 'Ventana superpuesta que muestra contenido adicional sin salir de la página actual.' },
    'progress-bar': { id: 'progress-bar', name: 'ion-progress-bar', description: 'Barra horizontal que indica visualmente el progreso de una tarea.' },
    radio: { id: 'radio', name: 'ion-radio', description: 'Botón de selección única dentro de un grupo de opciones (ion-radio-group).' },
    range: { id: 'range', name: 'ion-range', description: 'Control deslizante para elegir un valor numérico dentro de un rango.' },
    refresher: { id: 'refresher', name: 'ion-refresher', description: 'Permite refrescar el contenido de la página con el gesto de deslizar hacia abajo (pull-to-refresh).' },
    searchbar: { id: 'searchbar', name: 'ion-searchbar', description: 'Campo de búsqueda con ícono de lupa y botón de cancelar.' },
    segment: { id: 'segment', name: 'ion-segment', description: 'Grupo de botones que permite alternar entre varias vistas o categorías.' },
    select: { id: 'select', name: 'ion-select', description: 'Lista desplegable para elegir una o varias opciones de un conjunto.' },
    'skeleton-text': { id: 'skeleton-text', name: 'ion-skeleton-text', description: 'Marcador de posición animado que simula contenido mientras este carga.' },
    toggle: { id: 'toggle', name: 'ion-toggle', description: 'Interruptor tipo switch para activar o desactivar una opción.' },
    toast: { id: 'toast', name: 'ion-toast', description: 'Mensaje breve y no intrusivo que aparece temporalmente y desaparece solo.' },
    alert: { id: 'alert', name: 'ion-alert', description: 'Cuadro de diálogo modal usado para alertas, confirmaciones o mensajes importantes.' },
    'action-sheet': { id: 'action-sheet', name: 'ion-action-sheet', description: 'Menú de opciones que se desliza desde la parte inferior de la pantalla.' },
    popover: { id: 'popover', name: 'ion-popover', description: 'Ventana contextual pequeña que aparece anclada a un elemento, como un menú de opciones.' },
    reorder: { id: 'reorder', name: 'ion-reorder', description: 'Permite al usuario reordenar los ítems de una lista arrastrándolos.' },
    accordion: { id: 'accordion', name: 'ion-accordion', description: 'Panel que se expande y colapsa para mostrar u ocultar contenido, útil para FAQs.' },
  };

  current!: DemoInfo;

  checkboxValue = false;
  toggleValue = false;
  radioValue = 'opcion1';
  rangeValue = 50;
  segmentValue = 'a';
  selectValue = 'opcion1';
  inputValue = '';
  searchValue = '';
  progress = 0.5;
  reorderItems = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];
  infiniteItems = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);

  constructor(
    private route: ActivatedRoute,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private actionSheetCtrl: ActionSheetController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.current = this.demos[this.id];
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alerta de ejemplo',
      message: 'Este es el contenido que muestra ion-alert.',
      buttons: ['OK'],
    });
    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Este es un ion-toast en acción.',
      duration: 2000,
      position: 'bottom',
    });
    await toast.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Elige una opción',
      buttons: [
        { text: 'Opción 1', handler: () => {} },
        { text: 'Opción 2', handler: () => {} },
        { text: 'Cancelar', role: 'cancel' },
      ],
    });
    await actionSheet.present();
  }

  async presentLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Cargando...',
      duration: 2000,
    });
    await loading.present();
  }

  onIonInfinite(ev: any) {
    setTimeout(() => {
      const nextCount = this.infiniteItems.length + 5;
      for (let i = this.infiniteItems.length; i < nextCount; i++) {
        this.infiniteItems.push(`Item ${i + 1}`);
      }
      ev.target.complete();
    }, 500);
  }

  handleReorder(ev: any) {
    this.reorderItems = ev.detail.complete(this.reorderItems);
  }
}