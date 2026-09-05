import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './character-list.html',
  styleUrls: ['./character-list.css']
})
export class CharacterList implements OnInit {
  private readonly characterService = inject(CharacterService);

  characters: Character[] = [];
  loading: boolean = true;
  errorMessage: string | null = null;

  // guarda los muertos 
  markedIds = new Set<number>();

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(page: number = 1): void {
    this.loading = true;
    this.errorMessage = null;

    this.characterService.getCharacters(page).subscribe({
      next: (response) => {
        this.characters = response.results;
        this.loading = false;
      },
      error: (err) => {
        console.error('Error al obtener personajes:', err);
        this.errorMessage = 'Hubo un error al cargar los personajes. Intente de nuevo.';
        this.loading = false;
      }
    });
  }

  //el estado de las tarjetas (muertos o no )
  toggleMark(id: number): void{
    if (this.markedIds.has(id)){
      this.markedIds.delete(id);
    } else{
      this.markedIds.add(id);
    }
  }
  // consultar estado  :)  :(
  isMarked(id: number): boolean{
    return this.markedIds.has(id);
  }
}