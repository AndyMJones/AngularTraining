import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isVisible = false

  constructor() { }

  isModalOpen() {
    return this.isVisible;
  }

  toggleModal() {
    this.isVisible = !this.isVisible;
  }

  closeModal() {
    this.isVisible = false;
  }

  openModal() {
    this.isVisible = true;
  }
}
