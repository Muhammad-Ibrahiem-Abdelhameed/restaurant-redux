import React from 'react';
import {connect} from "react-redux";
import {removeFood, addCounter, subtractCounter} from "../store/actions/counterActions";

const Food = (props) =>
    props.foods.map((value, index) => (
            <div key={index} className={'row justify-content-center'}>
                <br/>
                <div className={'col-md-5 col-4 justify-content-center m-auto'}>
                    <span className={'img-div'}>
                        <img src={value.imgPath} alt={value.name} className={'img rounded-circle'}/>
                        <p style={{ fontWeight:'bold', fontSize:'1.1em'}} className={'badge badge-info'}>{value.name}</p>
                    </span>
                </div>
                <div className={'col-md-2 col-2 justify-content-center m-auto'}>
                    <span>
                        {value.orders === 0 ?
                            <div className='badge badge-warning' style={{fontSize:'1.2em'}}>zero</div>
                            : <div className={'badge badge-primary'} style={{fontSize:'1.2em'}}>{value.orders}</div>
                        }
                    </span>
                </div>
                <div className={'col-md-2 col-4 justify-content-center m-auto'}>
                        <div className="btn-group justify-content-center mr-2" role="group">
                            <button type="button" className="btn btn-primary" onClick={()=>props.addCounter(value.id)}>
                                <i className="text-light fas fa-plus"/>
                            </button>
                            <button type="button" className="btn btn-warning" onClick={()=>props.subtractCounter(value.id)}>
                                <i className="text-light fas fa-minus"/>
                            </button>
                        </div>

                </div>
                <div className={'col-md-3 col-2 justify-content-center m-auto'}>
                    <button type="button" className="btn btn-danger" onClick={()=>props.removeFood(value.id)}>
                        <i className="text-light fas fa-trash"/>
                    </button>
                </div>
            </div>
        )
    );


const mapStateToProps = state => ({
    foods: state.counterReducer.foods
});

const mapDispatchToProps = dispatch => ({
    removeFood : id => dispatch(removeFood(id)),
    addCounter : id => dispatch(addCounter(id)),
    subtractCounter : id => dispatch(subtractCounter(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(Food);


