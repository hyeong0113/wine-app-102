import React, {Component} from 'react';
import * as WinesService from '../services/Wines';
import Loader from './Loader'
import Regions from './Regions'

export class RegionsPage extends Component {
    state = {
        loading: false,
        regions:[],
    };

    componentDidMount() {
        this.setState({ loading: true }, () => {
          WinesService.fetchRegions().then(regions => {
            this.setState({
              loading: false,
              regions,
            });
          });
        });
    }
    onSelectRegion = (region) => {
        this.props.router.push({
        pathname: `/regions/${region}`
        });
    };
    render() {
      console.log('dd', this.props)
        if (this.state.loading) {
          return <div className="center-align"><Loader /></div>
        }
        return (
          <Regions
            regions={this.state.regions}
            region={{}} 
            onSelectRegion = {this.onSelectRegion}/>
        );
    }
}

export default RegionsPage