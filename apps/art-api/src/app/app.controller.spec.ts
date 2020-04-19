import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { DblService } from './dbl.service';
import { of } from 'rxjs';

export class DblServiceStub {
    createAnnouncement = jest.fn(() => (of({}) as any));
    getAnnouncement = jest.fn(() => (of({}) as any));
    updateAnnouncement = jest.fn(() => (of({}) as any));
    getAll = jest.fn(() => (of({}) as any));
}

describe('AppController', () => {
    let module: TestingModule;
    let dblService: DblService;
    let appController: AppController;

    beforeEach(async () => {
        module = await Test.createTestingModule({
            controllers: [AppController],
            providers: [
                {
                    provide: DblService,
                    useClass: DblServiceStub
                }
            ]
        }).compile();

        dblService = module.get(DblService);
        appController = module.get<AppController>(AppController);
    });

    describe('Get All Movies', () => {
        it('Should return all movies', async (done) => {
            appController.getDataMovies();
            expect(dblService.getAll).toHaveBeenCalledWith('movies');
            done();

        });
    });
});
