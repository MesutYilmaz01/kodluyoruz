import React from 'react'

function OncekiSonuclar() {
    const items = {...localStorage}
    let temp = []
    for (const item in items) {
        temp.push(item.split(","))
    }
    return (
        <div className="row">
            <div className="col-6 offset-3 mt-5">
                <h3 className="text-center">Önceki Sonuçlar</h3>
                <div className="border border-5 p-4 mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Boy</th>
                                <th scope="col">Kilo</th>
                                <th scope="col">BMI</th>
                            </tr>
                        </thead>
                        <tbody>
                                {temp.map((item, i) => (
                                    <tr key={i}>
                                    {item.map( (element,k) => (
                                        <td key={k}>{element}</td>
                                    ))}
                                    </tr>
                                ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default OncekiSonuclar
