import React, {Component} from 'react';
import {connect} from "react-redux";
import './Foods.css';
import {addFoodFunc, resetCounter} from "../store/actions/counterActions";
import Food from "../components/Food";


class Foods extends Component {

    state = {
        name: 'Meat',
        imgPath: './foods/meat.jpg'
    };

    handleChangeFood = (e) => {
        this.setState({
            name: e.target.value,
            imgPath: './foods/' + e.target.value.toLowerCase() + '.jpg'

        });

        //console.log(e.target.value);
    };

    handleAdd = () => {
        this.props.addFood(this.state.name);
    };

    handleReset = () => {
        this.props.reset();
    };

    render() {
        return (
            <div className={'container'}>
                <div className={'food-container justify-content-center column col-lg-6 col-md-8 col-sm-10 col-12'}>
                    <div className={'row'}>
                        <div className={'col-12'}>
                            <h3 style={{color: '#fff', textAlign: 'center', fontSize: '1.7em'}} className={'badge'}>
                                Foods &nbsp;
                                <p className='badge badge-pill badge-info'>{this.props.nums}</p>
                            </h3>
                        </div>
                    </div>
                    <div className={'row align-items-center justify-content-center'}>
                        <div className={'col-md-3 justify-content-center'}>
                            <span className={'img-div'}>
                                <img src={this.state.imgPath} alt={'Fish'} className={'img rounded'}/>
                            </span>
                        </div>
                        <div className={'col-md-4'}>
                            <select className={'form-control '} onChange={e => this.handleChangeFood(e)}>
                                <option>Meat</option>
                                <option>Chicken</option>
                                <option>Burger</option>
                                <option>Fish</option>
                                <option>Pasta</option>
                                <option>Salad</option>
                            </select>
                        </div>
                        <div className={'col-md-2 align-items-center'}>
                            <button className={'btn btn-success'} onClick={this.handleAdd}>Add</button>
                        </div>
                        <div className={'col-md-2 align-items-center'}>
                            <button className={'btn btn-light'} onClick={this.handleReset}>Reset</button>
                        </div>
                    </div>

                    <br/>
                    <Food/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    nums: state.counterReducer.foods.length,
});

const mapDispatchToProps = dispatch => ({
    addFood: name => dispatch(addFoodFunc(name)),
    reset: () => dispatch(resetCounter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Foods);

