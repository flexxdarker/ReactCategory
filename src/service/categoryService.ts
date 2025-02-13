import axios from "axios";
import { TryError } from "../helpers/common-methods";
import { CategoryCreationModel } from "../models/CategoryCreationModel";
import { formPostConfig} from "../helpers/constans.tsx";
import {APP_ENV} from "../env";

export const categoryService = {
    create: (model: CategoryCreationModel) =>TryError<number>(()=> axios.post<number>(APP_ENV.CATEGORIES_API_URL + `/create`,model,formPostConfig)),
}