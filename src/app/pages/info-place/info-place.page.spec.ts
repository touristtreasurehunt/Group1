import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoPlacePage } from './info-place.page';

describe('InfoPlacePage', () => {
  let component: InfoPlacePage;
  let fixture: ComponentFixture<InfoPlacePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoPlacePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoPlacePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
