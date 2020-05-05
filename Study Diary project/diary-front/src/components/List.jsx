import React, { Component } from 'react'
import Data from './Data'
import { fetchAllData } from '../service/apiclient';

export default class List extends Component {

    constructor(props) {
        super(props);
        this.state = { allData: [] }
    }
    componentDidMount() {
        this.fetchDataList();
    }

    fetchDataList = () => {
        fetchAllData().then(allData => {
            this.setState({ allData });
        })
    }
    render() {
        const dataitems = this.state.allData
            .map((data) => {
                return <Data {...this.props} data={data} key={data.id} />
            })
        return (
            <div>
                <div>
                    {dataitems}
                </div>
            </div>
        )
    }
}