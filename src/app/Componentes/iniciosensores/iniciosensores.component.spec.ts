import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IniciosensoresComponent } from './iniciosensores.component';

describe('IniciosensoresComponent', () => {
  let component: IniciosensoresComponent;
  let fixture: ComponentFixture<IniciosensoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IniciosensoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IniciosensoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
