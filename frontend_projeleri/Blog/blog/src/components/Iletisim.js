import React from 'react'
import Footer from './Footer'

function Iletisim() {
    return (
        <>
            <div className="row text-center mt-3">
                <h2>İletişim</h2>
            </div>
            <div className="row mt-3 mb-3 p-2">
                <div className="col-1 offset-3">
                    <label htmlFor="name">Adınız : </label>
                </div>
                <div className="col-4">
                    <input type="text" className="form-control" id="name"></input>
                </div>
            </div>
            <div className="row mt-3 mb-3 p-2">
                <div className="col-1 offset-3">
                    <label htmlFor="surname">Soyadınız : </label>
                </div>
                <div className="col-4">
                    <input type="text" className="form-control" id="surname"></input>
                </div>
            </div>
            <div className="row mt-3 mb-3 p-2">
                <div className="col-1 offset-3">
                    <label htmlFor="email">Email : </label>
                </div>
                <div className="col-4">
                    <input type="text" className="form-control" id="email"></input>
                </div>
            </div>
            <div className="row mt-3 mb-3 p-2">
                <div className="col-1 offset-3">
                    <label htmlFor="message">Mesajınız : </label>
                </div>
                <div className="col-4">
                    <textarea type="text" className="form-control" id="message" rows="14"></textarea>
                </div>
            </div>
            <div className="d-flex justify-content-center mb-4">
                <div className="col-1">
                    <button className="btn btn-primary">Gönder</button>
                </div>
            </div>
            
          <Footer/>  
        </>
    )
}

export default Iletisim
