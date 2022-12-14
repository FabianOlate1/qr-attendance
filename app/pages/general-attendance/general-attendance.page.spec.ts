import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

import { GeneralAttendancePage } from './general-attendance.page';

describe('GeneralAttendancePage', () => {
  let component: GeneralAttendancePage;
  let fixture: ComponentFixture<GeneralAttendancePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralAttendancePage ],
      imports: [IonicModule.forRoot(),
        IonicStorageModule.forRoot(),
        FormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(GeneralAttendancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
