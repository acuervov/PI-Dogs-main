import React from "react";
import Nav from "../Navbar";
import Cards from '../Cards'
import { connect } from "react-redux";

export function Search (props){

    return (
        <div>
           <Nav/>
           <Cards perritos={props.Perritos}/>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return 0; 
}

const mapStateToProps = state => {
    return {
        Perritos: state.searchResult,
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Search)
