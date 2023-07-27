import { useState } from "react"
import Company from "./Company"



const SpotCheck2 = () => {
    let companiesData = [
        { name: "Tesla", revenue: 140 },
        { name: "Microsoft", revenue: 300 },
        { name: "Google", revenue: 600 }]
    const [companies, setCompanies] = useState(companiesData)
    return companies.map(({ name, revenue }) =>
        <Company name={name} revenue={revenue} key={name}></Company>)
}

export default SpotCheck2