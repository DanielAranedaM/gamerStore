import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
import { RuleTester } from 'eslint';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Injectable({
    providedIn: 'root'
})
export class UtilsService{

    constructor(
        private ctrlLoading:LoadingController,
        private ctrlToast:ToastController,
        private ctrlModal:ModalController,
        private router:Router
    ){}

    

    //Camara
    async takePic (promptLabelHeader:string) {
        return await Camera.getPhoto({
            quality: 90,
            allowEditing: true,
            resultType: CameraResultType.DataUrl,
            source: CameraSource. Prompt, promptLabelHeader,
            promptLabelPhoto: 'Selecciona imagen',
            promptLabelPicture: 'Tomar foto'
        });
    };

    //Simbolo de carga
    cargando(){
        return this.ctrlLoading.create({ spinner: 'crescent' })
    }

    //Toast
    async presentarToast(opts?:ToastOptions){
        const toast = await this.ctrlToast.create(opts);
        toast.present();
    }

    //Enrutar a paginas disponibles
    rouuterLink(url:string){
        return this.router.navigateByUrl(url);
    }

    //Almacenar elemento en un local Storage
    serveInLocalStorage(key:string, value:any){
        return localStorage.setItem(key, JSON.stringify(value));
    }   

    //Obtener elemento del local Storage
    getFromLocalStorage(key:string){
        return JSON.parse(localStorage.getItem(key));
    }

    //Modal crear
    async mostrarModal(opts:ModalOptions){
        const modal = await this.ctrlModal.create(opts);
        await modal.present();

        const { data } = await modal.onWillDismiss();

        if(data){
            return data;
        }

    }

    //Cerrar modal
    cerrarModal(data?:any){
        return this.ctrlModal.dismiss(data);
    }
}