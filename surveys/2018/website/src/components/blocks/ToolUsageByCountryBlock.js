import React, { Component } from 'react'
import BlockTitle from '../elements/BlockTitle'
import { getToolName } from '../../helpers/wording'
import ToolUsageByCountryMapChart from '../charts/ToolUsageByCountryMapChart'

export default class ToolUsageByCountryBlock extends Component {
    render() {
        const { tool, data } = this.props

        return (
            <div className="block">
                <BlockTitle chart="tool-usage-by-country" tool={tool} />
                <div className="block block--text">
                    On average, <strong>{data.percentage}%</strong> of respondents have used{' '}
                    <strong>{getToolName(tool)}</strong> and would be happy to use it again.
                    Countries where this ratio is higher are shown in red, those where it's lower
                    are displayed in blue (countries with fewer than 20 total survey respondents are
                    omitted).
                </div>
                <ToolUsageByCountryMapChart data={data} tool={tool} average={data.percentage} />
            </div>
        )
    }
}