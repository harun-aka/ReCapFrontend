import { CarDetailDto } from "./carDetailDto";
import { CarImage } from "./carImage";

export interface CarImageDetailDto extends CarDetailDto{
    carImages:CarImage[]
}