import {connect} from "react-redux";
import DriverHomePage from "./DriverHomePage";
import {getCars} from "../../../store/cars/selectors";

function mapStateToProps(state){
    return {
        driverName: 'Mark Z',
        selectedCar: getCars(state)[0],
        cars: getCars(state)
    }
}

function mapDispatchToProps(dispatch){
    return {
        updateSelectedCar: (newCar) => {}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverHomePage);