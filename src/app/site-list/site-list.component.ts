import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-site-list',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './site-list.component.html',
  styleUrl: './site-list.component.css',
})
export class SiteListComponent {
  onSubmit(values : object) {
    console.log(values);
  }
}
