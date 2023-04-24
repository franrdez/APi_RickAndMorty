import { Directive, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appCharacterCardClickable]',
})
export class CharacterCardClickableDirective {
  @Input() name: string = '';

  constructor(private router: Router) {}

  @HostListener('click')
  onClick(): void {
    this.router.navigate(['/character-details', this.name]);
  }
}
