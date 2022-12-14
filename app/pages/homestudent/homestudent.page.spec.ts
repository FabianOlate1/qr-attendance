import { IonicStorageModule } from '@ionic/storage-angular';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomestudentPage } from './homestudent.page';

xdescribe('HomestudentPage', () => {
  let component: HomestudentPage;
  let fixture: ComponentFixture<HomestudentPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomestudentPage ],
      imports: [IonicModule.forRoot(),
      IonicStorageModule.forRoot()
    ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomestudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
