import {useState} from 'react'
import {nanoid} from 'nanoid'
import Diyet from './Diyet'


function Bmi() {
    const dietList = [
        {"foodName":"Black Forest Ham", "calories":290, "correctedTerm":"6 inch Black Forest Ham" },
        {"foodName":"Black Forrest Ham", "calories":290, "correctedTerm":"6 inch Black Forest Ham" },
        {"foodName":"Six inch Black Forest Ham", "calories":290},
        {"foodName":"6 inch Black Forest Ham", "foodType":"Six inch", "calories":290},
        {"foodName":"12 inch Black Forest Ham", "calories":580},
        {"foodName":"Footlong Black Forest Ham", "foodType":"Footlong", "calories":580},
        {"foodName":"Oven Roasted Chicken", "calories":320},
        {"foodName":"6 inch Oven Roasted Chicken", "foodType":"Six inch", "calories":320},
        {"foodName":"Six inch Oven Roasted Chicken", "calories":320},
        {"foodName":"12 inch Oven Roasted Chicken", "calories":640},
        {"foodName":"Footlong Oven Roasted Chicken", "foodType":"Footlong", "calories":640},
        {"foodName":"6 inch Roast Beef", "foodType":"Six inch", "calories":320},
        {"foodName":"Six inch Roast Beef", "calories":320},
        {"foodName":"12 inch Roast Beef", "calories":640},
        {"foodName":"Footlong Roast Beef", "foodType":"Footlong", "calories":640},
        {"foodName":"Rotisserie-Style Chicken", "calories":350},
        {"foodName":"Roasted Chicken", "calories":350},
        {"foodName":"Rotisserie Chicken", "foodType":"Chicken", "calories":350},
        {"foodName":"6 inch Rotisserie Chicken", "foodType":"Six inch", "calories":350},
        {"foodName":"Six inch Rotisserie Chicken", "calories":350}, 
        {"foodName":"12 inch Rotisserie Chicken", "calories":700},
        {"foodName":"Footlong Rotisserie Chicken", "foodType":"Footlong", "calories":700},
        {"foodName":"Rotisserie Chicken Sandwich", "calories":350},
        {"foodName":"Subway Club", "calories":310, "correctedTerm":"6 inch Subway Club" },
        {"foodName":"6 inch Subway Club", "foodType":"Six inch", "calories":310},
        {"foodName":"12 inch Subway Club", "calories":620},
        {"foodName":"Footlong Subway Club", "calories":620},
        {"foodName":"Chicken Teriyaki", "calories":370, "correctedTerm":"6 inch Sweet Onion Chicken Teriyaki" },
        {"foodName":"6 inch Chicken Teriyaki", "calories":370, "correctedTerm":"6 inch Sweet Onion Chicken Teriyaki" },
        {"foodName":"Sweet Onion Chicken Teriyaki", "calories":370, "correctedTerm":"6 inch Sweet Onion Chicken Teriyaki" },
        {"foodName":"6 inch Sweet Onion Chicken Teriyaki", "foodType":"Six inch", "calories":370},
        {"foodName":"12 inch Sweet Onion Chicken Teriyaki", "calories":740},
        {"foodName":"Footlong Teriyaki Chicken", "calories":740},
        {"foodName":"Footlong Sweet Onion Chicken Teriyaki", "calories":740},
        {"foodName":"Turkey Breast", "foodType":"Turkey", "calories":280, "correctedTerm":"6 inch Turkey Breast" },
        {"foodName":"6 inch Turkey and Cheese", "calories":280},
        {"foodName":"Six inch Turkey and Cheese", "calories":280},
        {"foodName":"6 inch Turkey Breast", "foodType":"Six inch", "calories":280},
        {"foodName":"12 inch Turkey Breast", "calories":560},
        {"foodName":"Footlong Turkey Breast", "calories":560},
        {"foodName":"Foot long Turkey", "calories":560, "correctedTerm":"Footlong Turkey Breast"},
        {"foodName":"Veggie Delite", "calories":280, "correctedTerm":"6 inch Veggie Delite" },
        {"foodName":"Veggie Delight", "calories":280, "correctedTerm":"6 inch Veggie Delite" },
        {"foodName":"6 inch Veggie Delite", "foodType":"Six inch", "calories":280},
        {"foodName":"Six inch Veggie Delite", "calories":280, "correctedTerm":"6 inch Veggie Delite" },
        {"foodName":"6 inch Veggie Delight", "calories":280, "correctedTerm":"6 inch Veggie Delite" },
        {"foodName":"12 inch Veggie Delite", "calories":560},
        {"foodName":"Footlong Veggie Delite", "calories":560},
        {"foodName":"Carved Turkey", "foodType":"Turkey", "calories":330},
        {"foodName":"6 inch Carved Turkey", "foodType":"Turkey", "calories":330},
        {"foodName":"12 inch Carved Turkey", "foodType":"Turkey", "calories":660},
        {"foodName":"Footlong Carved Turkey", "foodType":"Turkey", "calories":660},
        {"foodName":"Chicken and Bacon Ranch Melt", "foodType":"Chicken", "calories":590},
        {"foodName":"Chicken Bacon Ranch Melt", "foodType":"Chicken", "calories":590},
        {"foodName":"Cold Cut Combo", "calories":340},
        {"foodName":"Cold Cut", "calories":340},
        {"foodName":"6 inch Cold Cut Combo", "foodType":"Six inch", "calories":340},
        {"foodName":"12 inch Cold Cut Combo", "calories":680},
        {"foodName":"Footlong Cold Cut Combo", "calories":680},
        {"foodName":"Italian BMT", "calories":390, "correctedTerm":"6 inch Italian BMT" },
        {"foodName":"BMT", "calories":390, "correctedTerm":"6 inch Italian BMT" },
        {"foodName":"6 inch Italian BMT", "foodType":"Six inch", "calories":390},
        {"foodName":"12 inch Italian BMT", "calories":780},
        {"foodName":"Footlong Italian BMT", "calories":780},
        {"foodName":"Meatball Marinara", "calories":460},
        {"foodName":"6 inch Meatball Marinara", "calories":460},
        {"foodName":"12 inch Meatball Marinara", "calories":920},
        {"foodName":"Footlong Meatball Marinara", "calories":920},
        {"foodName":"Meatball Sub", "calories":460, "correctedTerm":"6 inch Meatball Sub" },
        {"foodName":"6 inch Meatball Sub", "calories":460},
        {"foodName":"6 inch Meatball", "calories":460, "correctedTerm":"6 inch Meatball Sub" },
        {"foodName":"12 inch Meatball Sub", "calories":920},
        {"foodName":"Footlong Meatball Sub", "calories":920},
        {"foodName":"Spicy Italian", "calories":470, "correctedTerm":"6 inch Spicy Italian" },
        {"foodName":"6 inch Spicy Italian", "calories":470},
        {"foodName":"12 inch Spicy Italian", "calories":940},
        {"foodName":"Footlong Spicy Italian", "calories":940},
        {"foodName":"Spicy Italian Footlong", "calories":940, "correctedTerm":"Footlong Spicy Italian"},
        {"foodName":"Spicy Italian Sub", "calories":470},
        {"foodName":"Steak and Cheese", "calories":470, "correctedTerm":"6 inch Steak and Cheese" },
        {"foodName":"Philly Cheese Steak","calories":470, "correctedTerm":"6 inch Steak and Cheese" },
        {"foodName":"6 inch Steak and Cheese", "calories":470},
        {"foodName":"12 inch Steak and Cheese", "calories":940},
        {"foodName":"Footlong Steak and Cheese", "calories":940},
        {"foodName":"Tuna", "calories":470},
        {"foodName":"6 inch Tuna", "calories":470},
        {"foodName":"12 inch Tuna", "calories":940},
        {"foodName":"Footlong Tuna", "calories":940},
        {"foodName":"Italian Hero", "calories":550},
        {"foodName":"6 inch Italian Hero", "calories":550},
        {"foodName":"12 inch Italian Hero", "calories":1100},
        {"foodName":"Footlong Italian Hero", "calories":1100},
        {"foodName":"Black Forest Ham Salad", "calories":110, "sideItem":true, "dressingItem":true },
        {"foodName":"Oven Roasted Chicken Salad", "calories":150, "sideItem":true, "dressingItem":true },
        {"foodName":"Roast Beef Salad", "foodType":"Salad", "calories":140, "sideItem":true, "dressingItem":true },
        {"foodName":"Rotisserie-Style Chicken Salad", "calories":170, "sideItem":true, "dressingItem":true },
        {"foodName":"Rotisserie Chicken Salad", "foodType":"Salad", "calories":170, "sideItem":true, "dressingItem":true },
        {"foodName":"Subway Club Salad", "calories":140, "sideItem":true, "dressingItem":true },
        {"foodName":"Sweet Onion Chicken Teriyaki Salad", "calories":230, "sideItem":true, "dressingItem":true },
        {"foodName":"Turkey Breast Salad", "foodType":"Salad", "calories":110, "sideItem":true, "dressingItem":true },
        {"foodName":"Veggie Delite Salad", "foodType":"Salad", "calories":60, "sideItem":true, "dressingItem":true },
        {"foodName":"Bacon, Egg & Cheese", "calories":460},
        {"foodName":"Bacon, Egg & Cheese Sandwich", "calories":460},
        {"foodName":"Ham, Egg & Cheese", "calories":410},
        {"foodName":"Ham, Egg & Cheese Sandwich", "calories":410},
        {"foodName":"Black Forest Ham, Egg & Cheese", "calories":410},
        {"foodName":"Black Forest Ham, Egg & Cheese Sandwich", "calories":410},
        {"foodName":"Egg & Cheese", "calories":380},
        {"foodName":"Egg & Cheese Sandwich", "calories":380},
        {"foodName":"Steak, Egg & Cheese", "calories":450},
        {"foodName":"Steak, Egg & Cheese Sandwich", "calories":450},
        {"foodName":"Salt and Vinegar Chips", "calories":230, "sideItem":true },
        {"foodName":"Baked BBQ", "calories":130, "sideItem":true },
        {"foodName":"Baked BBQ Chips", "calories":130, "sideItem":true },
        {"foodName":"Baked Barbeque", "calories":130, "sideItem":true },
        {"foodName":"Baked Barbeque Chips", "calories":130, "sideItem":true },
        {"foodName":"Chips", "calories":160, "sideItem":true},
        {"foodName":"Apple Slices", "calories":35, "sideItem":true },
        {"foodName":"Apple", "calories":35, "sideItem":true, "correctedTerm":"Apple Slices" },
        {"foodName":"Potato Chips", "calories":160, "sideItem":true},
        {"foodName":"Potato Chip", "calories":160, "sideItem":true},
        {"foodName":"Lays Potato Chips", "calories":160, "sideItem":true},
        {"foodName":"Doritos", "calories":140, "sideItem":true},
        {"foodName":"Doritos Nacho Cheese Tortilla Chips", "calories":140, "sideItem":true},
        {"foodName":"Cheetos", "calories":150, "sideItem":true},
        {"foodName":"Hot Cheetos", "calories":150, "sideItem":true },
        {"foodName":"Beef Chili with Beans", "foodType":"Soup", "calories":360, "sideItem":true},
        {"foodName":"Black Bean Soup", "foodType":"Soup", "calories":210, "sideItem":true},
        {"foodName":"Broccoli Cheddar Soup", "foodType":"Soup", "calories":170, "sideItem":true},
        {"foodName":"Chicken Tortilla Soup", "calories":110, "sideItem":true},
        {"foodName":"Creamy Chicken & Dumpling Soup", "calories":150, "sideItem":true},
        {"foodName":"Creamy Chicken & Wild Rice Soup", "calories":190, "sideItem":true},
        {"foodName":"French Onion Soup", "foodType":"Soup", "calories":150, "sideItem":true},
        {"foodName":"Homestyle Chicken Noodle Soup", "calories":110, "sideItem":true},
        {"foodName":"Chicken Noodle Soup", "calories":110, "sideItem":true},
        {"foodName":"Loaded Baked Potato with Bacon Soup", "calories":210, "sideItem":true},
        {"foodName":"Tomato Basil Soup", "foodType":"Soup", "calories":130, "sideItem":true},
        {"foodName":"Raspberry Cheesecake Cookie", "calories":200, "sideItem":true },
        {"foodName":"White Chip Macadamian Nut Cookie", "calories":220, "sideItem":true },
        {"foodName":"Chocolate Chunk Cookie", "calories":210, "sideItem":true },
        {"foodName":"Double Chocolate Cookie", "calories":210, "sideItem":true }
    ]
    const [boy, setBoy] = useState(0)
    const [kilo, setKilo] = useState(0)
    const [sonuc, setSonuc] = useState(0)
    const [isSubmit, setIsSubmit] = useState(false)
    const handleForm = (e) => {
        e.preventDefault()
        if (boy !== 0 && kilo !== 0){
            const result = ((kilo / (boy * boy))*10000).toFixed(1)
            setSonuc(result)
            localStorage.setItem([boy,kilo,result],nanoid())
            setIsSubmit(true)
        }
    }

    return (
        <div className="row">
            <div className="col-6 offset-3 mt-5">
                <h3 className="text-center">BMI Hesapla</h3>
                <div className="border border-5 p-4 mt-5">
                    <form onSubmit={handleForm}>
                        <div className="mb-3">
                            <label htmlFor="boy" className="form-label">Boyunuz</label>
                            <input type="number" className="form-control" id="boy" value={boy} onChange={(e) => setBoy(e.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="kilo" className="form-label">Kilonuz</label>
                            <input type="number" className="form-control" id="kilo" value={kilo} onChange={(e) => setKilo(e.target.value)}/>
                        </div>
                        <div className="mb-3 text-center mt-5">
                            <button type="submit" className="btn btn-primary">Hesapla</button>
                        </div>
                    </form>
                    <div className="text-center mt-5">
                        <h5>Beden Kitle İndexiniz</h5>
                        <h5>{sonuc}</h5>
                    </div>
                </div>
                    <div className={isSubmit ? "text-center mt-3 border border-5 mb-3" : "text-center mt-3 d-none"}>
                        <h5 className="mt-3 mb-3">Size Uygun Diyet Listesi</h5>
                        <div className="row">
                            <div className="col-6 offset-1">
                                Yiyecek
                            </div>
                            <div className="col-4">
                                Kalori
                            </div>
                        </div>
                        <Diyet number = {Math.floor(Math.random() * dietList.length)}/>
                        <Diyet number = {Math.floor(Math.random() * dietList.length)}/>
                        <Diyet number = {Math.floor(Math.random() * dietList.length)}/>
                        <Diyet number = {Math.floor(Math.random() * dietList.length)}/>
                        <Diyet number = {Math.floor(Math.random() * dietList.length)}/>
                    </div>
            </div>   
        </div>
    )
}

export default Bmi
