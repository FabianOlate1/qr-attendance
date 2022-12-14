import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { ConfirmationPage } from './confirmation.page';

describe('ConfirmationPage', () => {
  let component: ConfirmationPage;
  let fixture: ComponentFixture<ConfirmationPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationPage ],
      imports: [IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
