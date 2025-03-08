import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCriarComponent } from './home-criar.component';

describe('HomeCriarComponent', () => {
  let component: HomeCriarComponent;
  let fixture: ComponentFixture<HomeCriarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCriarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeCriarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
