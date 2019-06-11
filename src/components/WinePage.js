import React, {Component} from 'react';
import * as WinesService from '../services/Wines';
import Loader from './Loader'
import Wine from './Wine'

export class WinePage extends Component {
    state = {
        loading: false,
        wine: null,
    };

    componentDidMount() {
        this.setState({ loading: true }, () => {
          WinesService.fetchWine(this.props.params.wineId).then(wine => {
            this.setState({
              loading: false,
              wine
            });
          });
        });
    }

    render() {
        if (this.state.loading) {
          return <div className="center-align"><Loader /></div>
        }
        return (
          <Wine wine={this.state.wine}/>
        );
    }
}

export default WinePage