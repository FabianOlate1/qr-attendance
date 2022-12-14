import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { PassrecoveryPage } from './passrecovery.page';

describe('PassrecoveryPage', () => {
  let component: PassrecoveryPage;
  let fixture: ComponentFixture<PassrecoveryPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PassrecoveryPage ],
      imports: [IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PassrecoveryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
