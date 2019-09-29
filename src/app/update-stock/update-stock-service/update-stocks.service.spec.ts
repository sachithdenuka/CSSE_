import { TestBed } from '@angular/core/testing';

import { UpdateStocksService } from './update-stocks.service';

describe('UpdateStocksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateStocksService = TestBed.get(UpdateStocksService);
    expect(service).toBeTruthy();
  });
});
