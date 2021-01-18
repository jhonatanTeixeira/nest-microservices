import {Injectable} from "@nestjs/common";
import {TypeOrmCrudService} from "@nestjsx/crud-typeorm";
import {FieldSet} from "../entity/field-set";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class FieldSetService extends TypeOrmCrudService<FieldSet> {
    constructor(@InjectRepository(FieldSet) repository) {
        super(repository);
    }
}
