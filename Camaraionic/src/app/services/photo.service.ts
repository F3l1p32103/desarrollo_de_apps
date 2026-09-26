import { Injectable, signal } from '@angular/core';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Capacitor } from '@capacitor/core';
import { UserPhoto } from '../models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  private photosSignal = signal<UserPhoto[]>([]);
  public readonly photos = this.photosSignal.asReadonly();

  async takeNewPhoto(isHighDef: boolean): Promise<{ success: boolean; reason?: 'permission_denied' | 'cancelled' | 'error' }> {
    try {
      if (Capacitor.isNativePlatform()) {
        const checkStatus = await Camera.checkPermissions();
        if (checkStatus.camera !== 'granted' || checkStatus.photos !== 'granted') {
          const request = await Camera.requestPermissions({ permissions: ['camera', 'photos'] });
          if (request.camera !== 'granted' && request.photos !== 'granted') {
            console.warn('Permisos de cámara o galería no concedidos.');
            return { success: false, reason: 'permission_denied' };
          }
        }
      }

      const imageQuality = isHighDef ? 95 : 60;
      const targetWidth = isHighDef ? 1920 : 800;

      const capturedPhoto: Photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Prompt,
        quality: imageQuality,
        width: targetWidth,
        allowEditing: false,
        promptLabelHeader: 'Seleccionar Origen',
        promptLabelPhoto: 'Elegir de la Galería',
        promptLabelPicture: 'Tomar Fotografía'
      });

      const newPhoto: UserPhoto = {
        filepath: `${Date.now()}.${capturedPhoto.format}`,
        webPath: capturedPhoto.webPath,
        format: capturedPhoto.format
      };

      this.photosSignal.update(photos => [newPhoto, ...photos]);
      return { success: true };

    } catch (error: any) {
      if (error?.message?.includes('cancelled') || error?.message?.includes('User cancelled')) {
        return { success: false, reason: 'cancelled' };
      }
      console.error('Error durante la captura:', error);
      return { success: false, reason: 'error' };
    }
  }

  deletePhoto(index: number): void {
    this.photosSignal.update(photos => photos.filter((_, i) => i !== index));
  }
}
