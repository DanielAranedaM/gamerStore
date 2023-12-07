import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ModalController, ModalOptions, ToastController, ToastOptions } from '@ionic/angular';
import { RuleTester } from 'eslint';

@Injectable({
    providedIn: 'root'
})
export class UtilsService{

    ctrlLoading = Inject(LoadingController);
    ctrlToast = Inject(ToastController);
    ctrlModal = Inject(ModalController);
    router = Inject(Router);

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

        const { data } = await modal.await.onWillDismiss();

        if(data){
            return data;
        }

    }

    cerrarModal(data?:any){
        return this.ctrlModal.dismiss(data);
    }
}