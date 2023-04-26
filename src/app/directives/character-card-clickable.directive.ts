import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appCharacterCardClickable]',
})
export class CharacterCardClickableDirective {
  @Input() id: number = 0;

  constructor(private router: Router) {}

  @HostListener('click')
  onClick(): void {
    this.router.navigate(['/character-details', this.id]);
  }
}
