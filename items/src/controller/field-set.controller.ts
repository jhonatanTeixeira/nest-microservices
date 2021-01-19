import {Controller} from "@nestjs/common";
import {Crud, CrudController} from "@nestjsx/crud";
import {FieldSet} from "../entity/field-set";
import {FieldSetService} from "../service/field-set.service";
import {ApiTags} from "@nestjs/swagger";

@Crud({
  model: {
    type: FieldSet,
  },
  query: {
    join: {
      fields: {
          eager: true
      }
    },

  }
})
@Controller('field-sets')
@ApiTags('field-sets')
export class FieldSetController implements CrudController<FieldSet> {
    constructor(readonly service: FieldSetService) {}
}
