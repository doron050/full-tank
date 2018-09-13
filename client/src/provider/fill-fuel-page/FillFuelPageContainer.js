import {connect} from 'react-redux';
import FillFuelPage from './FillFuelPage';

const mapStateToProps = (state) => {
    return {
        selectedOrder: {
            createdTime: "9/13/2018, 10:10:52 PM",
            lastFuelTime: "2018-09-13T21:46",
            id: 113,
            isFullTank: false,
            latitude: 32.0721328,
            longitude: 34.78877870000001,
            maxPrice: "123"

        },
        selectedCar: {
            Description: "Dad's car",
            fuelType: 'Octane98',
            image: 'https://image.ibb.co/mhDBUp/Capture.png',
            number: '12-345-44',
            driverPhone: '052-44556676'
        }
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        vocabularyActions: () => ""
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FillFuelPage);
