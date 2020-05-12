import React, { Component } from 'react';
import './Tour.scss';

class Tour extends Component {
    state = {
        showInfo : false,
        showIcon: true
    }
    showInfoHandler = () =>{
        this.setState({
            showInfo: !this.state.showInfo,
            showIcon: !this.state.showIcon
        })
    }

    render() { 
        const {id, city, img, name, info} = this.props.tour
        const {removeTour} = this.props
        return (
            <article className="tour">
                <div className="img-container">
                    <img 
                        src={img}
                        alt=""/>
                    <span 
                        className="close-btn"
                        onClick={() => {
                            removeTour(id);
                            }}>
                        <i  className="fa fa-window-close" />
                    </span>
                </div>
                <div className="tour-info">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>
                        info{" "}
                        <span>
                            <i onClick={this.showInfoHandler}className={this.state.showIcon ? "fa fa-caret-down"
                            : "fa fa-caret-right"}/>
                        </span>
                    </h5>
                    {this.state.showInfo ? <p>{info}</p> : null}
                </div>
            </article>
        );
    }
}

export default Tour;