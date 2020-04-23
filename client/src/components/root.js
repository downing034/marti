import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import AddressContainer from './addresses/container';
import AddressPageContainer from './addresses/address-page-container';
import PeopleContainer from './people/container';
import PersonPageContainer from './people/person-page-container';
import ReportsContainer from './reports/container';
import TrashContainer from './trash/container';
import NotFound from './common/not-found';

import Loader from './common/loader';
import Sidebar from './sidebar';

import '../styles/app.css'
import '../styles/sidebar-nav.css'

export default class Root extends React.Component {
  constructor(props) {
    super(props)
    this.state = { sidebarExpanded: true }
    this.toggleSidebar = this.toggleSidebar.bind(this)
  }

  componentDidMount() {
    const { getAddresses, getPeople } = this.props;
    getAddresses().then(() => {
      getPeople()
    })

  }

  toggleSidebar() {
    const { sidebarExpanded } = this.state;
    this.setState({sidebarExpanded: !sidebarExpanded})
  }

  render() {
    const { addressesLoaded, peopleLoaded } = this.props;
    const { sidebarExpanded } = this.state;

    const necessaryDataLoaded = !addressesLoaded && !peopleLoaded
    if (necessaryDataLoaded) { return ( <Loader size="10x" color="#FD2937" /> ) }

    return (
      <div>
        <button
          className={`sidebar-toggle ${ sidebarExpanded ? "sidebar-toggle-expanded" : "sidebar-toggle-collapsed"}`}
          onClick={this.toggleSidebar}>
          {this.renderToggleArrow()}
        </button>
        <Sidebar expanded={sidebarExpanded} />

        <div className={`main container ${sidebarExpanded ? "main-expanded": "main-collapsed"}`}>

          <Switch>
            <Route path="/" exact component={AddressContainer} />
            <Route exact path="/addresses" component={AddressContainer} />
            <Route exact path="/addresses/:addressId" component={AddressPageContainer} />
            <Route exact path="/people" component={PeopleContainer} />
            <Route exact path="/people/:personId" component={PersonPageContainer} />
            <Route exact path="/reports" component={ReportsContainer} />
            <Route exact path="/trash" component={TrashContainer} />
            <Route component={NotFound} />
          </Switch>
        </div>

      </div>
    );
  }

  renderToggleArrow() {
    const { sidebarExpanded } = this.state;
    if (sidebarExpanded) {
      return (
        <FontAwesomeIcon
          icon={faAngleDoubleLeft}
          size="1x"
          color="#FD2937"
        />
      )
    } else {
      return (
        <FontAwesomeIcon
          icon={faAngleDoubleRight}
          size="1x"
          color="#FD2937"
        />
      )
    }
  }
}

Root.displayName = 'Root';
