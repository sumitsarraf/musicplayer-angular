/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MusicListComponent } from './music-list.component';

describe('MusicListComponent', () => {
  let component: MusicListComponent;
  let fixture: ComponentFixture<MusicListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
