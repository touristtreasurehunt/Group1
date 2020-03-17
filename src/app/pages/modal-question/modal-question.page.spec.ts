import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalQuestionPage } from './modal-question.page';

describe('ModalQuestionPage', () => {
  let component: ModalQuestionPage;
  let fixture: ComponentFixture<ModalQuestionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalQuestionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalQuestionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
