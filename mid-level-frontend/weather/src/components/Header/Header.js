import {useEffect, useState} from 'react'

function Header() {

    const [City, setCity] = useState('');
    const [Search, setSearch] = useState('');
    const [Weather, setWeather] = useState('');

    useEffect(() => {
        console.log('City', City);
        console.log('Search', Search);
        console.log('Weather', Weather);
    }, [City, Search, Weather]);


    return (
        <div>
            <div className="header">
                <h1>Hava Durumu</h1>
                <div className="searchbar">
                {/* Şehir adındaki boşlukları temizle */}
                    <input type="text" placeholder="Şehir adını giriniz"
                        onChange={(e) => {
                            setCity(e.target.value.replace(/\s/g, ''));
                        }
                        }
                     />
                    <button>Ara</button>
                </div>
                <div className = "date">
                    <p>{new Date().toLocaleDateString()}</p>
                </div>
            </div>
        </div>
    )
}

export default Header