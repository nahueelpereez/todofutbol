import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodofutbolComprasComponent } from './todofutbol-compras.component';

describe('TodofutbolComprasComponent', () => {
  let component: TodofutbolComprasComponent;
  let fixture: ComponentFixture<TodofutbolComprasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodofutbolComprasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodofutbolComprasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
