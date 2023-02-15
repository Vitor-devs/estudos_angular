import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriacaoMinhaComponent } from './criacao-minha.component';

describe('CriacaoMinhaComponent', () => {
  let component: CriacaoMinhaComponent;
  let fixture: ComponentFixture<CriacaoMinhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriacaoMinhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriacaoMinhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
