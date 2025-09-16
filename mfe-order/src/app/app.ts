import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Order {
  id: number;
  customer: string;
  product: string;
  quantity: number;
  total: number;
  status: string;
}

@Component({
  selector: 'mfe-order-app',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected readonly title = signal('MFE Order App');
  
  protected readonly orders = signal<Order[]>([
    { id: 1, customer: 'Nguyễn Văn A', product: 'Laptop Pro X1', quantity: 1, total: 2499, status: 'Đã giao' },
    { id: 2, customer: 'Trần Thị B', product: 'Wireless Mouse', quantity: 2, total: 58, status: 'Đang xử lý' },
    { id: 3, customer: 'Lê Văn C', product: 'Mechanical Keyboard', quantity: 1, total: 149, status: 'Đã hủy' },
    { id: 4, customer: 'Phạm Thị D', product: 'Monitor 4K', quantity: 1, total: 399, status: 'Đang giao' },
    { id: 5, customer: 'Hoàng Văn E', product: 'USB-C Cable', quantity: 3, total: 57, status: 'Đã giao' }
  ]);

  addOrder() {
    console.log('Add new order');
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'Đã giao': return 'bg-green-100 text-green-800';
      case 'Đang giao': return 'bg-blue-100 text-blue-800';
      case 'Đang xử lý': return 'bg-yellow-100 text-yellow-800';
      case 'Đã hủy': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }
}
