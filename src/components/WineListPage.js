import React, {Component} from 'react';
import * as WinesService from '../services/Wines';
import Loader from './Loader'
import WineList from './WineList'

export class WineListPage extends Component {
    state = {
        loading: false,
        wines:[],
    };

    componentDidMount() {
        this.setState({ loading: true }, () => {
          WinesService.fetchWinesFrom(this.props.params.regionId).then(wines => {
            this.setState({
              loading: false,
              wines
            });
          });
        });
    }

    onSelectWine = (wineId) => {
        this.props.router.push({
        pathname: `/regions/${this.props.params.regionId}/wines/${wineId}`
        });
    };
        
    render() {
        if (this.state.loading) {
          return <div className="center-align"><Loader /></div>
        }
        return (
          <WineList
            wines={this.state.wines}
            wine={{}} 
            onSelectWine = {this.onSelectWine}/>
        );
    }
}

export default WineListPage