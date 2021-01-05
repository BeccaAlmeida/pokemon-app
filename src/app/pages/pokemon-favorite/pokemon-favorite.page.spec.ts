import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PokemonFavoritePage } from './pokemon-favorite.page';

describe('PokemonFavoritePage', () => {
  let component: PokemonFavoritePage;
  let fixture: ComponentFixture<PokemonFavoritePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonFavoritePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonFavoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
