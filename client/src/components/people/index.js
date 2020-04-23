import React from 'react';
import PropTypes from 'prop-types';
import Table from '../common/tables/table';
import TableHeader from '../common/tables/table-header';
import TableBody from '../common/tables/table-body';
import TableRow from '../common/tables/table-row';
import Td from '../common/tables/table-data';
import EmptyRow from '../common/tables/empty-row';
import NewPersonFormContainer from './new-person/new-person-form-container';
import Modal from '../common/modal';
import {
  renderAgentIcon,
  renderBuyerIcon,
  renderSellerIcon
} from '../../utils/view-utils';

import '../../styles/table-styles.css';

export default class PersonIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showModal: false }
    this.showCreateModal = this.showCreateModal.bind(this)
    this.hideCreateModal = this.hideCreateModal.bind(this)
  }

  componentDidMount() {
    const { getPeople } = this.props;
    getPeople()
  }

  showCreateModal() { this.setState({ showModal: true }) }

  hideCreateModal() { this.setState({ showModal: false }) }

  render() {
    const { activePeople } = this.props;
    const headers = [
      { name: 'First Name' },
      { name: 'Last Name' },
      { name: 'Buyer', classes: 'text-center' },
      { name: 'Seller', classes: 'text-center' },
      { name: 'Agent', classes: 'text-center' }
    ]

    const tableRows = Array.isArray(activePeople) && activePeople.length ?
      this.renderPeople(activePeople) : this.renderEmptyRow()

    return (
      <div>
        <button
          onClick={this.showCreateModal}
          className="btn btn-success float-right create-button"
        >
          Create New Person
        </button>

        <Modal
          show={this.state.showModal}
          handleClose={this.hideCreateModal}
          modalTitle="Create Person"
        >
          <NewPersonFormContainer handleFormAction={this.hideCreateModal} />
        </Modal>

        <Table>
          <TableHeader headers={headers} />
          <TableBody>
            {tableRows}
          </TableBody>
        </Table>
      </div>
    );
  }

  renderPeople(people) {
    const { history } = this.props;
    return people.map((person, index) => {
      const personId = person.id;
      const buyer = person.isBuyer;
      const seller = person.isSeller;
      const agent = person.isAgent;

      return (
        <TableRow
          key={index}
          clickable={true}
          to={`/people/${personId}`}
          history={history}
        >
          <Td>{person.firstName}</Td>
          <Td>{person.lastName}</Td>
          <Td classes="text-center">{ buyer ? renderBuyerIcon() : '' }</Td>
          <Td classes="text-center">{ seller ? renderSellerIcon() : '' }</Td>
          <Td classes="text-center">{ agent ? renderAgentIcon() : '' }</Td>
        </TableRow>
      )
    })
  }

  renderEmptyRow() {
    return (
      <EmptyRow colspan="5" classes="text-center" rowText="You currently have no active people."/>
    )
  }

}

PersonIndex.displayName = 'PersonIndex';

PersonIndex.propTypes = {
  activePeople: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      isAgent: PropTypes.bool.isRequired,
      isBuyer: PropTypes.bool.isRequired,
      isSeller: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired
};
