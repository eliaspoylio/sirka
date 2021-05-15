import { HttpClient } from '@angular/common/http';
import * as events from 'events';
import { EventService } from './event.service';

describe('EventService', () => {
    let service: EventService;
    let httpClientSpy: { get: jasmine.Spy };

    beforeEach(() => {
        httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
        service = new EventService(httpClientSpy as any);
    });

    it('should return events from MyHelsinki API', () => {
        
      });
})