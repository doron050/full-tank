import {connect} from "react-redux";
import HomePage from "./HomePage";

function mapStateToProps(state){
    return {
        name: "Yaron"
    }
}

function mapDispatchToProps(dispatch){
    return {
        updateName: (newName) => {}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);