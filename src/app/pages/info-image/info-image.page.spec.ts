import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoImagePage } from './info-image.page';

describe('InfoImagePage', () => {
  let component: InfoImagePage;
  let fixture: ComponentFixture<InfoImagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoImagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoImagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
