import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {  MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-cadastro',
  imports: [MatCardModule, FormsModule,
    MatFormFieldModule, MatInputModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.scss',
})
export class Cadastro {

}
