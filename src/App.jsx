import './App.css';
import {bestSellingTv, inventory} from "./constants/inventory.js";
import televisionsSold from "./helpers/televisionsSold.js";
import televisionsPurchased from "./helpers/televisionsPurchased.js";
import televisionsToBeSold from "./helpers/televisionsToBeSold.js";
import productBrandTypeName from "./helpers/productBrandTypeName.js";
import euroFormat from "./helpers/euroFormat.js";
import televisionAvailableSizes from "./helpers/televisionAvailableSizes.js";
import check from './assets/check.png';
import minus from './assets/minus.png';

console.log(televisionsSold(inventory));
console.log(televisionsPurchased(inventory));
console.log(televisionsToBeSold(inventory));
console.log(productBrandTypeName(bestSellingTv));
console.log(euroFormat(111));
console.log(televisionAvailableSizes(bestSellingTv));

function App() {

    function onBestSeller() {
        console.log("Meest verkocht eerst");
        inventory.sort((a, b) => b.sold - a.sold);
        console.log(inventory);
        // inventory.map(i=>console.log(i.sold));
    }

    function onCheapest() {
        console.log("Goedkoopste eerst");
        inventory.sort((a, b) => a.price - b.price);
        console.log(inventory);
        inventory.map(i => console.log(i.price));
    }

    function onSportTv() {
        console.log("Meest geschikt voor sport eerst");
        inventory.sort((a, b) => b.refreshRate - a.refreshRate);
        console.log(inventory);
        inventory.map(i => console.log(`${i.brand} ${i.name} ${i.refreshRate}`));
    }

    function onScreenSizes() {
        console.log("Grootste schermgroottes eerst");
        inventory.sort((a, b) => b.availableSizes[b.availableSizes.length - 1] - a.availableSizes[a.availableSizes.length - 1]);
        console.log(inventory);
    }

    return (
        <main>
            <h1>Tech it easy dashboard</h1>
            <h2>Verkoopoverzicht</h2>
            <section className="out-con review">
                <article className="sold">
                    <h3>Aantal verkochte producten</h3>
                    <p>{televisionsSold(inventory)}</p>
                </article>
                <article className="purchased">
                    <h3>Aantal ingekochte producten</h3>
                    <p>{televisionsPurchased(inventory)}</p>
                </article>
                <article className="toBeSold">
                    <h3>Aantal te verkopen producten</h3>
                    <p>{televisionsToBeSold(inventory)}</p>
                </article>
            </section>
            <section>
                <h2>Best verkochte tv</h2>
                <div className="bestSold out-con">
                    <img src={bestSellingTv.sourceImg} alt={bestSellingTv.name}/>
                    <section className="product">
                        <p>{productBrandTypeName(bestSellingTv)}</p>
                        <p>{euroFormat(bestSellingTv.price)}</p>
                        <p>{televisionAvailableSizes(bestSellingTv)}</p>
                    </section>
                </div>
            </section>
            <button type="button" onClick={onBestSeller}>Meest verkocht eerst</button>
            <button type="button" onClick={onCheapest}>Goedkoopste eerst</button>
            <button type="button" onClick={onSportTv}>Meest geschikt voor sport eerst</button>
            <button type="button" onClick={onScreenSizes}>Grootste schermgroottes eerst</button>
            <div>
                <h3>Beschikbare merken</h3>
                <ul>
                    {
                        inventory.map((tv) => {
                            return <li key={`merkenlijst-${tv.type}`}>{tv.brand}</li>
                        })}
                </ul>
            </div>
            <div>
                <h3>Alle tvs</h3>
                {
                    inventory.map((tv) => {
                        return (
                            <div key={tv.type} className="out-con prod-con">
                                <img src={tv.sourceImg} alt={tv.name}/>
                                <section className="product">
                                    <p>{productBrandTypeName(tv)}</p>
                                    <p>{euroFormat(tv.price)}</p>
                                    <p>{televisionAvailableSizes(tv)}</p>
                                    <p>
                                        <ul className="out-con">
                                            {
                                                tv.options.map((o) => {
                                                        if (o.applicable) {
                                                            return <li key={o.name}><img
                                                                src={check} alt="check"/>{o.name}
                                                            </li>;
                                                        } else {
                                                            return <li key={o.name}><img
                                                                src={minus} alt="minus"/>{o.name}
                                                            </li>;
                                                        }
                                                    }
                                                )
                                            }
                                        </ul>
                                    </p>
                                </section>
                            </div>);
                    })
                }

            </div>
        </main>
    )
}

export default App
