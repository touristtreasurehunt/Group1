import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PhotoCollectionPage } from './photo-collection.page';

describe('PhotoCollectionPage', () => {
  let component: PhotoCollectionPage;
  let fixture: ComponentFixture<PhotoCollectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoCollectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
