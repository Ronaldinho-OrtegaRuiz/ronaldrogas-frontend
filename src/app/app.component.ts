import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DashboardComponent} from "./backoffice/dashboard/dashboard.component";
import {initFlowbite} from "flowbite";
import {CategoryComponent} from "./backoffice/category/category.component";
import {TitleDescriptionComponent} from "./backoffice/title-description/title-description.component";
import {BackofficeModule} from "./backoffice/backoffice.module";
import {CategoryPageComponent} from "./pages/category/category.page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackofficeModule, CategoryPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  ngOnInit() {
    initFlowbite();

    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Change the icons inside the button based on previous settings
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcon!.classList.remove('hidden');
    } else {
      themeToggleDarkIcon!.classList.remove('hidden');
    }

    const themeToggleBtn = document.getElementById('theme-toggle');

    themeToggleBtn!.addEventListener('click', () => {
      // Toggle icons inside button
      themeToggleDarkIcon!.classList.toggle('hidden');
      themeToggleLightIcon!.classList.toggle('hidden');

      // If set via local storage previously
      if (localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        } else {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        }

        // If NOT set via local storage previously
      } else {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('color-theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('color-theme', 'dark');
        }
      }
    });
  }
}
