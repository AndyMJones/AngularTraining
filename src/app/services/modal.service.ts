import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  isVisible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: IModal[] = []

  constructor() { }

  register(id: string) {
    this.modals.push({
      id,
      isVisible: false
    });
  }

  unregister(id: string) {
    this.modals = this.modals.filter(modal => modal.id !== id);
  }

  getModal(id: string) {
    return this.modals.find(modal => modal.id === id);
  }

  isModalOpen(id: string) : boolean {
    return Boolean(this.getModal(id)?.isVisible);
  }

  toggleModal(id: string) {
    const modal = this.getModal(id);
    if (modal) {
      modal.isVisible = !modal.isVisible;
    }
  }

  closeModal(id: string) {
    const modal = this.getModal(id);
    if (modal) {
      modal.isVisible = false;
    }
  }

  openModal(id: string) {
    const modal = this.getModal(id);
    if (modal) {
      modal.isVisible = true;
    }
  }


}
