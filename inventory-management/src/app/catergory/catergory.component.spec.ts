import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatergoryComponent } from './catergory.component';

describe('CatergoryComponent', () => {
  let component: CatergoryComponent;
  let fixture: ComponentFixture<CatergoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatergoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CatergoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
