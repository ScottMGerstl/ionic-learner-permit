import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

export abstract class BaseService<DataT extends { id: string }> {
    private idSeed = 0;
    private data: DataT[] = [];

    constructor() {
        this.seedData();
    }

    getAll() {
        return of([...this.data]).pipe(delay(1500));
    }

    getById(id: string) {
        const result = this.data.find((x) => x.id === id);
        return of(result).pipe(delay(900));
    }

    create(data: Omit<DataT, 'id'>) {
        const idObject: { id: string } = { id: (++this.idSeed).toString() };
        const addition: DataT = { ...data, ...idObject } as DataT;

        this.data = [...this.data, addition];
        return of(idObject).pipe(delay(700));
    }

    update(id: string, data: Omit<DataT, 'id'>) {
        const index = this.data.findIndex((x) => x.id === id);
        const addition: DataT = { id, ...data } as DataT;
        this.data.splice(index, 1, addition);
        this.data = [...this.data];

        return of({}).pipe(delay(800));
    }

    delete(id: string) {
        this.data = this.data.filter((x) => x.id !== id);
        return of({}).pipe(delay(500));
    }

    protected abstract seedData();
}
