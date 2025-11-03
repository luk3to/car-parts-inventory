import CarController from './CarController'
import PartController from './PartController'

const Controllers = {
    CarController: Object.assign(CarController, CarController),
    PartController: Object.assign(PartController, PartController),
}

export default Controllers