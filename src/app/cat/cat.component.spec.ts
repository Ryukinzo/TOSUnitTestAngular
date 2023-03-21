import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CatComponent } from './cat.component';

describe('CatComponent', () => {
  let component: CatComponent;
  let fixture: ComponentFixture<CatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain "cat works!" text', () => {
    const element = fixture.debugElement.query(By.css('p')).nativeElement;
    expect(element.textContent).toContain('cat works!');
  });
});
