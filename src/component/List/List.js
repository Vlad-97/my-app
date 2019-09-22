import React from 'react';
import { API_URL } from '../../Config';
import Table from './Table';
import { handleResponse } from '../../helpers';
import Loading from '../common/Loading';
import Pagination from './Pagination';
import './Table.css';

class List extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: false,
            currencies: [],
            error: null,
            totalPages: 0,
            page: 1,
        };
    }
    componentDidMount() {
        this.fetchCurrencies()
    }

    fetchCurrencies() {
        this.setState({ 
            loading: true
        })

        const { page } = this.state;
        fetch(`${API_URL}/cryptocurrencies?page=${page}&perPage=20`)
            .then(handleResponse)
            .then((data) => {
                const { currencies, totalPages } = data;
                this.setState({
                    currencies: currencies,
                    totalPages: totalPages,
                    loading: false,
                });
            })
            .catch((error) => {
                this.setState({
                    error: error,
                    loading: false,
                })
            })
    }

    handlePaginationClick = (direction) => {
        let nextPage = this.state.page;
        nextPage = direction === 'next' ? nextPage + 1 : nextPage - 1;

        this.setState({
            page: nextPage
        }, () => {
            this.fetchCurrencies()
        })
    }

    render() {
        const { loading, currencies, error, page, totalPages } = this.state;
        console.log(this.props)

        if (loading) {
            return (<div className='Loading-container' >
                <Loading /> </div>
            )
        }
        if (error) {
            return (
                <div className="error">{error}</div>
            )
        }

        return (
            <div>
                <Table
                    currencies={currencies}
                />
                <Pagination
                    page={page}
                    totalPages={totalPages}
                    handlePaginationClick={this.handlePaginationClick}
                />
            </div>
        )
    }
}

export default List;