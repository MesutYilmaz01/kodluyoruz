import React from 'react'
import Textarea from './Textarea'
import Colors from './Colors'
import Input from './Input'

function Body() {
    return (
        <div>
            <Textarea/>
            <div className="row">
                <div className="col-md-6 offset-md-3 mt-3">                    
                    <div className="d-flex justify-content-between">    
                        <div className="row">
                            <Colors color="yellow"/>
                            <Colors color="green"/>
                            <Colors color="blue"/>
                            <Colors color="orange"/>
                            <Colors color="red"/>
                            <Colors color="gray"/>
                        </div>
                        <div className="row">
                            <Input/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
