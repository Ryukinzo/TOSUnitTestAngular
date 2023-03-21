import { TestBed } from '@angular/core/testing';
import { CatService } from './cat.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CatService', () => {
  let service: CatService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatService]
    });
    service = TestBed.inject(CatService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Cat[]>', () => {
    const mockCats = [
      {name:"Savannah",id:1},
      {name:"Japanese Bobtail",id:2},
      {name:"Korat",id:3},
      {name:"Somali",id:4},
      {name:"Russian Blue",id:5},
      {name:"Exotic Shorthair",id:6},
      {name:"Toyger",id:7},
      {name:"Siberian",id:8},
      {name:"Serengeti",id:9},
      {name:"Sphynx",id:10}
    ];

    service.getCats().subscribe(cats => {
      expect(cats.length).toBe(10);
      expect(cats).toEqual(mockCats);
    });

    const req = httpMock.expectOne('https://637deb23cfdbfd9a63a0f41e.mockapi.io/P2G4/cat');
    expect(req.request.method).toBe('GET');
    req.flush(mockCats);
  });
});
