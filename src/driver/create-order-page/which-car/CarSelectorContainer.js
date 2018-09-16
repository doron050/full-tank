import {getSelectedOrder} from '../../../store/selected-order/Selectors';
import {connect} from 'react-redux';
import CarSelector from './CarSelector';
import {getCars} from '../../../store/cars/Selectors';
import {updateSelectedOrder} from '../../../store/selected-order/Actions';

function mapStateToProps(state){
    return {
        carNumber : getSelectedOrder(state).carNumber,
        cars: getCars(state),
    }
}

function mapDispatchToProps(dispatch){
    return {
        selectCar: (catNumber) => dispatch(updateSelectedOrder("carNumber", catNumber))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CarSelector);