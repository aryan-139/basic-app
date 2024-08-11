import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']  // Corrected from 'styleUrl' to 'styleUrls'
})
export class AppComponent {
  dummy = [
    {
      id:1,
      title: 'dummy-app-1',
      description: 'dummy-app-description-1',
    },
    {
      id:2,
      title: 'dummy-app-2',
      description: 'dummy-app-description-2',
    },
    {
      id:3,
      title: 'dummy-app-3',
      description: 'dummy-app-description-3',
    },
    {
      id:4,
      title: 'dummy-app-4',
      description: 'dummy-app-description-4',
    }
  ];

  deleteItem(id: number) {
    this.dummy = this.dummy.filter(item => item.id !== id);
  }

  editItem(id: number) {
    console.log('Edit item with id: ', id);
    console.log('Item object', this.dummy.find(item => item.id === id));
  }
}
