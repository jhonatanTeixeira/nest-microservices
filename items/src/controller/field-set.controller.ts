import {Controller} from "@nestjs/common";
import {Crud, CrudController} from "@nestjsx/crud";
import {FieldSet} from "../entity/field-set";
import {FieldSetService} from "../service/field-set.service";

@Crud({
    model: {
        type: FieldSet,
    },
})
@Controller('field-sets')
export class FieldSetController implements CrudController<FieldSet> {
    constructor(readonly service: FieldSetService) {}
}
