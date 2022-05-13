import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ambilData } from '../action'
import { Table } from "react-bootstrap"

export class ListGenre extends Component {

    componentDidMount() {
        this.props.ambilData();
    }

    renderList() {

        return this.props.listGenre.map((genre, index) => {

            return (
                <Table striped hover variant="dark" style={{ width: '60%', margin: 'auto' }}>
                    <thead>
                        <tr>
                            <th style={{ width: "5%" }}></th>
                            <th style={{ width: "15%" }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={index}>
                            <td>{genre.no}</td>
                            <td>{genre.name}</td>
                        </tr>
                    </tbody>
                </Table >
            )
        })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const stateToProps = state => {
    return { listGenre: state.listGenre }
}

export default connect(stateToProps, { ambilData })(ListGenre)