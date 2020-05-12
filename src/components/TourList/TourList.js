import React, { Component } from 'react';
import './TourList.scss';
import Tour from '../Tour/Tour';
import {tourData} from './tourData';

class TourList extends Component {
    state = {
       tours : tourData
    }

    removeTour = id => {
        const tours = this.state.tours;
        const filteredTours = tours.filter((tour) => tour.id !== id)
        this.setState({
            tours: filteredTours
        })
    }
    render() {
        const tours = this.state.tours;

        return (
            <section className="tourlist">
                {tours.map(tour => {
                    return(
                        <Tour 
                        key={tour.id} 
                        tour={tour}
                        removeTour={this.removeTour}/>
                    )
                })}
                
            </section>
        );
    }
}

export default TourList;