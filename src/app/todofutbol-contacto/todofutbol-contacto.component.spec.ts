import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodofutbolContactoComponent } from './todofutbol-contacto.component';

describe('TodofutbolContactoComponent', () => {
  let component: TodofutbolContactoComponent;
  let fixture: ComponentFixture<TodofutbolContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodofutbolContactoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodofutbolContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
