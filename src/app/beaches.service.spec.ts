import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';

import { BeachesService } from './beaches.service';

describe('BeachesService', () => {
  let httpTestingController: HttpTestingController;
  let service: BeachesService;
  let mockedBeaches;
  beforeAll(async () => {
    const response = await fetch('../assets/playas.json');
    mockedBeaches = await response.json();
  });
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeachesService],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(BeachesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getBeachesFromJson', () => {
    const jsonUrl = './assets/playas.json';
    service.getBeachesFromJson(jsonUrl).subscribe(beaches => {
      expect(mockedBeaches).toEqual(beaches);
    });

    const req = httpTestingController.expectOne(jsonUrl);
    req.flush(mockedBeaches);
    expect(req.request.method).toBe('GET');
    httpTestingController.verify();
  });
});
