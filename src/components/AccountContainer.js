import React, { Component } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
// import {transactions} from '../transactionsData'

class AccountContainer extends Component {

  state = {
    transactions: [],
    search: ''
  }

  componentDidMount() {
    fetch(`https://boiling-brook-94902.herokuapp.com/transactions`)
      .then(response => response.json())
      .then(data => this.setState({
        transactions: data
      }))
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    const desiredTransactions = this.state.transactions.filter(t =>
      t.category.toLowerCase().includes(this.state.search.toLowerCase()) 
      || t.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search handleChange={this.handleChange} />
        <TransactionsList transactions={desiredTransactions} />
      </div>
    )
  }
}

export default AccountContainer
